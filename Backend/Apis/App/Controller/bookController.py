from flask import request, jsonify
from App.Models.book_model import Book
from App import db

def get_books():
    try:
        print("Books")
        books = Book.query.all()
        print("Books", books)
        return jsonify([book.serialize() for book in books])
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500 
    # print("Books")
    # books = Book.query.all()
    # print("Books",books)
    # return jsonify([book.serialize() for book in books])

def get_book(id):
    book = Book.query.get(id)
    try:
        if book:
            return jsonify(book.serialize())
        else:
            return jsonify({'error': 'Book not found'}), 404
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500 

def add_book():
    data = request.json
    print("Data", data)
    try:
        new_book = Book(title=data['title'], author=data['author'], year_published=data['year_published'], price=data['price'])
        print("New Book", new_book)
        db.session.add(new_book)
        db.session.commit()
        return jsonify({'message': 'Book added successfully'}), 201
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500 

def update_book(id):
    data = request.json
    book = Book.query.get(id)
    try:
        if book:
            book.title = data.get('title', book.title)
            book.author = data.get('author', book.author)
            book.year_published = data.get('year_published', book.year_published)
            book.price = data.get('price', book.price)
            db.session.commit()
            return jsonify({'message': 'Book updated successfully'})
        else:
            return jsonify({'error': 'Book not found'}), 404
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500 

def delete_book(id):
    book = Book.query.get(id)
    try:
        if book:
            db.session.delete(book)
            db.session.commit()
            return jsonify({'message': 'Book deleted successfully'})
        else:
            return jsonify({'error': 'Book not found'}), 404
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500 








# from flask import Flask, request, jsonify
# from book_model import Book  # Import your SQLAlchemy model class
# from book_database import db  # Import the SQLAlchemy database object

# app = Flask(__name__)

# # Route to get all books
# @app.route('/books', methods=['GET'])
# def get_books():
#     books = Book.query.all()
#     return jsonify([book.serialize() for book in books])

# # Route to get a single book by its ID
# @app.route('/books/<int:id>', methods=['GET'])
# def get_book(id):
#     book = Book.query.get(id)
#     if book:
#         return jsonify(book.serialize())
#     else:
#         return jsonify({'error': 'Book not found'}), 404

# # Route to add a new book
# @app.route('/books', methods=['POST'])
# def add_book():
#     data = request.json
#     new_book = Book(title=data['title'], author=data['author'], year_published=data['year_published'], price=data['price'])
#     db.session.add(new_book)
#     db.session.commit()
#     return jsonify({'message': 'Book added successfully'}), 201

# # Route to update an existing book
# @app.route('/books/<int:id>', methods=['PUT'])
# def update_book(id):
#     data = request.json
#     book = Book.query.get(id)
#     if book:
#         book.title = data.get('title', book.title)
#         book.author = data.get('author', book.author)
#         book.year_published = data.get('year_published', book.year_published)
#         book.price = data.get('price', book.price)
#         db.session.commit()
#         return jsonify({'message': 'Book updated successfully'})
#     else:
#         return jsonify({'error': 'Book not found'}), 404

# # Route to delete a book
# @app.route('/books/<int:id>', methods=['DELETE'])
# def delete_book(id):
#     book = Book.query.get(id)
#     if book:
#         db.session.delete(book)
#         db.session.commit()
#         return jsonify({'message': 'Book deleted successfully'})
#     else:
#         return jsonify({'error': 'Book not found'}), 404

# if __name__ == '__main__':
#     app.run(debug=True)








# from flask import Flask, request, jsonify
# import mysql.connector

# app = Flask(__name__)

# # Connect to MySQL
# db = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="123qwe",
#     database="BankEase"
# )
# print(db)

# # Create a cursor object to execute SQL queries
# cursor = db.cursor()

# # Routes for CRUD operations
# @app.route('/books', methods=['GET'])
# def get_books():
#     cursor.execute("SELECT * FROM books")
#     books = cursor.fetchall()
#     return jsonify(books)

# @app.route('/books/<int:id>', methods=['GET'])
# def get_book(id):
#     cursor.execute("SELECT * FROM books WHERE id = %s", (id,))
#     book = cursor.fetchone()
#     return jsonify(book)

# @app.route('/books', methods=['POST'])
# def add_book():
#     data = request.json
#     query = "INSERT INTO books (title, author, year) VALUES (%s, %s, %s)"
#     values = (data['title'], data['author'], data['year'])
#     cursor.execute(query, values)
#     db.commit()
#     return jsonify({"message": "Book added successfully"})

# @app.route('/books/<int:id>', methods=['PUT'])
# def update_book(id):
#     data = request.json
#     query = "UPDATE books SET title = %s, author = %s, year = %s WHERE id = %s"
#     values = (data['title'], data['author'], data['year'], id)
#     cursor.execute(query, values)
#     db.commit()
#     return jsonify({"message": "Book updated successfully"})

# @app.route('/books/<int:id>', methods=['DELETE'])
# def delete_book(id):
#     query = "DELETE FROM books WHERE id = %s"
#     cursor.execute(query, (id,))
#     db.commit()
#     return jsonify({"message": "Book deleted successfully"})

# if __name__ == '__main__':
#     app.run(debug=True)
