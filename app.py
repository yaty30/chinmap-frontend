
###### FOR TESTING Flask, Not the actual app!!!
###### The real core python is => src/Backend/ScanTarget.py


import time
from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

target = ''

x = os.popen("nmap 192.168.1.1 -T4")
t = x.read()

@app.route("/initiateTargetScan", methods=['GET'])
def index():
    name = request.args.get('target')
    print("Hello " + str(name))

if __name__ == "__main__":
    app.debug = True
    app.run() 
