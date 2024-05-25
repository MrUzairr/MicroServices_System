from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from Apis.Models.book_model import Book  # Import your SQLAlchemy model
import pandas as pd
# Create a connection to the MySQL database using SQLAlchemy
engine = create_engine('mysql+pymysql://uzair_admin:12345qweRTY&&@localhost/python_db')
books_df = pd.read_sql_query("SELECT * FROM books", engine)

print(books_df)
# # Create a Session class bound to the engine
# Session = sessionmaker(bind=engine)

# # Create a session object
# session = Session()

# # Query all records from the Book table
# books = session.query(Book).all()

# # Print the retrieved books
# for book in books:
#     print(book.title, book.author, book.year_published, book.price)

# # Close the session
# session.close()
