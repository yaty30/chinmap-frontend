export const pureOutput = [
{
id: '',
output: ``
,},

{
id: 'JmGDWcOuhrHObTDfnPxJA',
output: `Command: sudo nmap scanme.nmap.org -T4 -A
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-10 00:47 HKT
NSE: Loaded 153 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Initiating Ping Scan at 00:47
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 00:47, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 00:47
Completed Parallel DNS resolution of 1 host. at 00:47, 0.00s elapsed
Initiating SYN Stealth Scan at 00:47
Scanning scanme.nmap.org (45.33.32.156) [1000 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 31337/tcp on 45.33.32.156
Discovered open port 9929/tcp on 45.33.32.156
Completed SYN Stealth Scan at 00:47, 4.75s elapsed (1000 total ports)
Initiating Service scan at 00:47
Scanning 4 services on scanme.nmap.org (45.33.32.156)
Completed Service scan at 00:47, 6.50s elapsed (4 services on 1 host)
Initiating OS detection (try #1) against scanme.nmap.org (45.33.32.156)
Retrying OS detection (try #2) against scanme.nmap.org (45.33.32.156)
Initiating Traceroute at 00:47
Completed Traceroute at 00:47, 0.17s elapsed
Initiating Parallel DNS resolution of 10 hosts. at 00:47
Completed Parallel DNS resolution of 10 hosts. at 00:47, 9.64s elapsed
NSE: Script scanning 45.33.32.156.
Initiating NSE at 00:47
Completed NSE at 00:47, 5.39s elapsed
Initiating NSE at 00:47
Completed NSE at 00:47, 0.64s elapsed
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).
Not shown: 991 closed ports
PORT      STATE    SERVICE      VERSION
22/tcp    open     ssh          OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   1024 ac:00:a0:1a:82:ff:cc:55:99:dc:67:2b:34:97:6b:75 (DSA)
|   2048 20:3d:2d:44:62:2a:b0:5a:9d:b5:b3:05:14:c2:a6:b2 (RSA)
|   256 96:02:bb:5e:57:54:1c:4e:45:2f:56:4c:4a:24:b2:57 (ECDSA)
|_  256 33:fa:91:0f:e0:e1:7b:1f:6d:05:a2:b0:f1:54:41:56 (ED25519)
25/tcp    filtered smtp
80/tcp    open     http         Apache httpd 2.4.7 ((Ubuntu))
|_http-favicon: Nmap Project
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.7 (Ubuntu)
|_http-title: Go ahead and ScanMe!
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
3372/tcp  filtered msdtc
9929/tcp  open     nping-echo   Nping echo
31337/tcp open     tcpwrapped
Aggressive OS guesses: Linux 2.6.32 (96%), Linux 2.6.32 or 3.10 (96%), Linux 4.4 (96%), Linux 2.6.32 - 2.6.35 (94%), Linux 2.6.32 - 2.6.39 (94%), Linux 2.6.32 - 3.0 (93%), Linux 4.0 (92%), Linux 3.11 - 4.1 (92%), Linux 3.2 - 3.8 (92%), Linux 5.0 - 5.4 (92%)
No exact OS matches for host (test conditions non-ideal).
Uptime guess: 29.197 days (since Mon Feb  8 20:03:16 2021)
Network Distance: 11 hops
TCP Sequence Prediction: Difficulty=260 (Good luck!)
IP ID Sequence Generation: All zeros
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 8080/tcp)
HOP RTT       ADDRESS
1   2.42 ms   192.168.1.1
2   15.56 ms  203185042001.res.dyn.ctinets.com (203.185.42.1)
3   19.19 ms  10.239.77.5
4   5.06 ms   014199254133.ctinets.com (14.199.254.133)
5   9.07 ms   061244225101.ctinets.com (61.244.225.101)
6   6.71 ms   hnk-b2-link.ip.twelve99.net (62.115.146.52)
7   55.33 ms  tky-b1-link.ip.twelve99.net (62.115.143.61)
8   160.89 ms sjo-b21-link.ip.twelve99.net (62.115.123.140)
9   157.21 ms linode-ic342731-sjo-b21.ip.twelve99-cust.net (62.115.172.133)
10  156.43 ms 173.230.159.69
11  157.27 ms scanme.nmap.org (45.33.32.156)

NSE: Script Post-scanning.
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Initiating NSE at 00:47
Completed NSE at 00:47, 0.00s elapsed
Read data files from: /usr/local/bin/../share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 35.14 seconds
           Raw packets sent: 1096 (50.116KB) | Rcvd: 1033 (43.050KB)
`,},

{
id: 'NgRnqdJZBsIWLBEvWoxKf',
output: `Command: sudo nmap scanme.nmap.org -T4 -A
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-10 00:57 HKT
NSE: Loaded 153 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 00:57
Completed NSE at 00:57, 0.00s elapsed
Initiating NSE at 00:57
Completed NSE at 00:57, 0.00s elapsed
Initiating NSE at 00:57
Completed NSE at 00:57, 0.00s elapsed
Initiating Ping Scan at 00:57
Scanning scanme.nmap.org (45.33.32.156) [4 ports]
Completed Ping Scan at 00:57, 0.17s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 00:57
Completed Parallel DNS resolution of 1 host. at 00:57, 0.00s elapsed
Initiating SYN Stealth Scan at 00:57
Scanning scanme.nmap.org (45.33.32.156) [1000 ports]
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 31337/tcp on 45.33.32.156
Discovered open port 9929/tcp on 45.33.32.156
Completed SYN Stealth Scan at 00:58, 5.64s elapsed (1000 total ports)
Initiating Service scan at 00:58
Scanning 4 services on scanme.nmap.org (45.33.32.156)
Completed Service scan at 00:58, 6.35s elapsed (4 services on 1 host)
Initiating OS detection (try #1) against scanme.nmap.org (45.33.32.156)
Retrying OS detection (try #2) against scanme.nmap.org (45.33.32.156)
Initiating Traceroute at 00:58
Completed Traceroute at 00:58, 0.18s elapsed
Initiating Parallel DNS resolution of 10 hosts. at 00:58
Completed Parallel DNS resolution of 10 hosts. at 00:58, 8.03s elapsed
NSE: Script scanning 45.33.32.156.
Initiating NSE at 00:58
Completed NSE at 00:58, 5.37s elapsed
Initiating NSE at 00:58
Completed NSE at 00:58, 0.64s elapsed
Initiating NSE at 00:58
Completed NSE at 00:58, 0.00s elapsed
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).
Not shown: 991 closed ports
PORT      STATE    SERVICE      VERSION
22/tcp    open     ssh          OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   1024 ac:00:a0:1a:82:ff:cc:55:99:dc:67:2b:34:97:6b:75 (DSA)
|   2048 20:3d:2d:44:62:2a:b0:5a:9d:b5:b3:05:14:c2:a6:b2 (RSA)
|   256 96:02:bb:5e:57:54:1c:4e:45:2f:56:4c:4a:24:b2:57 (ECDSA)
|_  256 33:fa:91:0f:e0:e1:7b:1f:6d:05:a2:b0:f1:54:41:56 (ED25519)
25/tcp    filtered smtp
80/tcp    open     http         Apache httpd 2.4.7 ((Ubuntu))
|_http-favicon: Nmap Project
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.7 (Ubuntu)
|_http-title: Go ahead and ScanMe!
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
3372/tcp  filtered msdtc
9929/tcp  open     nping-echo   Nping echo
31337/tcp open     tcpwrapped
Aggressive OS guesses: Linux 2.6.32 (96%), Linux 4.4 (96%), Linux 2.6.32 or 3.10 (95%), Linux 2.6.32 - 2.6.35 (94%), Linux 2.6.32 - 2.6.39 (94%), Linux 4.0 (93%), Linux 3.11 - 4.1 (92%), Linux 3.2 - 3.8 (92%), Linux 5.0 - 5.4 (92%), Linux 2.6.18 (92%)
No exact OS matches for host (test conditions non-ideal).
Uptime guess: 29.205 days (since Mon Feb  8 20:03:15 2021)
Network Distance: 11 hops
TCP Sequence Prediction: Difficulty=261 (Good luck!)
IP ID Sequence Generation: All zeros
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 443/tcp)
HOP RTT       ADDRESS
1   10.27 ms  192.168.1.1
2   18.06 ms  203185042001.res.dyn.ctinets.com (203.185.42.1)
3   21.95 ms  10.239.77.5
4   23.55 ms  014199254133.ctinets.com (14.199.254.133)
5   19.39 ms  061244225101.ctinets.com (61.244.225.101)
6   18.09 ms  hnk-b2-link.ip.twelve99.net (62.115.146.52)
7   69.07 ms  tky-b1-link.ip.twelve99.net (62.115.143.61)
8   170.64 ms sjo-b21-link.ip.twelve99.net (62.115.123.140)
9   170.64 ms linode-ic342731-sjo-b21.ip.twelve99-cust.net (62.115.172.133)
10  171.17 ms 173.230.159.69
11  167.29 ms scanme.nmap.org (45.33.32.156)

NSE: Script Post-scanning.
Initiating NSE at 00:58
Completed NSE at 00:58, 0.00s elapsed
Initiating NSE at 00:58
Completed NSE at 00:58, 0.00s elapsed
Initiating NSE at 00:58
Completed NSE at 00:58, 0.00s elapsed
Read data files from: /usr/local/bin/../share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 33.34 seconds
           Raw packets sent: 1165 (53.144KB) | Rcvd: 1102 (45.798KB)
`,},
]