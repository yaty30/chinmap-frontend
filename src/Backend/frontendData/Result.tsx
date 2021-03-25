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
Scanning scanme.nmap.org (45.33.32.156) [2 ports
Completed Ping Scan at 03:00, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 03:00
Completed Parallel DNS resolution of 1 host. at 03:01, 0.26s elapsed
Initiating Connect Scan at 03:01
Scanning scanme.nmap.org (45.33.32.156) [100 ports
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

{
id: 'VTzPKyfshdhjkPnuaIOBC',
output: `Command: nmap 192.168.86.35 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-26 03:30 China Standard Time
Initiating Parallel DNS resolution of 1 host. at 03:30
Completed Parallel DNS resolution of 1 host. at 03:30, 0.01s elapsed
Initiating SYN Stealth Scan at 03:30
Scanning laptop-n1145n2q.lan (192.168.86.35) [100 ports
Discovered open port 139/tcp on 192.168.86.35
Discovered open port 135/tcp on 192.168.86.35
Discovered open port 443/tcp on 192.168.86.35
Discovered open port 445/tcp on 192.168.86.35
Discovered open port 80/tcp on 192.168.86.35
Discovered open port 5357/tcp on 192.168.86.35
Completed SYN Stealth Scan at 03:30, 0.17s elapsed (100 total ports)
Nmap scan report for laptop-n1145n2q.lan (192.168.86.35)
Host is up, received localhost-response (0.0023s latency).
Scanned at 2021-03-26 03:30:27 China Standard Time for 0s
Not shown: 94 closed ports
Reason: 94 resets
PORT     STATE SERVICE      REASON
80/tcp   open  http         syn-ack ttl 128
135/tcp  open  msrpc        syn-ack ttl 128
139/tcp  open  netbios-ssn  syn-ack ttl 128
443/tcp  open  https        syn-ack ttl 128
445/tcp  open  microsoft-ds syn-ack ttl 128
5357/tcp open  wsdapi       syn-ack ttl 128

Read data files from: C:\Program Files (x86)\Nmap
Nmap done: 1 IP address (1 host up) scanned in 2.08 seconds
           Raw packets sent: 100 (4.400KB) | Rcvd: 206 (8.664KB)
`,},

{
id: 'SfqDTehOLKhStOtHZrnLX',
output: `Command: nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-26 03:39 China Standard Time
Initiating Ping Scan at 03:39
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 03:39, 1.58s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 03:39
Completed Parallel DNS resolution of 1 host. at 03:39, 0.26s elapsed
Initiating SYN Stealth Scan at 03:39
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed SYN Stealth Scan at 03:39, 1.64s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 51 (0.17s latency).
Scanned at 2021-03-26 03:39:31 China Standard Time for 2s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 51
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 51
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: C:\Program Files (x86)\Nmap
Nmap done: 1 IP address (1 host up) scanned in 5.16 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 99 (3.964KB)
`,},

{
id: 'SNorErFqtmhspkLmxXgqo',
output: `Command: nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-26 03:42 China Standard Time
Initiating Ping Scan at 03:42
Scanning scanme.nmap.org (45.33.32.156) [4 ports]
Completed Ping Scan at 03:42, 0.88s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 03:42
Completed Parallel DNS resolution of 1 host. at 03:42, 0.01s elapsed
Initiating SYN Stealth Scan at 03:42
Scanning scanme.nmap.org (45.33.32.156) [100 ports]
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 03:42, 1.64s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 51 (0.17s latency).
Scanned at 2021-03-26 03:42:12 China Standard Time for 2s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 51
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 51
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: C:\Program Files (x86)\Nmap
Nmap done: 1 IP address (1 host up) scanned in 3.50 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 99 (3.964KB)
`,},
]