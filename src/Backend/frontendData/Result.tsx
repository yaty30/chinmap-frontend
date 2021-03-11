export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'yZdUqNyxaSIVnedGwFjdL',
output: `Command: sudo nmap scamne.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-11 10:27 HKT
Initiating Ping Scan at 10:27
Scanning scamne.nmap.org (45.33.49.119) [4 ports
Completed Ping Scan at 10:27, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:27
Completed Parallel DNS resolution of 1 host. at 10:27, 0.00s elapsed
Initiating SYN Stealth Scan at 10:27
Scanning scamne.nmap.org (45.33.49.119) [100 ports
Discovered open port 22/tcp on 45.33.49.119
Discovered open port 443/tcp on 45.33.49.119
Discovered open port 80/tcp on 45.33.49.119
Completed SYN Stealth Scan at 10:27, 3.44s elapsed (100 total ports)
Nmap scan report for scamne.nmap.org (45.33.49.119)
Host is up, received echo-reply ttl 54 (0.16s latency).
rDNS record for 45.33.49.119: ack.nmap.org
Scanned at 2021-03-11 10:27:34 HKT for 4s
Not shown: 96 filtered ports
Reason: 96 no-responses
PORT    STATE  SERVICE REASON
22/tcp  open   ssh     syn-ack ttl 53
80/tcp  open   http    syn-ack ttl 54
113/tcp closed ident   reset ttl 53
443/tcp open   https   syn-ack ttl 54

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 4.43 seconds
           Raw packets sent: 202 (8.864KB) | Rcvd: 7 (280B)
`,},

{
id: 'NLqxZysdsVFBlIZIQMQfm',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-11 10:31 HKT
Initiating Ping Scan at 10:31
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 10:31, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:31
Completed Parallel DNS resolution of 1 host. at 10:31, 0.00s elapsed
Initiating SYN Stealth Scan at 10:31
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 10:31, 1.61s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received reset ttl 54 (0.17s latency).
Scanned at 2021-03-11 10:31:17 HKT for 2s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 53
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 53
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.95 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 97 (3.888KB)
`,},

{
id: 'XDWjLcCMMCuQBncaDWpVv',
output: `Command: sudo nmap 202.75.91.117 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-11 10:40 HKT
Initiating Ping Scan at 10:40
Scanning 202.75.91.117 [4 ports
Completed Ping Scan at 10:40, 0.05s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:40
Completed Parallel DNS resolution of 1 host. at 10:40, 0.59s elapsed
Initiating SYN Stealth Scan at 10:40
Scanning youthcollege.edu.hk (202.75.91.117) [100 ports
Discovered open port 80/tcp on 202.75.91.117
Discovered open port 443/tcp on 202.75.91.117
Completed SYN Stealth Scan at 10:40, 2.18s elapsed (100 total ports)
Nmap scan report for youthcollege.edu.hk (202.75.91.117)
Host is up, received echo-reply ttl 248 (0.037s latency).
Scanned at 2021-03-11 10:40:22 HKT for 2s
Not shown: 98 filtered ports
Reason: 98 no-responses
PORT    STATE SERVICE REASON
80/tcp  open  http    syn-ack ttl 249
443/tcp open  https   syn-ack ttl 249

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 2.97 seconds
           Raw packets sent: 203 (8.908KB) | Rcvd: 4 (160B)
`,},

{
id: 'usQGJtiuJahZPuHPgEwqe',
output: `Command: sudo nmap 202.75.88.23 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-11 10:41 HKT
Initiating Ping Scan at 10:41
Scanning 202.75.88.23 [4 ports
Completed Ping Scan at 10:41, 2.04s elapsed (1 total hosts)
Nmap scan report for 202.75.88.23 [host down, received no-response
Read data files from: /usr/local/bin/../share/nmap
Note: Host seems down. If it is really up, but blocking our ping probes, try -Pn
Nmap done: 1 IP address (0 hosts up) scanned in 2.26 seconds
           Raw packets sent: 8 (304B) | Rcvd: 1 (96B)
`,},

{
id: 'QvVCoWKIczhLxkDWXtBNX',
output: `Command: sudo nmap google.com -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-11 10:43 HKT
Initiating Ping Scan at 10:43
Scanning google.com (172.217.174.206) [4 ports]
Completed Ping Scan at 10:43, 0.00s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:43
Completed Parallel DNS resolution of 1 host. at 10:43, 0.00s elapsed
Initiating SYN Stealth Scan at 10:43
Scanning google.com (172.217.174.206) [100 ports]
Discovered open port 443/tcp on 172.217.174.206
Discovered open port 80/tcp on 172.217.174.206
Completed SYN Stealth Scan at 10:43, 1.80s elapsed (100 total ports)
Nmap scan report for google.com (172.217.174.206)
Host is up, received echo-reply ttl 116 (0.0033s latency).
rDNS record for 172.217.174.206: hkg07s34-in-f14.1e100.net
Scanned at 2021-03-11 10:43:30 HKT for 2s
Not shown: 98 filtered ports
Reason: 98 no-responses
PORT    STATE SERVICE REASON
80/tcp  open  http    syn-ack ttl 59
443/tcp open  https   syn-ack ttl 59

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.99 seconds
           Raw packets sent: 203 (8.908KB) | Rcvd: 4 (160B)
`,},
]