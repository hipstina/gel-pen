import bcrypt
import jwt
from dotenv import load_dotenv
import os

load_dotenv()
SECRET_KEY = os.getenv('APP_SECRET')
