export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'wJaXMnPKEVRlDGbRGSvnS',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-12 15:14 HKT
Initiating Ping Scan at 15:14
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 15:14, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 15:14
Completed Parallel DNS resolution of 1 host. at 15:14, 0.00s elapsed
Initiating SYN Stealth Scan at 15:14
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 15:14, 1.67s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 54 (0.16s latency).
Scanned at 2021-03-12 15:14:13 HKT for 2s
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
Nmap done: 1 IP address (1 host up) scanned in 1.99 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 98 (3.920KB)
`,},

{
id: 'AkwrUGSYfLMzVAHTVfuCh',
output: `Command: sudo nmap 192.168.86.29 -T4 -F -vv -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-18 11:02 HKT
Initiating Parallel DNS resolution of 1 host. at 11:02
Completed Parallel DNS resolution of 1 host. at 11:02, 0.00s elapsed
Initiating SYN Stealth Scan at 11:02
Scanning jamess-mbp.lan (192.168.86.29) [100 ports
Discovered open port 3306/tcp on 192.168.86.29
Completed SYN Stealth Scan at 11:02, 0.01s elapsed (100 total ports)
Nmap scan report for jamess-mbp.lan (192.168.86.29)
Host is up, received user-set (0.000018s latency).
Scanned at 2021-03-18 11:02:19 HKT for 0s
Not shown: 99 closed ports
Reason: 99 resets
PORT     STATE SERVICE REASON
3306/tcp open  mysql   syn-ack ttl 64

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.30 seconds
           Raw packets sent: 100 (4.400KB) | Rcvd: 201 (8.444KB)
`,},

{
id: 'eAtxrxUIXSQAhXzIKizJY',
output: `Command: sudo nmap 192.168.86.29 -T4 -F -vv -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-18 11:02 HKT
Initiating Parallel DNS resolution of 1 host. at 11:02
Completed Parallel DNS resolution of 1 host. at 11:02, 0.00s elapsed
Initiating SYN Stealth Scan at 11:02
Scanning jamess-mbp.lan (192.168.86.29) [100 ports
Discovered open port 3306/tcp on 192.168.86.29
Completed SYN Stealth Scan at 11:02, 0.00s elapsed (100 total ports)
Nmap scan report for jamess-mbp.lan (192.168.86.29)
Host is up, received user-set (0.000016s latency).
Scanned at 2021-03-18 11:02:19 HKT for 0s
Not shown: 99 closed ports
Reason: 99 resets
PORT     STATE SERVICE REASON
3306/tcp open  mysql   syn-ack ttl 64

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.30 seconds
           Raw packets sent: 100 (4.400KB) | Rcvd: 201 (8.444KB)
`,},

{
id: 'SgkKDivNVPiOVErScVfGu',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-18 11:07 HKT
Initiating Ping Scan at 11:07
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 11:07, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 11:07
Completed Parallel DNS resolution of 1 host. at 11:07, 0.44s elapsed
Initiating SYN Stealth Scan at 11:07
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed SYN Stealth Scan at 11:07, 1.61s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received reset ttl 51 (0.17s latency).
Scanned at 2021-03-18 11:07:48 HKT for 3s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 51
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 51
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 2.40 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 97 (3.888KB)
`,},

{
id: 'MiVsFYOcJruIIDRKKDmEL',
output: `Command: sudo nmap 192.168.1.250 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-18 23:52 HKT
Initiating ARP Ping Scan at 23:52
Scanning 192.168.1.250 [1 port]
Completed ARP Ping Scan at 23:52, 0.04s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 23:52
Completed Parallel DNS resolution of 1 host. at 23:52, 0.00s elapsed
Initiating SYN Stealth Scan at 23:52
Scanning 192.168.1.250 [100 ports]
Discovered open port 80/tcp on 192.168.1.250
Discovered open port 53/tcp on 192.168.1.250
Discovered open port 443/tcp on 192.168.1.250
Discovered open port 49152/tcp on 192.168.1.250
Completed SYN Stealth Scan at 23:52, 0.05s elapsed (100 total ports)
Nmap scan report for 192.168.1.250
Host is up, received arp-response (0.0074s latency).
Scanned at 2021-03-18 23:52:48 HKT for 0s
Not shown: 96 closed ports
Reason: 96 resets
PORT      STATE SERVICE REASON
53/tcp    open  domain  syn-ack ttl 64
80/tcp    open  http    syn-ack ttl 64
443/tcp   open  https   syn-ack ttl 64
49152/tcp open  unknown syn-ack ttl 64
MAC Address: 02:0F:B5:E2:4A:18 (Unknown)

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.27 seconds
           Raw packets sent: 101 (4.428KB) | Rcvd: 101 (4.044KB)
`,},
]