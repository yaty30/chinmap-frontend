import nmap
import os

# Scan for --top-ports 1000 first
nm = nmap.PortScanner()

target = "scanme.nmap.org"

topOneThosandList = open("top1000list.txt", "r")
portList = topOneThosandList.read()
nm.scan(target, portList)

topOneThosandPorts = open("topPorts1000.txt", "w+")
for host in nm.all_hosts():
    print(nm.command_line())

    divider = '\n----------------------------------------------------\n'
    hostInfo = 'Host : {} ({})'.format(host, nm[host].hostname()) + "\n"
    stateInfo = 'State : {}'.format(nm[host].state()) + "\n"
    cm = "Using command: [ " + nm.command_line() + " ]"

    topOneThosandPorts.writelines(divider + hostInfo + stateInfo + cm + divider)
    
    # Host status
    isHostUp = open("isHostUp.txt", "w+")
    isHostUp.write(nm[host].state())
    isHostUp.close()
    # os.remove(filename)

    for proto in nm[host].all_protocols():
        print('----------')
        print('Protocol : {}'.format(proto))
 
        lport = nm[host][proto].keys()
        for port in lport:
            output = 'port : {}\tstate : {}'.format(port, nm[host][proto][port]['state'] + "\n")
            print(output)
            topOneThosandPorts.writelines(output)

topOneThosandPorts.close()

# def Automation():
#     nm = nmap.PortScanner()
#     autoStart = 1001
#     autoEnd = 1021
#     autoPorts = str(autoStart) + "-" + str(autoEnd)
    
#     nm.scan('127.0.0.2', autoPorts)

#     autoResult = open("AutomationResult.txt", "w+")
#     for host in nm.all_hosts():
#         print(nm.command_line())
#         print('----------------------------------------------------')
#         print('Host : {} ({})'.format(host, nm[host].hostname()))
#         print('State : {}'.format(nm[host].state()))
#         for proto in nm[host].all_protocols():
#             print('----------')
#             print('Protocol : {}'.format(proto))
    
#             lport = nm[host][proto].keys()
#             for port in lport:
#                 output = 'port : {}\tstate : {}'.format(port, nm[host][proto][port]['state'])
#                 autoResult.writelines(output+"\n")

#     if 'open' in autoResult.read():
#         print("true")
#     else:
#         return Automation()

#     autoResult.close()


# isEmpty = os.path.getsize("topPorts1000.txt")

# if isEmpty != 0:
#     print("Port 1 - 1024: contains alive port(s)")
# else:
#     Automation()


