from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime


class Review(db.Model):
    __tablename__: 'reviews'
    id = db.Column(db.Integer, primaryKey=True)
    title = db.Column(db.String(80))
    content = db.Column(db.String(255))
    created_at = db.Column(b.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)


def __init__(self, title, content):
    self.title = title
    self.content = content


def json(self):
    return {
        "id": self.id,
        "title": self.title,
        "content": self.content,
        "created_at": str(self.created_at),
        "updated_at": str(self.updated_at)
    }


def create(self):
    db.session.add(self)
    db.session.commit()
    return self


@classmethod  # find all reviews by theme_id
def find_all(cls, theme_id):
    return Review.query.all()


@classmethod
def find_by_id(cls, id):
    return Review.query.filter_by(id=id).first()
