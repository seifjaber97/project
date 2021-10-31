import sys
from flask import Flask, render_template, redirect, url_for, request
print (sys.version)
print ("TEST")

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html", content="Testing")
	#return "Hello! this is the main page <h1>Hello</h1>"

#@app.route("/<name>")
#def home(name):
#	return render_template("index.html", content=name, r=2)
	#return "Hello! this is the main page <h1>Hello</h1>"

#@app.route("/<name>")
#def user(name):
#	return f"Hello {name}!"

#@app.route("/admin")
#def admin():
#	return redirect(url_for("user", name="Admin!"))		

if __name__ == "__main__":
	app.run(debug=True)