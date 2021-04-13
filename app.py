from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from resources.user import Users, OneUser
# from resources.review import ReviewResource
from resources.theme import Themes, OneTheme
from resources.auth import Login, Register
from models.db import db
from models.user import User
from models.review import Review
from models.theme import Theme
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
api = Api(app)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/gel_pen_db"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(Users, '/users')
api.add_resource(OneUser, '/users/<int:id>')
# api.add_resource(Reviews, '/reviews')
api.add_resource(Themes, '/themes')
api.add_resource(OneTheme, '/user/<int:id>')
# api.add_resource(ThemeById, '/themes/<int:id>')
api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')


if __name__ == '__main__':
    app.run(debug=True)
