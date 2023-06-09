from flask import Flask
from flask import request
from flask import jsonify
from flask import render_template
from flask_cors import CORS, cross_origin # para que no genere errores de CORS al hacer peticiones

from Backend.blueprints.task_blueprint import task_blueprint

app = Flask(__name__,template_folder='Frontend',static_folder='Frontend/static')
# para que utilice vue compilado ( npm run build ). En la carpeta dist, esta lo compilado de vue
# app = Flask(__name__, template_folder= './Frontend')

app.register_blueprint(task_blueprint)

cors = CORS(app)


# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def dender_vue(path):
#     return render_template("index.html")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/carrito')
def carrito():
    return render_template('carrito.html')

if __name__ == "__main__":
    app.run(debug=True)

