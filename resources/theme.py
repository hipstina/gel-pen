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
    def get(self, id):
        theme = Theme.find_by_id(id)
        return theme.json()

    def delete(self, id):
        theme = Theme.find_by_id(id)
        db.session.delete(theme)
        db.session.commit()
        return{"msg": 'Theme deleted', 'payload': theme.id}

    def put(self, id):
        theme = Theme.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(theme, key, data[key])
        db.session.commit()
        return theme.json()


class ReviewsByTheme(Resource):
    def get(self, id):
        themereviews = Theme.include_reviews(id)
        return themereviews
