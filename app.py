from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from resources.user import UserResource 
from resources.review import ReviewResource 
from resources.theme import ThemeResource 
from models.db import db
from models import user, review, theme
