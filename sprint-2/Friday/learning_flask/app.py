from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return  render_template("home.html")

@app.route("/contact")
def contact():
    return 'Contact Page'

@app.route("/products")
def Products() : 
     return 'Products Page'

if __name__ == '__main__':
    app.run(debug=True)
