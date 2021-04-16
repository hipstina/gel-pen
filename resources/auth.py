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
            if match:
                payload = {
                    "id": user.id,
                    "username": user.username
                }
                token = create_token(payload)
                return {"user": payload, "token": token}
        return 'Unauthorized user', 401


class Session(Resource):
    def get(self):
        token = strip_token(request)
        if token:
            payload = read_token(token)
            return payload
        return 'Unauthorized token', 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "username": data['username'],
            "password_digest": gen_password(data['password'])
        }
        user = User(**params)
        user.create()  # TODO: Add error handling for username already existing
        return user.json(), 201
