from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    theme_id = db.Column(db.Integer, db.ForeignKey(
        'themes.id'), nullable=False)  # FK
    theme = db.relationship("Theme", backref=db.backref(
        'theme', lazy=True))  # association

    def __init__(self, title, content, theme_id):
        self.title = title
        self.content = content
        self.theme_id = theme_id

    def json(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at),
            "theme_id": self.theme_id
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod  # find all reviews by theme_id
    def find_all(cls):
        reviews = Review.query.all()
        return [r.json() for r in reviews]

    @classmethod
    def find_by_id(cls, id):
        return Review.query.filter_by(id=id).first()
