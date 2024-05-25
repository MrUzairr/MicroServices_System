from flask import Blueprint

# from book_controller import *
# Create a Blueprint object
book_blueprint = Blueprint('book_blueprint', __name__)

# Import routes from the book controller
from App.Controller import bookController

# Register routes from the book controller with the Blueprint
book_blueprint.add_url_rule('/getbooks', view_func=bookController.get_books, methods=['GET'])
book_blueprint.add_url_rule('/getbookbyid/<int:id>', view_func=bookController.get_book, methods=['GET'])
book_blueprint.add_url_rule('/books', view_func=bookController.add_book, methods=['POST'])
book_blueprint.add_url_rule('/updatebook/<int:id>', view_func=bookController.update_book, methods=['PUT'])
book_blueprint.add_url_rule('/delbook/<int:id>', view_func=bookController.delete_book, methods=['DELETE'])
