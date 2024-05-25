from flask_sqlalchemy import SQLAlchemy

from App import db

# Initialize SQLAlchemy
# db = SQLAlchemy()

# Define the Book model
class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    year_published = db.Column(db.Integer)
    price = db.Column(db.Float)

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'year_published': self.year_published,
            'price': self.price
        }



# # your_database_model.py

# from sqlalchemy import Column, Integer, String, Float
# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()

# class Book(Base):
#     __tablename__ = 'books'

#     id = Column(Integer, primary_key=True)
#     title = Column(String(255))
#     author = Column(String(255))
#     year_published = Column(Integer)
#     price = Column(Float)

#     def __repr__(self):
#         return f"<Book(title='{self.title}', author='{self.author}', year_published={self.year_published}, isbn='{self.isbn}', genre='{self.genre}', price={self.price})>"
