import os
import mysql.connector
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sqlalchemy import create_engine


# Create a connection to the MySQL database using SQLAlchemy
engine = create_engine('mysql+pymysql://root:1234@localhost/python_db')
# engine = create_engine('mysql+pymysql://uzair_admin:12345qweRTY&&@localhost/python_db')


db = pd.read_sql_query("SHOW TABLES FROM python_db", engine)
print(db)

# db = mysql.connector.connect(
#     host="localhost"
#     , user="uzair_admin"
#     , passwd="12345qweRTY&&"
#     , database="python_db"
# )
# Perform the query using pandas and SQLAlchemy engine
# python_database = pd.read_sql_query("SHOW TABLES FROM python_db", db)

# import pypyodbc as obdc

# DRIVER_NAME = "SQL Server"
# SERVER_NAME = "HP-G4"
# DATABASE_NAME = "BankEase"

# # uid = <username>;
# # pwd = <password>;
# connection_string = f"""
#     Driver={{{DRIVER_NAME}}};
#     Server={SERVER_NAME};
#     Database={DATABASE_NAME};
#     Trusted_Connection=yes;
# """

# conn = obdc.connect(connection_string)
# print(conn)