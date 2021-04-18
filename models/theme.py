from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime  # optional
import json
from sqlalchemy.dialects.postgresql.json import JSONB


class Theme(db.Model):
    __tablename__ = 'themes'
    id = db.Column(db.Integer, primary_key=True)
    css_styles = db.Column(JSONB)
    theme_name = db.Column(db.String(80))
    font_type = db.Column(db.String(80), nullable=True)
    lang = db.Column(db.String(80), nullable=True)
    likes = db.Column(db.Integer)
    theme_description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    user = db.relationship("User", backref=db.backref(
        'user', lazy=True))
    reviews = db.relationship("Review", cascade='all', backref=db.backref(
        'reviews', lazy=True))

    def __init__(self, css_styles, theme_name, font_type, lang, likes, theme_description, user_id):
        self.css_styles = css_styles
        self.theme_name = theme_name
        self.font_type = font_type
        self.lang = lang
        self.likes = likes
        self.theme_description = theme_description
        self.user_id = user_id

    def json(self):
        return {
            "id": self.id,
            "css_styles": self.css_styles,
            "theme_name": self.theme_name,
            "font_type": self.font_type,
            "lang": self.lang,
            "likes": self.likes,
            "theme_description": self.theme_description,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at),
            "user_id": self.user_id
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        return Theme.query.all()

    @classmethod  # find all themes by user_id
    def find_by_user(cls, user_id):
        return Theme.query.all()

    @classmethod
    def find_by_id(cls, id):
        return Theme.query.filter_by(id=id).first()

    @classmethod
    def include_reviews(cls, theme_id):
        theme = Theme.query.options(joinedload(
            'reviews')).filter_by(id=theme_id).first()
        reviews = [r.json() for r in theme.reviews]
        return {**theme.json(), "reviews": reviews}
