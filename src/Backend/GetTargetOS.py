import os
import sys
import re

# File to write in result
targetOS = open("targetOS.txt", "w+")

# Source Data File
shakes = open("nmapCVE.txt", "r")
with open("nmapCVE.txt") as openfile:
    for line in openfile:
        for part in line.split():
            for line in shakes:
                if re.match("(.*)Service Info:(.*)", line):
                    targetOS.writelines(line+"\n")
                    print(line)
targetOS.close()
