from flask import Flask, render_template, redirect, url_for, request
app = Flask(__name__)

@app.route('/staff')
def staff_page():
	return render_template('staff.html')

if __name__ == '__main__':
	app.debug = True
	app.run()	
