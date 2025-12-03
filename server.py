from flask import Flask, request
import mariadb

app = Flask(__name__)

conn = mariadb.connect(
    user="",
    password="",
    host="",
    port=3306,
    database="passwordProy"
)

cursor = conn.cursor()

@app.route("/loginv1", methods=["POST"])
def login():
    password = request.form["password"]

    cursor.execute("INSERT INTO usario (password) VALUES (?)", (password,))
    conn.commit()

    return open("index.html").read() 
app.run(port=5000)

