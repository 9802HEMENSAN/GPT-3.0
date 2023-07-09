from flask import Flask, request, flash, url_for, redirect, render_template 
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
app.config['SECRET_KEY'] = "random string"

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column('student_id', db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    city = db.Column(db.String(50))
    addr = db.Column(db.String(200))
    pin = db.Column(db.String(10))

    def __init__(self, name, city, addr, pin):
        self.name = name
        self.city = city
        self.addr = addr
        self.pin = pin


@app.route('/')
def show_all():
    students = Student.query.all()
    return render_template('show_all.html', students=students)


@app.route('/new', methods=['GET', 'POST'])
def new():
    if request.method == 'POST':
        if request.headers.get('content-type') == 'application/json':
            data = request.get_json()
            print(data)
            if not data.get('name') or not data.get('city') or not data.get('addr'):
                flash('Please enter all the fields', 'error')
            else:
                student = Student(data.get('name'), data.get('city'), data.get('addr'), data.get('pin'))
                db.session.add(student)
                db.session.commit()

                flash('Record was successfully added')
                return redirect(url_for('show_all'))
        else:
            flash('Invalid request content type. Expected application/json.', 'error')
    return render_template('new.html')



if __name__ == '__main__':
   with app.app_context():
    db.create_all()
    app.run(debug=True)
