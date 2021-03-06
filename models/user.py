from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime  # optional


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    password_digest = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    theme = db.relationship("Theme", cascade='all', backref=db.backref(
        'user_theme', lazy=True))  # association

    def __init__(self, username, password_digest):
        self.username = username
        self.password_digest = password_digest

    def json(self):
        return {
            "id": self.id,
            "username": self.username,
            # "password_digest": self.password_digest,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self.json()

    @classmethod
    def find_all(cls):
        users = User.query.all()
        return [u.json() for u in users]
        # print("Error finding all users")

    @classmethod
    def find_by_id(cls, id):
        return User.query.filter_by(id=id).first()

    @classmethod
    def find_by_username(cls, username):
        user = User.query.filter_by(username=username).first()
        return user

    @classmethod
    def include_themes(cls, id):
        user = User.query.options(joinedload(
            'theme')).filter_by(id=id).first()
        themes = [t.json() for t in user.theme]
        return {**user.json(), "themes": themes}

    @classmethod
    def include_themes_reviews(cls, id):
        user = User.query.options(joinedload(
            'theme').joinedload(
            'reviews')).filter_by(id=id).all()

        themes = [u.theme for u in user]
        for theme in themes:
            for t in theme:
                print("a theme", t.json())
                reviews = [r.json() for r in t.reviews]
                return {
                    "user": {**user[0].json()},
                    "theme": t.json(), "reviews": reviews
                }
