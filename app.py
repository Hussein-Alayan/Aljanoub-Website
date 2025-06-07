from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('pages/index.html')

@app.route('/menu')
def menu():
    return render_template('pages/menu.html')

# Add other routes...

if __name__ == '__main__':
    app.run(debug=True)