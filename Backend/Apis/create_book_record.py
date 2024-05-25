from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from Apis.Models.book_model import Book  # Import your SQLAlchemy model

# Create a connection to the MySQL database using SQLAlchemy
engine = create_engine('mysql+pymysql://uzair_admin:12345qweRTY&&@localhost/python_db')

# Create a Session class bound to the engine
Session = sessionmaker(bind=engine)

# Create a session object
session = Session()

# Define the data you want to insert
new_book_data = {
    'title': 'Book 2',
    'author': 'Programming Fundamentals',
    'year_published': 2002,
    'price': 29.99
}

# Create a new Book object using the provided data
new_book = Book(**new_book_data)

# Add the new_book object to the session
session.add(new_book)

# Commit the transaction to insert the record into the database
session.commit()

# Close the session
session.close()
