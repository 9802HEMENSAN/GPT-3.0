from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/create", methods=["POST"])
def create():
    return "Chunnu munnu created !"

if __name__ == '__main__':
    app.run()
