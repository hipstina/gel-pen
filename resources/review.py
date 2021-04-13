from flask_restful import Resource
from flask import request
from models.review import Review
from models.db import db
from sqlalchemy.orm import joinedload


class Reviews(Resource):
    def get(self):
        data = Review.find_all()
        return data

    def post(self):
        data = request.get_json()
        review = Review(**data)
        review.create()
        print('SUCCESS creating review')
        return review.json(), 201


class OneReview(Resource):
    def get(self, id):
        review = Review.find_by_id(id)
        return review.json()

    def delete(self, id):
        review = Review.find_by_id(id)
        db.session.delete(review)
        db.session.commit()
        return{"msg": 'Review deleted', 'payload': review.id}

    def put(self, id):
        review = Review.find_by_id(id)
        data = request.get_json()
        for key in data:
            setattr(review, key, data[key])
        db.session.commit()
        return review.json()


class ReviewsByTheme(Resource):
    def get(self, id):
        themereviews = Theme.include_reviews(id)
        return themereviews
