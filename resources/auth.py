from flask_restful import Resource
from flask import request
from models.user import User
from middleware import create_token, gen_password, strip_token, read_token, compare_password
from models.db import db


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.find_by_username(data['username'])
        if not user:
            return {"msg": "user not found"}, 404
        else:
            match = compare_password(
                data['password'], user.password_digest
            )
            payload = {
                "id": user.id,
                "username": user.username
            }
            token = create_token(payload)
        return {"user": payload, "token": token}

    def get(self):  # use this to protect your routes; load middleware
        token = strip_token(request)
        if token:
            payload = read_token(token)
            return payload
        return 'Unauthorized', 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "username": data['username'],
            "password_digest": gen_password(data['password'])
        }
        user = User(**params)
        print("NEW USER INSTANCE! ", user.password_digest)
        user.create()
        print("NEW USER CREATED! ", user)
        return user.json(), 201
