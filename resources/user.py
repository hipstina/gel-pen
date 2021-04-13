from flask_restful import Resource
from flask import request
from models.user import User
from models.db import db
from sqlalchemy.orm import joinedload


class Users(Resource):
    def get(self):
        data = User.find_all()
        print("DATA!!", data)
        # try:
        # results = [u.json() for u in data]
        print('SUCCESS getting all users')
        return data
        # return results
        # except:
        # return {"msg": "Error getting all users"}

    def post(self):
        data = request.get_json()
        # try:
        user = User(**data)
        user.create()
        return user.json(), 201
        # except:
        return {"msg": "Error creating a user"}


class OneUser(Resource):
    def get(self, id):
        user = User.find_by_id(id)
        return user.json()

    def delete(self, id):
        try:
            user = User.find_by_id(id)
            db.session.delete(user)
            db.session.commit()
            return{"msg": 'User deleted', 'payload': user.id}
        except:
            return{"msg": 'User not deleted'}

    def put(self, id):
        try:
            user = User.find_by_id(id)
            data = request.get_json()
            allowed = list(user.json().keys())
            excluded = ["id", "created_at", "updated_at"]
            for key in data:
                if key in allowed and key not in excluded:
                    setattr(user, key, data[key])
            db.session.commit()
            return user.json()
        except:
            return{"msg": 'User not updated'}


class ThemesByUser(Resource):
    def get(self, id):
        userthemes = User.include_themes(id)
        return userthemes


class ReviewsThemesByUser(Resource):
    def get(self, id):
        userthemes = User.include_themes_reviews(id)
        return userthemes
