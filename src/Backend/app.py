import os
import sys
import subprocess
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

# Elements
divider = "\n======================================================\n"

# creating scan identity string
letters = string.ascii_letters
scanID = ''.join(random.choice(letters) for i in range(21))

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[   Get from front-end user input   ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

# Scan Information
# test cases: 168.235.74.9 | 168.235.89.44 | scanme.nmap.org | 192.168.1.1 | 127.0.0.1
flags = ''

# Extra freatures
automation = False
cveDetection = False
avoidPingBlocking = False
whois = False

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[ END Get from front-end user input ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

# Core Scan Functions
def StartScan():
    scanDetailsTxt = open("isScanning.tsx", "w+")
    scanDetailsTxt.writelines(
        'export const isScanning = [true]'
    )
    scanDetailsTxt.close()

def EndScan():
    scanDetailsTxt = open("isScanning.tsx", "w+")
    scanDetailsTxt.writelines(
        'export const isScanning = [false]'
    )
    scanDetailsTxt.close()

def GetPortStatus(result, target, scanMode):
    # portStatusScanID =  ''.join(random.choices(string.ascii_uppercase + string.digits, k=21))
    pattern = re.compile(r'(?P<ports>[\d]+)\/(?P<protocol>tcp|udp)\s+(?P<state>open|filtered|closed)\s+(?P<service>[\w\S]*)')

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
                    RunScan(target, scanMode)
            i += 1
            
        fePortStatusTxt.writelines("\ncreateData('" + str(scanID) + "'," + str(ports)[1:] + ",")

    fePortStatusTxt.writelines("\n// ===================== END of " + target + " =================================")
    fePortStatusTxt.writelines("\n]")
    fePortStatusTxt.close()

    fileinput.close()

def GetScanDetails(result, target, scanMode, scanRange):
    #scanID =  ''.join(random.choices(string.ascii_uppercase + string.digits, k=21)) 

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
    foundTarget = str(scanTargetThirdRoundReplace)[2:-2]

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
    os = re.findall(r'OS details: (.*)', data)
    osfirstRoundReplace = re.sub("'", " ", str(os))
    ossecondRoundReplace = re.sub(",", ", ", str(osfirstRoundReplace))
    foundOS = str(ossecondRoundReplace)[2:-2]

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
    

    return ',{\n"id": "' + str(scanID) + '",\n'  + '"cm": "' + cm + '",\n'  + '"target": "' + str(target) + '",\n'  + '"targetForSelect": "' + str(targetForSelect) + '",\n'  + '"date": "' + str(foundDate) + '",\n'  + '"time": "' + foundTime + " HKT" + '",\n'  + '"upHost": "' + str(foundHostUp) + '",\n'  + '"runTime": "' + str(foundRunTime) + '",\n'  + '"latency": "' + str(foundLatency) + '",\n'  + '"notShown": "' + str(foundNotShown) + '",\n'  + '"os": "' + str(foundOS) + '",\n'  + '"uptime": "' + str(foundUptime) + '",\n'  + '"deviceType": "' + str(foundDeviceType) + '",\n'  + '"rawPacket": "' + str(foundRawPacket) + '",\n'  + '"rcvd": "' + str(foundRcvd) + '",\n'  + '"scanMode": "' + str(foundScanMode).title() + '",\n'  + '"hop": "' + str(foundHop) + '",\n'  + '"macAddr": "' + str(foundMacAddr) + '",\n' + '"difficulty": "' + str(foundDifficulty) + '",\n' + '"auto": "' + foundAutomation + '",\n' + '"cveDetect": "' + foundCveDetection + '",\n' + '"setRange": "' + foundSetRange + '",\n' + '"flags": "' + foundSetFlags + '",\n' + '"nmapVer": "' + foundNmapVer + '"\n}}'
    
def GetCVE(target):
    runCVEScan = os.popen('nmap -sS -sV --script=vulscan/vulscan ' + target)
    cveScanOutput = runCVEScan.read()

    with fileinput.FileInput("cveScanOutput.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    cveScanOutputTsx = open("cveScanOutput.tsx", "a")

    cveScanOutputTsx.writelines("\n{\nscanId: '" + str(scanID) + "',\noutput:`\n")

    if len(cveScanOutput) < 1:
        cveScanOutputTsx.writelines("No CVE result found, either the CVE function is disabled, or the target is currently down.")
    else:
        cveScanOutputTsx.writelines(cveScanOutput)

    cveScanOutputTsx.writelines("\n`},\n")

    cveScanOutputTsx.writelines("\n]")
    cveScanOutputTsx.close()
        
def GetWhoIs(target):
    runWhois = os.popen('sudo nmap --script whois-domain.nse -d ' + target)
    whoisScan = runWhois.read()

    # Finding WhoIs script result
    whoisResult = re.findall(r'(Host script results:(.*))', whoisScan)

    with fileinput.FileInput("whoisScan.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    whoisScanTsx = open("whoisScan.tsx", "a")

    whoisScanTsx.writelines("\n{\nscanId: '" + str(scanID) + "',\noutput:`\n")
    
    if len(whoisResult) < 1:
        whoisScanTsx.writelines("No WhoIs result found, either the target is a local network address, or the target is currently down.")
    else:
        whoisScanTsx.writelines(str(whoisResult)[3:-7])

    whoisScanTsx.writelines("\n`},\n")

    whoisScanTsx.writelines("\n]")
    whoisScanTsx.close()

    fileinput.close()
 

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[             Flask API             ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #

app = Flask(__name__) # Current model
CORS(app)

@app.route('/RunScan/<target>/<scanMode>')      
def RunScan(target, scanMode):
    StartScan()

    # Nmap Command
    command = 'nmap ' + target

    if platform.system() == 'Windows':
        command = 'nmap ' + target
    elif platform.system() == 'Darwin':
        command = 'nmap ' + target

    ######### Default Scan Modes #########
    pingScanMode = ' -v -sU -sT -p -U:161, T:80 -T0 '
    lightningScanMode = ' -v -sU -sT -p U:161,T:80 -T0 '
    intenseScanMode = ' -T4 -A -v '
    nonPingScanMode = ' -v -sU -sT -p U:161,T:80 -T0 '
    topOneHundredScanMode = ' -T4 -F -vv '
    fullPortsScanMode = ' -T4 -p- -v -v '

    if scanMode == 'Ping Scan Mode':
        mode = pingScanMode
    elif scanMode == 'Lightning Scan Mode':
        mode = lightningScanMode
    elif scanMode == 'Intense Scan Mode':
        mode = intenseScanMode
    elif scanMode == 'Non-Ping Scan Mode':
        mode = nonPingScanMode
    elif scanMode == 'Top 100 Scan Mode':
        mode = topOneHundredScanMode
    elif scanMode == 'Full Ports Scan Mode':
        mode = fullPortsScanMode
    else:
        mode = ''
    ######### END Default Scan Modes #########

    if scanMode == '':
        if avoidPingBlocking == True:
            scanCommand = os.popen(command + flags + " -Pn ")
            scanCommandString = command + flags + " -Pn "
        else:
            scanCommand = os.popen(command + flags)
            scanCommandString = command + flags
    else:
        if avoidPingBlocking == True:
            scanCommand = os.popen(command + mode + " -Pn ")
            scanCommandString = command + mode + " -Pn "
        else:
            scanCommand = os.popen(command + mode)
            scanCommandString = command + mode + " -Pn "

    # if target is an independent IP, set scan range will not be able to apply
    if re.findall(r'.0\/\d+$', target):
        scanRange = "oddNumbersOnly"
    else:
        scanRange = "Target have no range"

    # CVE Detection
    if cveDetection ==  True:
        GetCVE(target)
    else:
        with fileinput.FileInput("cveScanOutput.tsx", inplace=True, backup='.bak') as file:
            for line in file:
                print(line.replace("]", ""), end="")
        cveScanOutputTsx = open("cveScanOutput.tsx", "a")

        cveScanOutputTsx.writelines("\n{\nscanId: '" + str(scanID) + "',\noutput:`\n")
        cveScanOutputTsx.writelines("Enable CVE detection to discover.")
        cveScanOutputTsx.writelines("\n`},\n")

        cveScanOutputTsx.writelines("\n]")
        cveScanOutputTsx.close()

    if whois == True:
        GetWhoIs(target)
    else:
        with fileinput.FileInput("whoisScan.tsx", inplace=True, backup='.bak') as file:
            for line in file:
                print(line.replace("]", ""), end="")
        whoisScanTsx = open("whoisScan.tsx", "a")

        whoisScanTsx.writelines("\n{\nscanId: '" + str(scanID) + "',\noutput:`\n")
        whoisScanTsx.writelines("Enable WhoIs feature to discover.")
        whoisScanTsx.writelines("\n`},\n")

        whoisScanTsx.writelines("\n]")
        whoisScanTsx.close()

    normalScanOutput = scanCommand.read()


    # Export normal scan output to text file
    normalScanTxt = open("Result.txt", "w+")
    normalScanTxtResult = "Command: " + str(scanCommandString) + str(divider) + str(normalScanOutput)
    normalScanTxt.writelines(normalScanTxtResult)
    normalScanTxt.close()

    # remove ] in json and insert new data with a ]
    with fileinput.FileInput("scannedIn.json", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    fileInputFixBracket = open("scannedIn.json", "a")
    
    # Generating normal scan output for Frontend
    feNormalScanTxt = open("scannedIn.json", "a")
    # Appending new data to scannedIn.json
    feNormalScanResult = "Result.txt"
    getScanDetailsOutput = str(GetScanDetails(feNormalScanResult, target, scanMode, scanRange))[:-1]
    feNormalScanTxt.writelines(getScanDetailsOutput)
    feNormalScanTxt.close()

    fileInputFixBracket.write('\n]')
    fileInputFixBracket.close()
    
    # Port Status
    f = open("Result.txt", "r")
    portStatusToRead = f.read()
    GetPortStatus(portStatusToRead, target, scanMode)
    f.close()

    # Frontend Nmap Output
    with fileinput.FileInput("Result.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end="")
    feNomralScanPureOutputTxt = open("Result.tsx", "a")
    feNomralScanPureOutputTxt.writelines("\n{\nid: '" + str(scanID) + "',\noutput: `" + normalScanTxtResult + "`,},\n]")
    feNomralScanPureOutputTxt.close()
    
    EndScan()

    return redirect("http://localhost:3001/ScanResult", code=302)


@app.route('/runAPI',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
        target = request.form['target']
        scanMode = request.form['scanMode']
        if len(target) < 1:
            return False
        else:
            return redirect(url_for('RunScan', target = target, scanMode = scanMode))
   else:
        target = request.args.get('target')
        scanMode = request.args.get['scanMode']
        if len(target) < 1:
            return False
        else:
            return redirect(url_for('RunScan', target = target, scanMode = scanMode))


if __name__ == "__main__":
    app.debug = True
    app.run() 

# ============================================================================================ #
# =========================[ ================================= ]============================== #
# =========================[             Flask API             ]============================== #
# =========================[ ================================= ]============================== #
# ============================================================================================ #