import os
import sys
import re
import json
import random
import string
import tempfile

# printing letters
partOne = string.ascii_letters
partTwo = string.digits
temFileName =  ''.join(random.choices(string.ascii_uppercase + string.digits, k=21)) 

# File to write in result
nmaptxt = open(temFileName + ".txt", "w+")

# Source Data File
shakes = open("nmapCVE.txt", "r")
with open("nmapCVE.txt") as openfile:
    i = 0
    for line in openfile:
        for part in line.split():
            for line in shakes:
                if re.match("(.*)(CVE|cve)-(.*)", line):
                    nmaptxt.writelines(line+"\n")
                    print(line)
nmaptxt.close()

##################################################
# ========== CVE output file to JSON ========== #
##################################################

# # Data array
# cveOutput = {} 

# with open(nmaptxt) as fh: 

#     for line in fh: 

#         # reads each line and trims of extra the spaces 
#         # and gives only the valid words 
#         command, description = line.strip().split(None, 1) 

#         cveOutput[command] = description.strip() 

# # Creating JSON file
# cveJSON = open("CVEJSON.json", "w") 
# json.dump(cveOutput, cveJSON, indent = 4, sort_keys = False) 
# cveJSON.close() 


# os.remove(temFileName + ".txt")
                