from flask import Flask, request,render_template
import mariadb

app = Flask(__name__)

conn = mariadb.connect( #Uitiliza el i import de mariadb
    user="",
    password="",
    port=3306,
    database=""
)

cursor = conn.cursor() # generó el cursor que permite la interaccion con la base de datos.
# app.route -> importante para poder visitar estas paginas al cargarla con el local host de python
@app.route("/loginv1", methods=["POST"])
def login():
    password = request.form["password"]

    cursor.execute("INSERT INTO usario (password) VALUES (?)", (password,))
    conn.commit()

    return render_template("index.html") #se encarga de renderizar el index.html, no necesita su ubicacion, por que  flask gracias a su estructura con los directorios, sabe buscarlos.
@app.route("/")
def index():
    return render_template("index.html")
app.run(port=5000) #importante para que ande el local host

