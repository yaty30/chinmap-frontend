export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'BuGFZdhNqoMlzRdVfpUmL',
output: `Command: nmap 10.107.208.157 -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 12:53 HKT
Nmap scan report for 10.107.208.157
Host is up (0.000078s latency).
Not shown: 998 closed ports
PORT     STATE SERVICE
3001/tcp open  nessus
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.23 seconds
`,},

{
id: 'ZfnDLPDBeMqkLRQCZaiav',
output: `Command: nmap scanme.nmap.org -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 13:35 HKT
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).
Not shown: 993 closed ports
PORT      STATE    SERVICE
22/tcp    filtered ssh
23/tcp    filtered telnet
80/tcp    open     http
445/tcp   filtered microsoft-ds
515/tcp   filtered printer
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 40.06 seconds
`,},
]