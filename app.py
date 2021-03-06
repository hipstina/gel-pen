from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from resources.user import Users, OneUser, ThemesByUser, ReviewsThemesByUser
from resources.review import Reviews, OneReview
from resources.theme import Themes, OneTheme, ReviewsByTheme
from resources.auth import Login, Register, Session
from models.db import db
from models.user import User
from models.review import Review
from models.theme import Theme
from flask_cors import CORS
import os

app = Flask(__name__)
cors = CORS(app)
api = Api(app)


DATABASE_URL = os.getenv('DATABASE_URL')
if DATABASE_URL:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL.replace(
        "://", "ql://", 1)
    app.config['SQLALCHEMY_ECHO'] = False
    app.env = 'production'
else:
    app.debug = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/gel_pen_db"
    app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(Users, '/users')
api.add_resource(OneUser, '/users/<int:id>')
api.add_resource(ThemesByUser, '/user/themes/<int:id>')
api.add_resource(ReviewsThemesByUser, '/user/theme/reviews/<int:id>')

api.add_resource(Reviews, '/themes/reviews')
api.add_resource(OneReview, '/themes/review/<int:id>')
api.add_resource(ReviewsByTheme, '/themes/reviews/<int:id>')

api.add_resource(Themes, '/themes')
api.add_resource(OneTheme, '/themes/<int:id>')

api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')
api.add_resource(Session, '/auth/session')

if __name__ == '__main__':
    app.run()
