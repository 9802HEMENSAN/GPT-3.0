from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # Replace with your database URI
db = SQLAlchemy(app)   

# Define a model representing a table in the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# Route to display all users in the database
@app.route('/users')
def users():
    all_users = User.query.all()
    return ', '.join([user.username for user in all_users])

if __name__ == '__main__':
    app.run(debug=True)
