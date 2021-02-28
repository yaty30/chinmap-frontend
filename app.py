
###### FOR TESTING Flask, Not the actual app!!!
###### The real core python is => src/Backend/ScanTarget.py


import time
from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

target = ''

@app.route("/initiateTargetScan")
def home():
    x = os.popen("nmzap 192.168.1.1 -T4")
    t = x.read()
    return str(t)

if __name__ == "__main__":
    app.debug = True
    app.run() 
