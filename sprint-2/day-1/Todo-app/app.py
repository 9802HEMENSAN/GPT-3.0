from flask import Flask, render_template, request, redirect, jsonify
import json
from datetime import datetime

app = Flask(__name__)
todos = []

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        data = request.get_json()
        todo = {
            'title': data.get('title'),
            'desc':  data.get('desc'),
            'date_created': datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
        }
        print(todo)
        todos.append(todo)
        save_todos_to_file()
        return redirect('/')

    return render_template('index.html', allTodo=todos)

@app.route('/show')
def products():
    return jsonify(todos)

@app.route('/update/<int:index>', methods=['GET', 'POST'])
def update(index):
    if index < 0 or index >= len(todos):  # Check if index is valid
        return "Invalid index"

    if request.method == 'POST':
        data = request.get_json()
        todo = todos[index]
        todo['title'] = data.get('title')
        todo['desc'] =  data.get('desc')
        save_todos_to_file()
        return redirect('/')

    todo = todos[index]
    return render_template('update.html', todo=todo)

@app.route('/delete/<int:index>')
def delete(index):
    if index < 0 or index >= len(todos):  # Check if index is valid
        return "Invalid index"

    todos.pop(index)
    save_todos_to_file()
    return redirect('/')

def save_todos_to_file():
    with open('todos.json', 'w') as file:
        json.dump(todos, file)

def load_todos_from_file():
    try:
        with open('todos.json', 'r') as file:
            todo_list = json.load(file)
            todos.extend(todo_list)
    except FileNotFoundError:
        pass

if __name__ == "__main__":
    load_todos_from_file()
    app.run(debug=True)
