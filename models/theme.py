from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime  # optional


class Theme(db.Model):
    __tablename__: 'themes'
    id = db.Column(db.Integer, primaryKey=True)
    css_styles: db.Column(db.Text)
    theme_name: db.Column(db.String(80))
    likes: db.Column(db.Integer(12))
    theme_description: db.Column(db.String(255))
    created_at = db.Column(b.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)

    def __init__(self, css_styles, theme_name, likes, theme_description):
        self.css_styles = css_styles
        self.theme_name = theme_name
        self.likes = likes
        self.theme_description = theme_description

    def json(self):
        return {
            "id": self.id,
            "css_styles": self.css_styles,
            "theme_name": self.theme_name,
            "likes": self.likes,
            "theme_description": self.theme_description,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }


def create(self):
    db.session.add(self)
    db.session.commit()
    return self


@classmethod
def find_all(cls):
    return Theme.query.all()


@classmethod  # find all themes by user_id
def find_by_user(cls):
    return Theme.query.all()


@classmethod
def find_by_id(cls, id):
    return Theme.query.filter_by(id=id).first()
