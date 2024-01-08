from flask import Flask
from flask_cors import CORS 
from .api import api_bp
import os

def create_app():
    app = Flask(__name__)
    CORS(app, origins='*')

    check_environment_variables(["PERPLEXITY_API_KEY", "OPENAI_API_KEY", "OPENAI_CRITIQ_ASSISTANT_ID"])

    app.register_blueprint(api_bp)

    return app

def check_environment_variables(variables):
    for variable in variables:
        if not os.environ.get(variable):
            raise EnvironmentError(f"Environment variable '{variable}' is not set.")
