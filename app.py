from flask import Flask, jsonify, render_template
from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)


# Connessione a MongoDB (modifica l’URL se necessario)
client = MongoClient("mongodb+srv://distributori:Lory_230807@cluster0.zgxlfeh.mongodb.net/")
db = client["gestione_distributori"]
collection = db["distributori"]


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/distributori', methods=['GET'])
def get_distributori():
    distributori = list(collection.find({}, {'_id': 0}))
    #distributori.sort(key=lambda x: x['id'])
    return jsonify(distributori)


if __name__ == '__main__':
    app.run(debug=True)