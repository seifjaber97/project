from flask import Flask, render_template, redirect, url_for, request
import pandas as pd
app = Flask(__name__)

@app.route('/')
def home_page():
	return render_template('home.html')

@app.route('/result',methods=['POST','GET'])
def result_page():
	file="./final-result.xlsx"
	d=pd.read_excel(file)
	if request.method=="POST":
		ID=request.form['id_std']
		s1=request.form['s1']
		s2=request.form['s2']
		s3=request.form['s3']
		s4=request.form['s4']
		s5=request.form['s5']
		s6='avg rank'
		s7='GPA'
		data=d[d['SI_ID']==int(ID)]
		data=data[[s1,s2,s3,s4,s5,s6,s7]]
		cols=[s1,s2,s3,s4,s5]
		d=[data,cols,ID]

	return render_template('result.html',data=d)

	
@app.route('/staff')
def staff_page():
	return render_template('staff.html')

@app.route('/student',methods=['GET','POST'])
def student_page():
	return render_template('/student.html')		

if __name__ == '__main__':
	app.debug = True
	app.run()	
