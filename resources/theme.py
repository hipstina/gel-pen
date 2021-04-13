from flask_restful import Resource
from flask import request
from models.theme import Theme
from models.db import db
from sqlalchemy.orm import joinedload


class Themes(Resource):
    def get(self):
        data = Theme.find_all()
        results = [t.json() for t in data]
        return results

    def post(self):
        data = request.get_json()
        theme = Theme(**data)
        theme.create()
        return theme.json(), 201


class OneTheme(Resource):
    def get(self, theme_id):
        theme = Theme.find_by_id(theme_id)
        return theme.json()

    def delete(self, id):
        theme = Theme.find_by_id(theme_id)
        db.session.delete(theme)
        db.session.commit()
        return{"msg": 'Theme deleted', 'payload': theme.id}

    def put(self, theme_id):
        theme = Theme.find_by_id(theme_id)
        data = request.get_json()
        for key in data:
            setattr(theme, key, data[key])
        db.session.commit()
        return theme.json()
