export const pureOutput = [
{
id: '',
output: ``
,},



{
id: 'DlhvQDlJPZzALEEVSdSaY',
output: `Command: nmap 192.158.1.0sn=24 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-25 22:48 HKT
Read data files from: /usr/local/bin/../share/nmap
Nmap done: 0 IP addresses (0 hosts up) scanned in 0.11 seconds
`,},

{
id: 'FMVsgLBaFdExBMauaVBPe',
output: `Command: nmap 192.168.86.0sn=24 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-26 02:53 HKT
Read data files from: /usr/local/bin/../share/nmap
Nmap done: 0 IP addresses (0 hosts up) scanned in 0.09 seconds
`,},

{
id: 'VEJsBDSfCWIXYVtrlYwkO',
output: `Command: nmap 192.168.1.0sn=24 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-26 02:57 HKT
Read data files from: /usr/local/bin/../share/nmap
Nmap done: 0 IP addresses (0 hosts up) scanned in 0.09 seconds
`,},

{
id: 'GSFAFBMYjjmXkHqoIykQH',
output: `Command: nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-26 03:00 HKT
Initiating Ping Scan at 03:00
Scanning scanme.nmap.org (45.33.32.156) [2 ports]
Completed Ping Scan at 03:00, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 03:00
Completed Parallel DNS resolution of 1 host. at 03:01, 0.26s elapsed
Initiating Connect Scan at 03:01
Scanning scanme.nmap.org (45.33.32.156) [100 ports]
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed Connect Scan at 03:01, 4.79s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received syn-ack (0.17s latency).
Scanned at 2021-03-26 03:00:59 HKT for 6s
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
Nmap done: 1 IP address (1 host up) scanned in 5.41 seconds
`,},
]