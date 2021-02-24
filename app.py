from flask import Flask
import os

app = Flask(__name__) # Current model

@app.route("/") #Function (Decorator):
def home():
    return "Hello Flask"

@app.route("/test")
def test():
    testrun = os.popen("sudo nmap scanme.nmap.org -T4")
    uirun = testrun.read()
    return uirun

if __name__ == "__main__":
    app.run() 