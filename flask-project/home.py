from flask import Flask, render_template, redirect, url_for, request
app = Flask(__name__)

@app.route('/')
def home_page():
	return render_template('home.html')

@app.route('/staff')
def staff_page():
	return render_template('staff.html')

@app.route('/student')
def student_page():
	return render_template('/student.html')		

if __name__ == '__main__':
	app.debug = True
	app.run()	
