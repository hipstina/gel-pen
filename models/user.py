from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime  # optional


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password_digest = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)


def __init__(self, username, password_digest):
    self.username = username
    self.password_digest = password_digest


def json(self):
    return {
        "id": self.id,
        "username": self.username,
        "password_digest": self.password_digest,
        "created_at": str(self.created_at),
        "updated_at": str(self.updated_at)
    }


def create(self):
    db.session.add(self)
    db.session.commit()
    return self


@classmethod
def find_all(cls):
    return User.query.all()


@classmethod
def find_by_id(cls, id):
    return User.query.filter_by(id=id).first()
