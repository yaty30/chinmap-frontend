export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'ftSycuPSzZyxHKCJEVmiJ',
output: `Command: nmap 192.168.1.1 -T4 -F -vv -Pn -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-04 16:09 HKT
Initiating Parallel DNS resolution of 1 host. at 16:09
Completed Parallel DNS resolution of 1 host. at 16:09, 0.01s elapsed
Initiating Connect Scan at 16:09
Scanning 192.168.1.1 [100 ports
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Completed Connect Scan at 16:09, 0.06s elapsed (100 total ports)
Nmap scan report for 192.168.1.1
Host is up, received user-set (0.0020s latency).
Scanned at 2021-03-04 16:09:45 HKT for 0s
Not shown: 95 closed ports
Reason: 95 conn-refused
PORT     STATE SERVICE REASON
53/tcp   open  domain  syn-ack
80/tcp   open  http    syn-ack
548/tcp  open  afp     syn-ack
631/tcp  open  ipp     syn-ack
5000/tcp open  upnp    syn-ack

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.23 seconds
`,},

{
id: 'YNJerqNtRqFMIixqpvFQg',
output: `Command: nmap vtc.edu.hk -T4 -F -vv -Pn -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-04 16:13 HKT
Read data files from: /usr/local/bin/../share/nmap
Nmap done: 0 IP addresses (0 hosts up) scanned in 0.08 seconds
`,},

{
id: 'bdDSbjWcMBzKCFwhLhpBj',
output: `Command: nmap scanme.nmap.org -T4 -F -vv -Pn -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-04 16:20 HKT
Initiating Parallel DNS resolution of 1 host. at 16:20
Completed Parallel DNS resolution of 1 host. at 16:20, 0.01s elapsed
Initiating Connect Scan at 16:20
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed Connect Scan at 16:20, 4.62s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received user-set (0.16s latency).
Scanned at 2021-03-04 16:20:29 HKT for 5s
Not shown: 94 closed ports
Reason: 94 conn-refused
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 4.81 seconds
`,},

{
id: 'rMLUnZTdbmpEpuuLvtKxs',
output: `Command: nmap scanme.nmap.org -T4 -F -vv -Pn -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-04 16:22 HKT
Initiating Parallel DNS resolution of 1 host. at 16:22
Completed Parallel DNS resolution of 1 host. at 16:22, 0.00s elapsed
Initiating Connect Scan at 16:22
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed Connect Scan at 16:22, 4.66s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received user-set (0.16s latency).
Scanned at 2021-03-04 16:22:24 HKT for 5s
Not shown: 93 closed ports
Reason: 93 conn-refused
PORT     STATE    SERVICE       REASON
22/tcp   open     ssh           syn-ack
25/tcp   filtered smtp          no-response
80/tcp   open     http          syn-ack
135/tcp  filtered msrpc         no-response
139/tcp  filtered netbios-ssn   no-response
445/tcp  filtered microsoft-ds  no-response
5009/tcp filtered airport-admin no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 4.83 seconds
`,},

{
id: 'HCOzXgxMdeLNPeaRSycYX',
output: `Command: sudo nmap 192.168.1.1 -v -sU -sT -p -U:161,T:80 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-04 16:31 HKT
`,},
]