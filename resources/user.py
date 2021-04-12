from flask_restful import Resource
from flask import request
from models.user import User
from models.db import db
from sqlalchemy.orm import joinedload


class Users(Resource):
    def get(self):
        data = User.find_all()
        results = [u.json() for u in data]
        return results

    def post(self):
        data = request.get_json()
        user = User(**data)
        user.create()
        return user.json(), 201


class OneUser(Resource):
    def get(self, id):
        user = User.find_by_id(id)
        return user.json()

    def delete(self, id):
        user = User.find_by_id(id)
        db.session.delete(user)
        db.session.commit()
        return{"msg": 'User deleted', 'payload': user.id}

    def put(self, id):
        user = User.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(user, key, data[key])
        db.session.commit()
        return user.json()
