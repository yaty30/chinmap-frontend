# Please PIP INSTALL all missing libraries
import os
import sys
import subprocess
# from pyfiglet import Figlet
import re
import random
import string
import tempfile
import fileinput
from flask import Flask, redirect, url_for, request
from flask import render_template
from flask_cors import CORS
from datetime import datetime
import platform
import time
from ip2geotools.databases.noncommercial import DbIpCity
import socket
import whois
import dns.resolver

# Elements
divider = "\n======================================================\n"

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[   Get from front-end user input   ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

# Scan Information
# test cases: 168.235.74.9 | 168.235.89.44 | scanme.nmap.org | 192.168.1.1 | 127.0.0.1
flags = ''

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[ END Get from front-end user input ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

# Core Scan Functions
def ScanID():
    # creating scan identity string
    letters = string.ascii_letters
    scanID = ''.join(random.choice(letters) for i in range(21))

    return scanID

def StartScan():
    global scanStart
    scanStart = time.time()
    for i in range(1000000):
        pass
 
    scanDetailsTxt = open("isScanning.tsx", "w+")
    scanDetailsTxt.writelines(
        'export const isScanning = [true]'
    )
    scanDetailsTxt.close()

def EndScan():
    global scanEnd
    scanEnd = time.time()
    scanDetailsTxt = open("isScanning.tsx", "w+")
    scanDetailsTxt.writelines(
        'export const isScanning = [false]'
    )
    scanDetailsTxt.close()

def GetPortStatus(scanID, result, target, scanMode, whois, automation, cveDetection, avoidPingBlocking, firewalk, hostmap):
    # portStatusScanID =  ''.join(random.choices(string.ascii_uppercase + string.digits, k=21))
    pattern = re.compile(r'(?P<ports>[\d]+)\/(?P<protocol>tcp|udp)\s+(?P<state>open|filtered|closed)\s+(?P<service>[\w\S]*)\s+(?P<version>[\w\S]*)')

    with fileinput.FileInput("getPortStatus.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    fePortStatusTxt = open("getPortStatus.tsx", "a")
    fePortStatusTxt.writelines("\n// ===================== Target: " + target + " ================================")
    for ports in re.findall(pattern, result):
        # Check if automation is checked, is yes, check if the result is null, if yes, run scan function again until something in the result
        if automation == True:
            while len(ports) < 1:
                if len(scanMode) < 1:
                    RunScan(target, scanMode, whois, automation, cveDetection, avoidPingBlocking, firewalk, hostmap)
            i += 1
            
        fePortStatusTxt.writelines("\ncreateData('" + str(target) + "', '" + foundRunTime + "', '" + str(scanID) + "'," + str(ports)[1:] + ",")

    fePortStatusTxt.writelines("\n// ===================== END of " + target + " =================================")
    fePortStatusTxt.writelines("\n]")
    fePortStatusTxt.close()

    fileinput.close()

def GetScanDetails(command, result, scanID, target, scanMode, whois, automation, cveDetection, avoidPingBlocking, scanRange):
    f = open(result, "r")
    data = f.read()

    if scanMode == '':
        cm = 'nmap' + flags + target
    else:
        cm = 'nmap' + target + '; with scan mode: ' + scanMode

    # find target
    scanTarget = re.findall(r'report for (.*)', data)
    # avoiding [host down, received no-response] [ , => \n\n ] situation
    scanTargetfirstRoundReplace = re.sub(", r", "; R", str(scanTarget))
    # removing single collons of the result, i.e. 'x.x.x.x', 'x.x.x.x' => x.x.x.x, x.x.x.x
    scanTargetsecondRoundReplace = re.sub("'", "", str(scanTargetfirstRoundReplace))
    # removing comma between targets, i.e. x.x.x.x, x.x.x.x => x.x.x.x \n\n x.x.x.x
    scanTargetThirdRoundReplace = re.sub(",", " ", str(scanTargetsecondRoundReplace))

    # plain target for dropdown select menu option
    targetForSelect = str(target)

    # find scan date rg ) at 2021-02-24 19:03 HKT
    foundDate = datetime.today().strftime('%Y-%m-%d')

    # find scan time
    now = datetime.now()
    foundTime = now.strftime("%H:%M")

    # find up host
    hostUp = re.findall(r'(\d host up)', data)
    foundHostUp = str(hostUp)[2:-2]

    # find run time
    global foundRunTime
    runTime = re.findall(r'(\d+.\d+ seconds)', data)
    foundRunTime = str(runTime)[2:-2]

    # find host scan latency
    latency = re.findall(r'(\d+.\d+s latency)', data)
    latencyfirstRoundReplace = re.sub("'", " ", str(latency))
    latencysecondRoundReplace = re.sub(",", ", ", str(latencyfirstRoundReplace))
    latencythirdRoundReplace = re.sub("latency", "", str(latencysecondRoundReplace))
    foundLatency = str(latencythirdRoundReplace)[2:-2]

    # find closed ports quantity
    notShown = re.findall(r'(\d+ closed ports)', data)
    notShownfirstRoundReplace = re.sub("'", " ", str(notShown))
    notShownsecondRoundReplace = re.sub(",", ", ", str(notShownfirstRoundReplace))
    foundNotShown = str(notShownsecondRoundReplace)[2:-2]

    # find target running os
    osscan = os.popen(command + ' -O --osscan-guess ' + target)
    osscanOutput = osscan.read()
    osCatch = re.findall(r'OS details: (.*)', osscanOutput)
    osfirstRoundReplace = re.sub("'", " ", str(osCatch))
    ossecondRoundReplace = re.sub(",", ", ", str(osfirstRoundReplace))
    foundOS = str(ossecondRoundReplace)[2:-2]

    aggrOSCatch = re.findall(r'Aggressive OS guesses: (.*)', osscanOutput)
    aggrOSfirstRoundReplace = re.sub("'", " ", str(aggrOSCatch))
    aggrOSsecondRoundReplace = re.sub(",", ", ", str(aggrOSfirstRoundReplace))
    foundAggrOS = str(aggrOSsecondRoundReplace)[2:-2]
    

    # find target up time, day + period
    uptime = re.findall(r'Uptime guess: (.*)', data)
    foundUptime = str(uptime)[2:-2]

    # find target device type
    deviceType = re.findall(r'Device type: (.*)', data)
    deviceTypefirstRoundReplace = re.sub("'", " ", str(deviceType))
    deviceTypesecondRoundReplace = re.sub(",", ", ", str(deviceTypefirstRoundReplace))
    foundDeviceType = str(deviceTypesecondRoundReplace)[2:-2]

    # find quantity of raw packets sent
    rawPacket = re.findall(r'Raw packets sent: (.*) \|', data)
    foundRawPacket = str(rawPacket)[2:-2]

    # find quantity of raw packets received
    rcvd = re.findall(r'\| Rcvd: (.*)', data)
    foundRcvd = str(rcvd)[2:-2]

    # find tcp hacking difficulty
    difficulty = re.findall(r'TCP Sequence Prediction:(.*)', data)
    subDifficulty = re.sub("=", " = ", str(difficulty))
    foundDifficulty = str(subDifficulty)[2:-15]

    # find routing table hop quantity
    hop = re.findall(r'Network Distance: (.*)', data)
    hopfirstRoundReplace = re.sub("'", " ", str(hop))
    hopsecondRoundReplace = re.sub(",", ", ", str(hopfirstRoundReplace))
    foundHop = str(hopsecondRoundReplace)[2:-2]

    # find target MAC address
    macAddr = re.findall(r'MAC Address: (.*)', data)
    macAddrfirstRoundReplace = re.sub("'", " ", str(macAddr))
    macAddrsecondRoundReplace = re.sub(",", ", ", str(macAddrfirstRoundReplace))
    foundMacAddr = str(macAddrsecondRoundReplace)[2:-2]

    # find scan mode for current scan
    foundScanMode = re.sub(r"(\w)([A-Z])", r"\1 \2", scanMode).title()

    # Extra features
    foundAutomation = str(automation)
    foundCveDetection = str(cveDetection)
    foundSetFlags = str(flags)
    foundWhoIS = str(whois)
    foundPBB = str(avoidPingBlocking)

    # find current Nmap version
    nmapVer = re.findall(r'Nmap \d+.\d+', data)
    foundNmapVer = str(nmapVer)[7:-2]

    foundSetRange = re.sub(r"(\w)([A-Z])", r"\1 \2", str(scanRange))

    # for result display comparison, Select => MenuItem
    with fileinput.FileInput("scannedTargetForSelect.json", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")

    # Append-adds at last 
    targetForSelectTxt = open("scannedTargetForSelect.json", "a")  # append mode 
    
    targetForSelectContent = ',\n{\n"id": "' + str(scanID) + '",\n' + '"target": "' + str(targetForSelect) + '",\n' + '"runTime": "' + str(foundRunTime) + '",\n' + '"date": "' + str(foundDate) + '"\n}}'[:-1]
    targetForSelectTxt.write(targetForSelectContent) 
    targetForSelectTxt.write('\n]') 
    targetForSelectTxt.close() 
    

    return ',{\n"id": "' + str(scanID) + '",\n'  + '"cm": "' + cm + '",\n'  + '"target": "' + str(target) + '",\n'  + '"targetForSelect": "' + str(targetForSelect) + '",\n'  + '"date": "' + str(foundDate) + '",\n'  + '"time": "' + foundTime + " HKT" + '",\n'  + '"upHost": "' + str(foundHostUp) + '",\n'  + '"runTime": "' + str(foundRunTime) + '",\n'  + '"latency": "' + str(foundLatency) + '",\n'  + '"notShown": "' + str(foundNotShown) + '",\n'  + '"os": "' + str(foundOS) + '",\n' + '"aggrOS": "' + str(foundAggrOS) + '",\n'  + '"uptime": "' + str(foundUptime) + '",\n'  + '"deviceType": "' + str(foundDeviceType) + '",\n'  + '"rawPacket": "' + str(foundRawPacket) + '",\n'  + '"rcvd": "' + str(foundRcvd) + '",\n'  + '"scanMode": "' + str(foundScanMode).title() + '",\n'  + '"hop": "' + str(foundHop) + '",\n'  + '"macAddr": "' + str(foundMacAddr) + '",\n' + '"difficulty": "' + str(foundDifficulty) + '",\n' + '"auto": "' + foundAutomation + '",\n' + '"cveDetect": "' + foundCveDetection + '",\n' + '"setRange": "' + foundSetRange + '",\n' + '"flags": "' + foundSetFlags + '",\n' + '"nmapVer": "' + foundNmapVer + '",\n' + '"whois": "'+  foundWhoIS + '",\n"pbb": "' + foundPBB + '" \n}}'

def Traceroute(scanID, target):
    # nmap --traceroute --script traceroute-geo <= Enhanced version of traceroute, TBC
    traceroute = os.popen('nmap -sn --traceroute ' + target)
    tracerouteScanOutput = traceroute.read()

    targetTraceroute = re.compile(r'(?P<rtt>\d+\.\d+ ms) (.*)')

    with fileinput.FileInput("tracerouteOutput.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")

    tracerouteTxt = open("tracerouteOutput.tsx", "a")
    tracerouteTxt.writelines("\n// ===================== Target: " + target + " ================================")
    
    for targetTraceroute in re.findall(targetTraceroute, tracerouteScanOutput):
        tracerouteTxt.writelines("\ncreateData('" + str(scanID) + "', " + str(targetTraceroute)[1:-1] + "),")

    tracerouteTxt.writelines("\n// ===================== END of " + target + " =================================")
    tracerouteTxt.writelines("\n]")
    tracerouteTxt.close()

    fileinput.close()

def GetCVE(target, scanID, cveCommand):
    runCVEScan = os.popen(cveCommand)
    cveScanOutput = runCVEScan.read()

    cveAndInfo = re.compile(r'(?P<cves>\[CVE\-\d+\-\d+\])(.*)')

    with fileinput.FileInput("cveScanOutput.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("].sort((a, b) => (a.cve < b.cve ? -1 : 1));", ""), end="")
    cveDetectTxt = open("cveScanOutput.tsx", "a")
    cveDetectTxt.writelines("\n// ===================== Target: " + target + " ================================")
    
    for cveAndInfo in re.findall(cveAndInfo, cveScanOutput):
        cveDetectTxt.writelines("\ncreateData('" + str(scanID) + "', " + str(cveAndInfo)[1:-1] + "),")

    cveDetectTxt.writelines("\n// ===================== END of " + target + " =================================")
    cveDetectTxt.writelines("\n].sort((a, b) => (a.cve < b.cve ? -1 : 1));")
    cveDetectTxt.close()

    ExploitCVE(target, scanID, cveScanOutput)

    fileinput.close()

def ExploitCVE(target, scanID, cveScanOutput):    
    exploitPattern = re.compile(r'(?P<exploit>\[\d+\])(.*)')

    with fileinput.FileInput("exploitCVEoutput.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("].sort((a, b) => (a.eid < b.eid ? -1 : 1));", ""), end="")
    exploitTxt = open("exploitCVEoutput.tsx", "a")
    exploitTxt.writelines("\n// ===================== Target: " + target + " ================================")
    
    for exploitData in re.findall(exploitPattern, cveScanOutput):
        exploitTxt.writelines("\ncreateData('" + str(scanID) + "', " + str(exploitData)[1:-1] + "),")

    exploitTxt.writelines("\n// ===================== END of " + target + " =================================")
    exploitTxt.writelines("\n].sort((a, b) => (a.eid < b.eid ? -1 : 1));")
    exploitTxt.close()

    fileinput.close()

def GetWhoIs(target, scanID, whoisCommand):
    # Useing NSE whois
    nse = os.popen(whoisCommand + target)
    nseOutput = nse.read()

    netrange = re.findall(r'netrange: (.*)', nseOutput)
    foundNetrange = str(netrange)[2:-2]

    netname = re.findall(r'netname: (.*)', nseOutput)
    foundNetname = str(netname)[2:-2]

    orgname = re.findall(r'orgname: (.*)', nseOutput)
    foundOrgname = str(orgname)[2:-2]

    orgid = re.findall(r'orgid: (.*)', nseOutput)
    foundOrgid = str(orgid)[2:-2]

    country = re.findall(r'country: [^\W\d_]+', nseOutput)
    foundCountry = str(country)[2:-2]

    stateprov = re.findall(r'stateprov: [^\W\d_]+', nseOutput)
    foundStateProv = str(stateprov)[2:-2]

    orgtechname = re.findall(r'orgtechname: (.*)', nseOutput)
    foundOrgTechName = str(orgtechname)[2:-2]

    _orgtechemail = re.findall(r'orgtechemail: (.*)', nseOutput)
    foundOrgTechEmail = str(_orgtechemail)[2:-2]

    domain = whois.query(target)
    
    name = domain.name
    creationDate = domain.creation_date
    expirationDate = domain.expiration_date
    lastUpdated = domain.last_updated
    registrar = domain.registrar

    # Finding WhoIs script result

    with fileinput.FileInput("whoisScan.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    whoisScanTsx = open("whoisScan.tsx", "a")

    whoisScanTsx.writelines("\n{\nscanId: '" + str(scanID) + "', name: '" + name + "', creationDate: '" + str(creationDate) + "', expirationDate: '" + str(expirationDate) + "', lastUpdated: '" + str(lastUpdated) + "', registrar: '" + registrar + "', netrange: '" + foundNetrange + "', netname: '" + foundNetname + "', orgname: '" + foundOrgname + "', orgid: '" + foundOrgid + "', country: '" + foundCountry + "', stateprov: '" + foundStateProv + "', orgtechname: '" + foundOrgTechName + "', orgtechemail: '" + foundOrgTechEmail + "', ")
    whoisScanTsx.writelines("\n},\n")

    whoisScanTsx.writelines("\n]")
    whoisScanTsx.close()

    fileinput.close()

    GetGeo(target, scanID)

def GetGeo(target, scanID):
    targetInIP = socket.gethostbyname(target)

    response = DbIpCity.get(targetInIP, api_key='free')
    city = str(response.city)
    region = str(response.region)
    latitude = str(response.latitude)
    longitude = str(response.longitude)

    with fileinput.FileInput("targetGeo.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    targetGeoOutput = open("targetGeo.tsx", "a")

    targetGeoOutput.writelines("\n{\nscanId: '" + str(scanID) + "', target: '" + targetInIP + "', city: '" + city + "', region: '" + region + "', latitude: '" + latitude + "', longitude: '" + longitude + "', ")
    targetGeoOutput.writelines("\n},\n")

    targetGeoOutput.writelines("\n]")
    targetGeoOutput.close()

    fileinput.close()

def CalcScanRange(target, setRange):
    x = str(target)[-2:]

    if x == '24':
        s, e = 0, 256
    elif x == '25':
        s, e = 0, 128
    elif x == '26':
        s, e = 0, 64
    elif x == '27':
        s, e = 0, 32
    elif x == '28':
        s, e = 0, 16
    elif x == '29':
        s, e = 0, 8
    elif x == '30':
        s, e = 0, 4

    s += 1
    e -= 2

    if setRange == 'every5hosts':
        xnum = 5
    elif setRange == 'every10hosts':
        xnum = 10
    elif setRange == 'every15hosts':
        xnum = 15
    elif setRange == 'every20hosts':
        xnum = 20
    else:
        xnum = 404


     # Get even number
    if setRange == 'evenOnly':
        print("\n################### [  even only ] #############################\n")
        for num in range(s, e + 1):
            if num % 2 == 0:
                print(num, end=" ")
        print("\n################### [ END even only ] #############################\n")

    # Get odd number
    elif setRange == 'oddOnly':
        print("\n################### [ odd only ] #############################\n")
        for num in range(s, e + 1):
            if num % 2 == 1:
                print(num, end=" ")
        print("\n################### [ END odd only ] #############################\n")

    elif setRange == 'every5hosts':
        while xnum in range(s, e):
            if xnum % 5 == 0:
                print(xnum, end=' ')  # print must be inside the condition
            xnum += 1  # the increase must be done on every iteration

    elif setRange == 'every10hosts':
        while xnum in range(s, e):
            if xnum % 10 == 0:
                print(xnum, end=' ')  # print must be inside the condition
            xnum += 1  # the increase must be done on every iteration

    elif setRange == 'every15hosts':
        while xnum in range(s, e):
            if xnum % 15 == 0:
                print(xnum, end=' ')  # print must be inside the condition
            xnum += 1  # the increase must be done on every iteration

    else:
        while xnum in range(s, e):
            if xnum % 20 == 0:
                print(xnum, end=' ')  # print must be inside the condition
            xnum += 1  # the increase must be done on every iteration
    
    return True

def Firewalk(target, scanID, firewalkCommand):
    firewalkScan = os.popen(firewalkCommand)
    firewalkOutput = firewalkScan.read()

    firewalkPattern = re.compile(r'(?P<hop>\_\d+)(\s*)(?P<host>\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(\s*)(?P<protocol>tcp|udp)(\s*)(.*)')

    with fileinput.FileInput("firewalkOutput.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("].sort((a, b) => (a.hop < b.hop ? -1 : 1));", ""), end="")
    firewalkData = open("firewalkOutput.tsx", "a")
    firewalkData.writelines("\n// ===================== Target: " + target + " ================================")
    
    for firewalkCatch in re.findall(firewalkPattern, firewalkOutput):
        first = re.sub(" ", "", str(firewalkCatch))
        out = re.sub("'',", "", str(first))
        firewalkData.writelines("\ncreateData('" + str(scanID) + "', " + str(out)[1:-1] + "),")

    firewalkData.writelines("\n// ===================== END of " + target + " =================================")
    firewalkData.writelines("\n].sort((a, b) => (a.hop < b.hop ? -1 : 1));")
    firewalkData.close()

    fileinput.close()


app = Flask(__name__) # Current model
CORS(app)

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[        Add Customised Modes       ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

# Scan Information
# test cases: 168.235.74.9 | 168.235.89.44 | scanme.nmap.org | 192.168.1.1 | 127.0.0.1
@app.route('/addMode', methods = ['POST', 'GET'])
def addModeFetching():
    if request.method == 'POST':
        name = request.form['name']
        des = request.form['des']
        freq = request.form['freq']
        tcp = request.form['tcp']
        nontcp = request.form['nontcp']
        if len(name) < 1:
            return False
        else:
            return redirect(url_for(
                'AddMode', 
                name=name, 
                des=des, 
                freq=freq, 
                tcp=tcp, 
                nontcp=nontcp,
            ))
    else:
        name = request.args.get('name')
        des = request.args.get['des']
        freq = request.args.get['freq']
        tcp = request.args.get['tcp']
        nontcp = request.args.get['nontcp']
        if len(name) < 1:
            return False
        else:
            return redirect(url_for(
                'AddMode', 
                name=name, 
                des=des, 
                freq=freq, 
                tcp=tcp, 
                nontcp=nontcp,
            ))

@app.route('/addMode/<name>/<des>/<freq>/<tcp>/<nontcp>')
def AddMode(name, des, freq, tcp, nontcp):
     # creating scan identity string
    letters = string.ascii_letters
    modeID = ''.join(random.choice(letters) for i in range(21))

    # remove ] in json and insert new data with a ]
    with fileinput.FileInput("customisedScanModeStatus.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]})", ""), end="")
    fileinput.close()

    with fileinput.FileInput("customisedScanModeStatus.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("export default store;", ""), end="")
        
    # Generating normal scan output for Frontend
    addModeTxt = open("customisedScanModeStatus.tsx", "a")
    # Appending new data to scannedIn.json
    addModeTxt.writelines('\n{\n"profile": [\n{\n"modeID": "' + modeID +'",\n"name": "' + name +'",\n"des": "' + des + '",\n"freq": ' + freq + ',\n"tcp": "' + tcp + '",\n"nonTcp": "' + nontcp + '"\n}\n],\n"ping": [\n{\n"flags": ""\n}\n],\n"nse": [\n{\n"flags": ""\n}\n],\n"target": [\n{\n"flags": ""\n}\n],\n"source": [\n{\n"flags": ""\n}\n],\n"timing": [\n{\n"flags": ""\n}\n],\n"other": [\n{\n"flags": ""\n}\n]\n},')
    addModeTxt.writelines('\n]})')
    addModeTxt.writelines('\nexport default store;')
    addModeTxt.close()

    fileinput.close()

    return redirect("http://localhost:3001/customisedScanMode", code=302)

@app.route('/deleteMode', methods=['POST', 'GET'])
def deleteModeFetching():
    if request.method == 'POST':
        modeID = request.form['modeID']
        return redirect(url_for('DeleteMode', modeID=modeID))
    else:
        modeID = request.form['modeID']
        return redirect(url_for('DeleteMode', modeID=modeID))

@app.route('/deleteMode/<modeID>')
def DeleteMode(modeID):
    modes = open("customisedScanModeStatus.tsx", "r")
    x = modes.read()
    target = 'IWJDIOQPTxzpkaiKeCJHOs'
    
    return str(x)

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[     END Add Customised Modes      ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #




# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[           WHAT IS MY IP           ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

@app.route('/whatismyip', methods=['POST', 'GET'])
def whatismyIP():
    if request.method == 'POST':
        isCheck = request.form['isCheck']
        return redirect(url_for('WhatIsMyIP', isCheck=isCheck))
    else:
        isCheck = request.form['isCheck']
        return redirect(url_for('WhatIsMyIP', isCheck=isCheck))

@app.route('/whatismyip/<isCheck>')
def WhatIsMyIP(isCheck):
    getIP = socket.gethostbyname(socket.gethostname())
 
    outputTxt = open("whatismyip.tsx", "w+")
    outputTxt.writelines('export const whatismyip = [{output:`' + str(getIP) + '`}]')
    outputTxt.close()
    
    return redirect("http://localhost:3001/", code=302)

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[         END WHAT IS MY IP         ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #




# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[             Flask API             ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

@app.route('/RunScan/<target>/<scanMode>/<whois>/<automation>/<cveDetection>/<avoidPingBlocking>/<firewalk>/<cleverTrickery>')      
def RunScan(target, scanMode, whois, automation, cveDetection, avoidPingBlocking, firewalk, cleverTrickery):
    StartScan()

    # creating scan identity string
    # letters = string.ascii_letters
    # scanID = ''.join(random.choice(letters) for i in range(21))
    scanID = ScanID()

    target = re.sub("sn=", "/", target)

    if platform.system() == 'Darwin':
        command = 'sudo nmap ' + target
    elif platform.system() == 'Windows':
        command = 'nmap ' + target

    ######### Default Scan Modes #########
    if scanMode == 'Ping Scan Mode':
        mode = ' -T4 -sn -v '
    elif scanMode == 'Lightning Scan Mode':
        mode = ' -v -sU -sT -p U:161,T:80    '
    elif scanMode == 'Intense Scan Mode':
        mode = ' -T4 -A -v '
    elif scanMode == 'Non-Ping Scan Mode':
        mode = ' -T4 -Pn -v -v '
    elif scanMode == 'Top 100 Ports Scan Mode':
        mode = ' -T4 -F -vv '
    elif scanMode == 'Full Ports Scan Mode':
        mode = ' -T4 -p- -v -v '
    elif scanMode == 'Default Scan Mode':
        mode = ' -sY '
    ######### END Default Scan Modes #########

    # if target is an independent IP, set scan range will not be able to apply
    if re.findall(r'.0\/\d+$', target):
        scanRange = "oddNumbersOnly"
    else:
        scanRange = "Target have no range"

    # PATH to nmap on macOS => /usr/local/share/nmap/
    # PATH to nmap on Windos => C:\Program File(x86)\Nmap\
    if platform.system() == 'Windows':
        cveCommand = 'nmap -sS -sV --script=vulscan/vulscan.nse ' + target
        whoisCommand = 'nmap --script whois-ip --script-args whois.whodb=nofile ' + target
        firewalkCommand = 'nmap --script=firewalk --traceroute --script-args=firewalk.max-retries=1 ' + target
        
    else:
        cveCommand = 'sudo nmap -sS -sV --script=vulscan/vulscan.nse ' + target
        whoisCommand = 'sudo nmap --script whois-ip --script-args whois.whodb=nofile ' + target
        firewalkCommand = 'sudo nmap --script=firewalk --traceroute --script-args=firewalk.max-retries=1 ' + target
        

    #  http-sitemap-generator.nse => nmap --script http-sitemap-generator -p 80 scanme.nmap.org TBC

    command = 'nmap ' + target
    # Determin if scan with mode or not
    if scanMode != '':
        command = command + mode
        if avoidPingBlocking == 'true':
            command = command + '-Pn '

        if cleverTrickery == 'true': 
            command = command + ' -sSV -T4 -O -p0-65535 '

        if cveDetection == 'true':
            GetCVE(target, scanID, cveCommand)

        if whois == 'true': 
            GetWhoIs(target, scanID, whoisCommand)

        if firewalk == 'true': 
            Firewalk(target, scanID, firewalkCommand)
            
        if avoidPingBlocking == 'true':
            command = command + '-Pn '
    if scanMode == '':
        command =  command + flags
        if avoidPingBlocking == 'true':
            command =  command + '-Pn '

        if cleverTrickery == 'true': 
            command = command + ' -sSV -T4 -O -p0-65535 '
            
        if cveDetection == 'true':
            GetCVE(target, scanID, cveCommand)
        
        if whois == 'true':
            GetWhoIs(target, scanID, whoisCommand)

        if firewalk == 'true': 
            Firewalk(target, scanID, firewalkCommand)

        if avoidPingBlocking == 'true':
            command = command + '-Pn '
    
    scanCommand = os.popen(command) # Sending nmap command to shell
    scanOutputTxt = scanCommand.read() # Retrieving output from shell and read
    scanCommandString = str(command)[:-4] # For print out the command to front-end

    Traceroute(scanID, target)

    # Export normal scan output to text file
    scanTxt = open("Result.txt", "w+")
    scanTxtResult = "Command: " + str(scanCommandString) + str(divider) + str(scanOutputTxt)
    scanTxt.writelines(scanTxtResult)
    scanTxt.close()

    # remove ] in json and insert new data with a ]
    with fileinput.FileInput("scannedIn.json", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    fileInputFixBracket = open("scannedIn.json", "a")
    
    # Generating normal scan output for Frontend
    fescanTxt = open("scannedIn.json", "a")
    # Appending new data to scannedIn.json
    fescanResult = "Result.txt"
    getScanDetailsOutput = str(GetScanDetails(command, fescanResult, scanID, target, scanMode, whois, automation, cveDetection, avoidPingBlocking, scanRange))[:-1]
    fescanTxt.writelines(getScanDetailsOutput)
    fescanTxt.close()

    fileInputFixBracket.write('\n]')
    fileInputFixBracket.close()
    
    # Port Status
    f = open("Result.txt", "r")
    portStatusToRead = f.read()
    GetPortStatus(scanID, portStatusToRead, target, scanMode, whois, automation, cveDetection, avoidPingBlocking, firewalk, cleverTrickery)
    f.close()

    # Frontend Nmap Output
    with fileinput.FileInput("Result.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    feNomralScanPureOutputTxt = open("Result.tsx", "a")
    feNomralScanPureOutputTxt.writelines("\n{\nid: '" + str(scanID) + "',\noutput: `" + scanTxtResult + "`,},\n]")
    feNomralScanPureOutputTxt.close()
    
    EndScan()

    return redirect("http://localhost:3001/ScanResult", code=302)

@app.route('/runAPI', methods=['POST', 'GET'])
def startApp():

   if request.method == 'POST':
        target = request.form['target']
        scanMode = request.form['scanMode']
        # Extra freatures
        automation = request.form['auto']
        cveDetection = request.form['cve']
        avoidPingBlocking = request.form['pbb']
        firewalk = request.form['firewalk']
        whois = request.form['whois']
        cleverTrickery = request.form['cleverTrickery']
        scanRange = request.form['scanRange']

        if len(target) < 1:
            return False
        else:
            return redirect(url_for(
                'RunScan', 
                whois=whois,
                target=target, 
                cleverTrickery=cleverTrickery,
                scanMode=scanMode, 
                firewalk=firewalk,
                scanRange=scanRange,
                automation=automation, 
                cveDetection=cveDetection, 
                avoidPingBlocking=avoidPingBlocking, 
            ))
   else:
        target = request.args.get('target')
        scanMode = request.args.get['scanMode']
        if len(target) < 1:
            return False
        else:
            return redirect(url_for(
                'RunScan', 
                whois=whois,
                target=target, 
                cleverTrickery=cleverTrickery,
                scanMode=scanMode, 
                firewalk=firewalk,
                scanRange=scanRange,
                automation=automation, 
                cveDetection=cveDetection, 
                avoidPingBlocking=avoidPingBlocking, 
            ))

@app.route('/RunAdvancedMode/<command>/<target>')
def RunAdvancedMode(command, target):
    StartScan()

    command = re.sub("sn=", "/", str(command))
    target = re.sub("sn=", "/", str(target))
    scan = os.popen('nmap ' + command)
    scanOutput = scan.read()

    scanID = ScanID() + 'advmd'

    with fileinput.FileInput("advancedScan.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    advancedScanOutput = open("advancedScan.tsx", "a")

    advancedScanOutput.writelines("\n{\nscanID: '" + str(scanID) + "',\ntarget: '" + str(target) + "',\noutput: `" + scanOutput + "`, ")
    advancedScanOutput.writelines("\n},\n")

    advancedScanOutput.writelines("\n]")
    advancedScanOutput.close()

    fileinput.close()

    EndScan()

    return redirect("http://localhost:3001/", code=302)

@app.route('/runAdvancedAPI', methods=['POST', 'GET'])
def AdvancedMode():
   if request.method == 'POST':
        command = request.form['command']
        target = request.form['target']

        if len(command) < 1:
            return False
        else:
            return redirect(url_for(
                'RunAdvancedMode', 
                command=command, 
                target=target
            ))
   else:
        command = request.args.get('command')
        target = request.args.get('target')
        if len(command) < 1:
            return False
        else:
            return redirect(url_for(
                'RunAdvancedMode', 
                command=command, 
                target=target
            ))

@app.route('/RunAbort/<abort>')
def RunAbort(abort):
    scanDetailsTxt = open("isScanning.tsx", "w+")
    scanDetailsTxt.writelines(
        'export const isScanning = [false]'
    )
    scanDetailsTxt.close()

    os.popen('echo kill')

    return redirect("http://localhost:3001/", code=302)

@app.route('/scanAbort', methods=['POST', 'GET'])
def ScanAbort():
    if request.method == 'POST':
        abort = request.form['abort']

        if abort == False:
            return False
        else:
            return redirect(url_for(
                'RunAbort', 
                abort=abort
            ))
    else:
        abort = request.args.get('abort')
        if abort == False:
            return False
        else:
            return redirect(url_for(
                'RunAbort', 
                abort=abort
            ))

@app.route('/ToDelete/<scanID>')
def ToDelete(scanID):
    with fileinput.FileInput("toDelete.tsx", inplace=True) as file:
        for line in file:
            print(line.replace("]", ""), end="")
    toDeleteJSON = open("toDelete.tsx", "a")
    toDeleteJSON.writelines('\n    "' + str(scanID) + '",\n]')
    toDeleteJSON.close()

    fileinput.close()

    return redirect("http://localhost:3001/scanResult", code=302)

@app.route('/deleteResult', methods=['POST', 'GET'])
def DeleteResult():
    if request.method == 'POST':
        scanID = request.form['scanID']
        
        return redirect(url_for(
            'ToDelete', 
            scanID=scanID
        ))
            
    else:
        scanID = request.args.get('scanID')
        
        return redirect(url_for(
            'ToDelete', 
            scanID=scanID
        ))


if __name__ == "__main__":
    app.debug = False
    app.run() 

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[             Flask API             ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #