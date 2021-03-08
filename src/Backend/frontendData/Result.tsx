export const pureOutput = [
{
id: '',
output: ``
,},

{
id: 'PtipQoqNrLhbSOoncVjZa',
output: `Command: sudo nmap 192.168.1.1 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-08 23:32 HKT
Initiating ARP Ping Scan at 23:32
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 23:32, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:32
Completed Parallel DNS resolution of 1 host. at 23:32, 0.01s elapsed
Initiating SYN Stealth Scan at 23:32
Scanning 192.168.1.1 [100 ports
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Completed SYN Stealth Scan at 23:32, 0.02s elapsed (100 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0061s latency).
Scanned at 2021-03-08 23:32:49 HKT for 1s
Not shown: 95 closed ports
Reason: 95 resets
PORT     STATE SERVICE REASON
53/tcp   open  domain  syn-ack ttl 64
80/tcp   open  http    syn-ack ttl 64
548/tcp  open  afp     syn-ack ttl 64
631/tcp  open  ipp     syn-ack ttl 64
5000/tcp open  upnp    syn-ack ttl 64
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.37 seconds
           Raw packets sent: 101 (4.428KB) | Rcvd: 101 (4.048KB)
`,},

{
id: 'axJNxVlDvYnKdTVRaloZf',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-08 23:41 HKT
Initiating Ping Scan at 23:41
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 23:41, 0.17s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:41
Completed Parallel DNS resolution of 1 host. at 23:41, 0.01s elapsed
Initiating SYN Stealth Scan at 23:41
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed SYN Stealth Scan at 23:41, 3.02s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 54 (0.16s latency).
Scanned at 2021-03-08 23:41:47 HKT for 3s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 53
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 54
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 3.39 seconds
           Raw packets sent: 148 (6.488KB) | Rcvd: 133 (5.316KB)
`,},

{
id: 'cPnMQvjAxwxfIzYoTSmSu',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-08 23:43 HKT
Initiating Ping Scan at 23:43
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 23:43, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:43
Completed Parallel DNS resolution of 1 host. at 23:43, 0.01s elapsed
Initiating SYN Stealth Scan at 23:43
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed SYN Stealth Scan at 23:43, 1.61s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 54 (0.16s latency).
Scanned at 2021-03-08 23:43:08 HKT for 2s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 53
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 54
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.99 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 97 (3.876KB)
`,},

{
id: 'sJGGVAEvNDSGHcknTLkPb',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-08 23:47 HKT
Initiating Ping Scan at 23:47
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 23:47, 0.17s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:47
Completed Parallel DNS resolution of 1 host. at 23:47, 0.00s elapsed
Initiating SYN Stealth Scan at 23:47
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 23:47, 1.58s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 54 (0.17s latency).
Scanned at 2021-03-08 23:47:54 HKT for 2s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 54
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 53
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.94 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 97 (3.876KB)
`,},

{
id: 'zHcSEKzhuHFadSjdNpFcE',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-08 23:49 HKT
Initiating Ping Scan at 23:49
Scanning scanme.nmap.org (45.33.32.156) [4 ports]
Completed Ping Scan at 23:49, 0.17s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:49
Completed Parallel DNS resolution of 1 host. at 23:49, 0.02s elapsed
Initiating SYN Stealth Scan at 23:49
Scanning scanme.nmap.org (45.33.32.156) [100 ports]
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 23:49, 1.66s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 54 (0.17s latency).
Scanned at 2021-03-08 23:49:49 HKT for 1s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 54
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 53
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 2.03 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 98 (3.920KB)
`,},
]