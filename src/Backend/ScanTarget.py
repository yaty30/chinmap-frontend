import os
import sys
import subprocess
import nmap
import re
import random
import string
import tempfile
import fileinput

# ========================== Get from front-end user input ================================== #
# Scan Information
# test cases: 168.235.74.9 | 168.235.89.44 | scanme.nmap.org | 192.168.1.1 | 127.0.0.1
target = 'scanme.nmap.org'
scanMode = 'topOneHundredScanMode'
flags = ' '

# Extra freatures
automation = False
cveDetection = False

# if target is an independent IP, set scan range will not be able to apply
if re.findall(r'.0\/\d+$', target):
    scanRange = "oddNumbersOnly"
else:
    scanRange = "Target have no range"

# ========================= END Get from front-end user input ================================ #

# Python-nmap scanner
# nm = nmap.PortScanner()
# nm.scan(target)

# Default Scan Modes
pingScanMode = ' -v -sU -sT -p -U:161, T:80 -T0 '
lightningScanMode = ' -v -sU -sT -p U:161,T:80 -T0 '
intenseScanMode = ' -T4 -A -v '
nonPingScanMode = ' -v -sU -sT -p U:161,T:80 -T0 '
topOneHundredScanMode = ' -T4 -F -vv '
fullPortsScanMode = ' -T4 -p- -v -v '

# Elements
divider = "\n======================================================\n"

# creating scan identity string
letters = string.ascii_letters
scanID = ''.join(random.choice(letters) for i in range(21))

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

def GetPortStatus(result):
    # portStatusScanID =  ''.join(random.choices(string.ascii_uppercase + string.digits, k=21))
    pattern = re.compile(r'(?P<ports>[\d]+)\/(?P<protocol>tcp|udp)\s+(?P<state>open|filtered|closed)\s+(?P<service>[\w\S]*)')

    with fileinput.FileInput("getPortStatus.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end='')
    fePortStatusTxt = open("getPortStatus.tsx", "a")
    fePortStatusTxt.writelines("\n// ===================== Target: " + target + " ================================")
    for ports in re.findall(pattern, result):
        fePortStatusTxt.writelines("\ncreateData('" + str(scanID) + "'," + str(ports)[1:] + ",")

    fePortStatusTxt.writelines("\n// ===================== END of " + target + " =================================")
    fePortStatusTxt.writelines("\n]")
    fePortStatusTxt.close()

def GetScanDetails(result):
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
    scanTargetsecondRoundReplace = re.sub("'", " ", str(scanTargetfirstRoundReplace))
    # removing comma between targets, i.e. x.x.x.x, x.x.x.x => x.x.x.x \n\n x.x.x.x
    scanTargetThirdRoundReplace = re.sub(",", "\n\n", str(scanTargetsecondRoundReplace))
    foundTarget = str(scanTargetThirdRoundReplace)[2:-2]

    # plain target for dropdown select menu option
    targetForSelect = str(target)

    # find scan date
    date = re.findall(r'(\d{4}-\d{2}-\d{2}[ \t]+\d{2}:\d{2} HKT)', data)
    foundDate = str(date)[2:-12]

    # find scan time
    time = re.findall(r'([ \t]+\d{2}:\d{2} HKT)', data)
    foundTime = str(time)[2:-2]

    # find up host
    hostUp = re.findall(r'(\d host up)', data)
    foundHostUp = str(hostUp)[2:-2]

    # find run time
    runTime = re.findall(r'(\d+.\d+ seconds)', data)
    foundRunTime = str(runTime)[2:-2]

    # find host scan latency
    latency = re.findall(r'(\d+.\d+s latency)', data)
    latencyfirstRoundReplace = re.sub("'", " ", str(latency))
    latencysecondRoundReplace = re.sub(",", "\n\n", str(latencyfirstRoundReplace))
    latencythirdRoundReplace = re.sub("latency", "", str(latencysecondRoundReplace))
    foundLatency = str(latencythirdRoundReplace)[2:-2]

    # find closed ports quantity
    notShown = re.findall(r'(\d+ closed ports)', data)
    notShownfirstRoundReplace = re.sub("'", " ", str(notShown))
    notShownsecondRoundReplace = re.sub(",", "\n\n", str(notShownfirstRoundReplace))
    foundNotShown = str(notShownsecondRoundReplace)[2:-2]

    # find target running os
    os = re.findall(r'OS details: (.*)', data)
    osfirstRoundReplace = re.sub("'", " ", str(os))
    ossecondRoundReplace = re.sub(",", "\n\n", str(osfirstRoundReplace))
    foundOS = str(ossecondRoundReplace)[2:-2]

    # find target up time, day + period
    uptime = re.findall(r'Uptime guess: (.*)', data)
    foundUptime = str(uptime)[2:-2]

    # find target device type
    deviceType = re.findall(r'Device type: (.*)', data)
    deviceTypefirstRoundReplace = re.sub("'", " ", str(deviceType))
    deviceTypesecondRoundReplace = re.sub(",", "\n\n", str(deviceTypefirstRoundReplace))
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
    hopsecondRoundReplace = re.sub(",", "\n\n", str(hopfirstRoundReplace))
    foundHop = str(hopsecondRoundReplace)[2:-2]

    # find target MAC address
    macAddr = re.findall(r'MAC Address: (.*)', data)
    macAddrfirstRoundReplace = re.sub("'", " ", str(macAddr))
    macAddrsecondRoundReplace = re.sub(",", "\n\n", str(macAddrfirstRoundReplace))
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
            print(line.replace("]", ""), end='')

    # Append-adds at last 
    targetForSelectTxt = open("scannedTargetForSelect.json", "a")  # append mode 
    
    targetForSelectContent = ',\n{\n"id": "' + str(scanID) + '",\n' + '"target": "' + str(targetForSelect) + '",\n' + '"runTime": "' + str(foundRunTime) + '",\n' + '"date": "' + str(foundDate) + '"\n}}'[:-1]
    targetForSelectTxt.write(targetForSelectContent) 
    targetForSelectTxt.write('\n]') 
    targetForSelectTxt.close() 
    

    return ',{\n"id": "' + str(scanID) + '",\n'  + '"cm": "' + cm + '",\n'  + '"target": "' + str(foundTarget) + '",\n'  + '"targetForSelect": "' + str(targetForSelect) + '",\n'  + '"date": "' + str(foundDate) + '",\n'  + '"time": "' + str(foundTime) + '",\n'  + '"upHost": "' + str(foundHostUp) + '",\n'  + '"runTime": "' + str(foundRunTime) + '",\n'  + '"latency": "' + str(foundLatency) + '",\n'  + '"notShown": "' + str(foundNotShown) + '",\n'  + '"os": "' + str(foundOS) + '",\n'  + '"uptime": "' + str(foundUptime) + '",\n'  + '"deviceType": "' + str(foundDeviceType) + '",\n'  + '"rawPacket": "' + str(foundRawPacket) + '",\n'  + '"rcvd": "' + str(foundRcvd) + '",\n'  + '"scanMode": "' + str(foundScanMode).title() + '",\n'  + '"hop": "' + str(foundHop) + '",\n'  + '"macAddr": "' + str(foundMacAddr) + '",\n' + '"difficulty": "' + str(foundDifficulty) + '",\n' + '"auto": "' + foundAutomation + '",\n' + '"cveDetect": "' + foundCveDetection + '",\n' + '"setRange": "' + foundSetRange + '",\n' + '"flags": "' + foundSetFlags + '",\n' + '"nmapVer": "' + foundNmapVer + '"\n}}'
    
def RunNormalScan():
    StartScan()
    
    runNormalScan = os.popen('sudo nmap ' + flags + target)
    normalScanOutput = runNormalScan.read()

    # Export normal scan output to text file
    normalScanTxt = open("Result.txt", "w+")
    
    normalScanTxtResult = "Command: " + "nmap " + flags + target + divider + normalScanOutput

    normalScanTxt.writelines(normalScanTxtResult)
    normalScanTxt.close()

    # Generating normal scan output for Frontend
    feNormalScanTxt = open("scannedIn.json", "a")
    # Appending new data to scannedIn.json
    feNormalScanResult = "Result.txt"
    feNormalScanTxt.writelines(str(GetScanDetails(feNormalScanResult))[:-1])
    feNormalScanTxt.close()

     # remove ] in json and insert new data with a ]
    with fileinput.FileInput("scannedIn.json", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end='')
    fileInputFixBracket = open("scannedIn.json", "a")
    fileInputFixBracket.write('\n]')
    fileInputFixBracket.close()
   
    # Port Status
    f = open("Result.txt", "r")
    portStatusToRead = f.read()
    GetPortStatus(portStatusToRead)
    f.close()
    

    # Frontend Nmap Output
    with fileinput.FileInput("Result.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end='')
    feNomralScanPureOutputTxt = open("Result.tsx", "a")
    feNomralScanPureOutputTxt.writelines("\n{\nid: '" + str(scanID) + "',\noutput: `" + normalScanTxtResult + "`,},\n]")
    feNomralScanPureOutputTxt.close()

    EndScan()

def RunScanMode():
    StartScan()

    runNormalScan = os.popen('sudo nmap ' + mode + target)
    normalScanOutput = runNormalScan.read()

    # Export normal scan output to text file
    normalScanTxt = open("Result.txt", "w+")
    
    normalScanTxtResult = "Command: " + "nmap " + target + " With Scan mode: " + mode + divider + normalScanOutput

    normalScanTxt.writelines(normalScanTxtResult)
    normalScanTxt.close()

    # Generating normal scan output for Frontend
    feNormalScanTxt = open("scannedIn.json", "a")
    # Appending new data to scannedIn.json
    feNormalScanResult = "Result.txt"
    feNormalScanTxt.writelines(str(GetScanDetails(feNormalScanResult))[:-1])
    feNormalScanTxt.close()

     # remove ] in json and insert new data with a ]
    with fileinput.FileInput("scannedIn.json", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end='')
    fileInputFixBracket = open("scannedIn.json", "a")
    fileInputFixBracket.write('\n]')
    fileInputFixBracket.close()
   
    # Port Status
    f = open("Result.txt", "r")
    portStatusToRead = f.read()
    GetPortStatus(portStatusToRead)
    f.close()
    

    # Frontend Nmap Output
    with fileinput.FileInput("Result.tsx", inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace("]", ""), end='')
    feNomralScanPureOutputTxt = open("Result.tsx", "a")
    feNomralScanPureOutputTxt.writelines("\n{\nid: '" + str(scanID) + "',\noutput: `" + normalScanTxtResult + "`,},\n]")
    feNomralScanPureOutputTxt.close()
    
    EndScan()

# Starting Point
if len(scanMode) < 1:
    RunNormalScan()
else:
    if scanMode == 'pingScanMode':
        mode = pingScanMode
        RunScanMode()
    elif scanMode == 'lightningScanMode':
        mode = lightningScanMode
        RunScanMode()
    elif scanMode == 'intenseScanMode':
        mode = intenseScanMode
        RunScanMode()
    elif scanMode == 'nonPingScanMode':
        mode = nonPingScanMode
        RunScanMode()
    elif scanMode == 'topOneHundredScanMode':
        mode = topOneHundredScanMode
        RunScanMode()
    else:
        mode = fullPortsScanMode
        RunScanMode()
  