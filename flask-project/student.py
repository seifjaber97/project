from flask import Flask, render_template, redirect, url_for, request
app = Flask(__name__)

@app.route('/student', methods=['GET','POST'])
def staff_page():
	return render_template('student.html')
"""
@app.route('/result',methods=['POST','GET'])
def result_page():
	if request.method=="POST":
		ID=request.from['id_std']
	return render_template('result.html',data=ID)
"""
if __name__ == '__main__':
	app.debug = True
	app.run()	
