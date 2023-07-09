from flask import Flask, render_template, request, redirect

app = Flask(__name__)

data_dict = {}

@app.route('/')
def hello_world():
    return 'Welcome to Flask Application!'

@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html', data=data_dict)

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        
        if not name or not age:
            return render_template('create.html', error="Name and age are required.")
        
        if name in data_dict:
            return render_template('create.html', error="Name already exists.")
        
        try:
            age = int(age)
        except ValueError:
            return render_template('create.html', error="Age must be a number.")
        
        data_dict[name] = age
        return redirect('/index.html')
    
    return render_template('create.html')

@app.route('/update', methods=['GET', 'POST'])
def update():
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        
        if not name or not age:
            return render_template('update.html', error="Name and age are required.")
        
        if name not in data_dict:
            return render_template('update.html', error="Name does not exist in the dictionary.")
        
        try:
            age = int(age)
        except ValueError:
            return render_template('update.html', error="Age must be a number.")
        
        data_dict[name] = age
        return redirect('/update.html')
    
    return render_template('update.html')

@app.route('/delete', methods=['GET', 'POST'])
def delete():
    if request.method == 'POST':
        name = request.form['name']
        
        if not name:
            return render_template('delete.html', error="Name is required.")
        
        if name not in data_dict:
            return render_template('delete.html', error="Name does not exist in the dictionary.")
        
        
        del data_dict[name]
        return redirect('delete.html')
    
    return render_template('delete.html')

if __name__ == '__main__':
    app.run(debug=True)
