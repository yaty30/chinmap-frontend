import nmap

nm = nmap.PortScanner()

target = "scanme.nmap.org"

nm.scan(hosts='192.168.1.1', arguments='-T4')
for host in nm.all_hosts():
    print(nm.command_line())

    divider = '\n----------------------------------------------------\n'
    hostInfo = 'Host : {} ({})'.format(host, nm[host].hostname()) + "\n"
    stateInfo = 'State : {}'.format(nm[host].state()) + "\n"
    cm = "Using command: [ " + nm.command_line() + " ]"

    time = ':{}'.format(host, nm[host].state())
    print(time)