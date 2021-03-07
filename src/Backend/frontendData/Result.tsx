export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'UtcKkPAFwvwDBUToMgxml',
output: `Command: sudo nmap 192.168.1.1 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-07 19:17 HKT
Initiating ARP Ping Scan at 19:17
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 19:17, 0.04s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 19:17
Completed Parallel DNS resolution of 1 host. at 19:17, 0.01s elapsed
Initiating SYN Stealth Scan at 19:17
Scanning 192.168.1.1 [100 ports
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Completed SYN Stealth Scan at 19:17, 0.04s elapsed (100 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0076s latency).
Scanned at 2021-03-07 19:17:04 HKT for 0s
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
Nmap done: 1 IP address (1 host up) scanned in 0.26 seconds
           Raw packets sent: 101 (4.428KB) | Rcvd: 101 (4.048KB)
`,},

{
id: 'RYWeVFHvqxaNTqPRqWLnO',
output: `Command: sudo nmap 192.168.1.1 -T4 -p- -v
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-07 19:17 HKT
Initiating ARP Ping Scan at 19:17
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 19:17, 0.04s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 19:17
Completed Parallel DNS resolution of 1 host. at 19:17, 0.01s elapsed
Initiating SYN Stealth Scan at 19:17
Scanning 192.168.1.1 [65535 ports
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Discovered open port 42080/tcp on 192.168.1.1
Discovered open port 8200/tcp on 192.168.1.1
Discovered open port 42443/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 5916/tcp on 192.168.1.1
Discovered open port 33344/tcp on 192.168.1.1
Discovered open port 20005/tcp on 192.168.1.1
Discovered open port 1990/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 7272/tcp on 192.168.1.1
Completed SYN Stealth Scan at 19:17, 15.58s elapsed (65535 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0099s latency).
Scanned at 2021-03-07 19:17:31 HKT for 16s
Not shown: 65522 closed ports
Reason: 65522 resets
PORT      STATE SERVICE      REASON
53/tcp    open  domain       syn-ack ttl 64
80/tcp    open  http         syn-ack ttl 64
548/tcp   open  afp          syn-ack ttl 64
631/tcp   open  ipp          syn-ack ttl 64
1990/tcp  open  stun-p1      syn-ack ttl 64
5000/tcp  open  upnp         syn-ack ttl 64
5916/tcp  open  unknown      syn-ack ttl 64
7272/tcp  open  watchme-7272 syn-ack ttl 64
8200/tcp  open  trivnet1     syn-ack ttl 64
20005/tcp open  btx          syn-ack ttl 64
33344/tcp open  unknown      syn-ack ttl 64
42080/tcp open  unknown      syn-ack ttl 64
42443/tcp open  unknown      syn-ack ttl 64
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 15.87 seconds
           Raw packets sent: 66896 (2.943MB) | Rcvd: 65580 (2.623MB)
`,},

{
id: 'oScYjMgDMtXjnjObAvGGi',
output: `Command: sudo nmap 192.168.1.1 -T4 -Pn -v
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-07 19:20 HKT
Initiating ARP Ping Scan at 19:20
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 19:20, 0.04s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 19:20
Completed Parallel DNS resolution of 1 host. at 19:20, 0.01s elapsed
Initiating SYN Stealth Scan at 19:20
Scanning 192.168.1.1 [1000 ports
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Discovered open port 8200/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 20005/tcp on 192.168.1.1
Completed SYN Stealth Scan at 19:20, 1.26s elapsed (1000 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0038s latency).
Scanned at 2021-03-07 19:20:46 HKT for 1s
Not shown: 993 closed ports
Reason: 993 resets
PORT      STATE SERVICE  REASON
53/tcp    open  domain   syn-ack ttl 64
80/tcp    open  http     syn-ack ttl 64
548/tcp   open  afp      syn-ack ttl 64
631/tcp   open  ipp      syn-ack ttl 64
5000/tcp  open  upnp     syn-ack ttl 64
8200/tcp  open  trivnet1 syn-ack ttl 64
20005/tcp open  btx      syn-ack ttl 64
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.49 seconds
           Raw packets sent: 1008 (44.336KB) | Rcvd: 1001 (40.056KB)
`,},

{
id: 'WBswwIrRKqsKTWiUPZgVp',
output: `Command: sudo nmap 192.168.1.1 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-07 22:11 HKT
Initiating ARP Ping Scan at 22:11
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 22:11, 0.05s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 22:11
Completed Parallel DNS resolution of 1 host. at 22:11, 0.01s elapsed
Initiating SYN Stealth Scan at 22:11
Scanning 192.168.1.1 [100 ports
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Completed SYN Stealth Scan at 22:11, 0.04s elapsed (100 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0081s latency).
Scanned at 2021-03-07 22:11:01 HKT for 0s
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
Nmap done: 1 IP address (1 host up) scanned in 0.30 seconds
           Raw packets sent: 101 (4.428KB) | Rcvd: 101 (4.048KB)
`,},

{
id: 'dnebKLxEHLjiNXQqVDLbn',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-07 23:50 HKT
Initiating Ping Scan at 23:50
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 23:50, 0.94s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:50
Completed Parallel DNS resolution of 1 host. at 23:50, 1.63s elapsed
Initiating SYN Stealth Scan at 23:50
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed SYN Stealth Scan at 23:50, 1.64s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 54 (0.17s latency).
Scanned at 2021-03-07 23:50:16 HKT for 4s
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
Nmap done: 1 IP address (1 host up) scanned in 4.65 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 97 (3.876KB)
`,},

{
id: 'uLzlIzhmLZSJKDwtzhMyt',
output: `Command: sudo nmap scanme.nmap.org -v -sU -sT -p U:161,T:80
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-07 23:50 HKT
Initiating Ping Scan at 23:50
Scanning scanme.nmap.org (45.33.32.156) [4 ports]
Completed Ping Scan at 23:50, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:50
Completed Parallel DNS resolution of 1 host. at 23:50, 0.00s elapsed
Initiating UDP Scan at 23:50
Scanning scanme.nmap.org (45.33.32.156) [1 port]
Completed UDP Scan at 23:50, 0.16s elapsed (1 total ports)
Initiating Connect Scan at 23:50
Scanning scanme.nmap.org (45.33.32.156) [1 port]
Discovered open port 80/tcp on 45.33.32.156
Completed Connect Scan at 23:50, 0.16s elapsed (1 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).

PORT    STATE  SERVICE
80/tcp  open   http
161/udp closed snmp

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.64 seconds
           Raw packets sent: 5 (240B) | Rcvd: 2 (144B)
`,},
]