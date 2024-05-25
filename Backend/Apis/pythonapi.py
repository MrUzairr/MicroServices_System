from App import app
from App.Routes import routes
app.register_blueprint(routes.book_blueprint, url_prefix='/app_py')
app.route('/app_py')
app.run(debug=True, port=5000)


# from flask import Flask
# from App.Routes import routes
# # from flask_sqlalchemy import SQLAlchemy
# # from routes import book_blueprint

# app = Flask(__name__)

# # app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://uzair_admin:12345qweRTY&&@localhost/python_db'
# # app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# # db = SQLAlchemy()

# # db.init_app(app)
# # Register the book blueprint with the Flask app
# app.register_blueprint(routes.book_blueprint, url_prefix='/app_py')
# # app.register_blueprint(routes.book_blueprint, url_prefix='/app_py')
# # Example endpoint for Python API
# @app.route('/app_py')
# def python_endpoint():
#     return 'This is a Python API endpoint'

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)


# # from flask import Flask

# # app = Flask(__name__)

# # # Example endpoint for Python API
# # @app.route('/app_py')
# # def python_endpoint():
# #     return 'This is a Python API endpoint'

# # if __name__ == '__main__':
# #     app.run(debug=True, port=5000)
