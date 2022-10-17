from flask import Flask, request
from flask_cors import CORS, cross_origin

from classify import *

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello():
    return '<h1>Smart Course API</h1>'

@app.route('/search')
@cross_origin()
def search():
    query = request.args.get('query')
    return classify(query)