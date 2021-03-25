export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'xiQdAjchcMeRPDzGbfdSn',
output: `Command: sudo nmap 192.168.1.1 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-20 15:39 HKT
Initiating Ping Scan at 15:39
Scanning 192.168.1.1 [4 ports
Completed Ping Scan at 15:39, 2.03s elapsed (1 total hosts)
Nmap scan report for 192.168.1.1 [host down, received no-response
Read data files from: /usr/local/bin/../share/nmap
Note: Host seems down. If it is really up, but blocking our ping probes, try -Pn
Nmap done: 1 IP address (0 hosts up) scanned in 2.20 seconds
           Raw packets sent: 8 (304B) | Rcvd: 0 (0B)
`,},

{
id: 'TRlLFNZjQSbADHLFFstzv',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-23 22:13 HKT
Initiating Ping Scan at 22:13
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 22:13, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 22:13
Completed Parallel DNS resolution of 1 host. at 22:13, 0.02s elapsed
Initiating SYN Stealth Scan at 22:13
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 22/tcp on 45.33.32.156
Completed SYN Stealth Scan at 22:13, 1.61s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received reset ttl 51 (0.17s latency).
Scanned at 2021-03-23 22:13:46 HKT for 2s
Not shown: 94 closed ports
Reason: 94 resets
PORT    STATE    SERVICE      REASON
22/tcp  open     ssh          syn-ack ttl 50
25/tcp  filtered smtp         no-response
80/tcp  open     http         syn-ack ttl 51
135/tcp filtered msrpc        no-response
139/tcp filtered netbios-ssn  no-response
445/tcp filtered microsoft-ds no-response

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 1.95 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 97 (3.888KB)
`,},

{
id: 'fEwEerhfWueUCNXAyGGqE',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-23 22:16 HKT
Initiating Ping Scan at 22:16
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 22:16, 0.37s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 22:16
Completed Parallel DNS resolution of 1 host. at 22:17, 0.41s elapsed
Initiating SYN Stealth Scan at 22:17
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 22:17, 2.97s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 51 (0.17s latency).
Scanned at 2021-03-23 22:16:59 HKT for 4s
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
Nmap done: 1 IP address (1 host up) scanned in 3.93 seconds
           Raw packets sent: 113 (4.948KB) | Rcvd: 98 (3.916KB)
`,},

{
id: 'qvuwXNuNfoUEJMMaWCxKh',
output: `Command: sudo nmap scanme.nmap.org -T4 -p- -v -v -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-24 01:24 HKT
Initiating Parallel DNS resolution of 1 host. at 01:24
Completed Parallel DNS resolution of 1 host. at 01:24, 0.29s elapsed
Initiating SYN Stealth Scan at 01:24
Scanning scanme.nmap.org (45.33.32.156) [65535 ports
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Discovered open port 31337/tcp on 45.33.32.156
Discovered open port 9929/tcp on 45.33.32.156
SYN Stealth Scan Timing: About 17.77% done; ETC: 01:27 (0:02:23 remaining)
SYN Stealth Scan Timing: About 41.41% done; ETC: 01:28 (0:02:04 remaining)
SYN Stealth Scan Timing: About 59.02% done; ETC: 01:28 (0:01:22 remaining)
SYN Stealth Scan Timing: About 74.09% done; ETC: 01:28 (0:00:52 remaining)
Completed SYN Stealth Scan at 01:28, 198.72s elapsed (65535 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received user-set (0.17s latency).
Scanned at 2021-03-24 01:24:45 HKT for 199s
Not shown: 65524 closed ports
Reason: 65524 resets
PORT      STATE    SERVICE      REASON
22/tcp    open     ssh          syn-ack ttl 51
25/tcp    filtered smtp         no-response
80/tcp    open     http         syn-ack ttl 51
135/tcp   filtered msrpc        no-response
137/tcp   filtered netbios-ns   no-response
138/tcp   filtered netbios-dgm  no-response
139/tcp   filtered netbios-ssn  no-response
445/tcp   filtered microsoft-ds no-response
1434/tcp  filtered ms-sql-m     no-response
9929/tcp  open     nping-echo   syn-ack ttl 51
31337/tcp open     Elite        syn-ack ttl 51

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 199.28 seconds
           Raw packets sent: 65629 (2.888MB) | Rcvd: 65559 (2.622MB)
`,},

{
id: 'akSiJJDXHDHdkbRzOFyMP',
output: `Command: sudo nmap 192.168.1.1 -T4 -F 
======================================================
`,},

{
id: 'yooLDCfpCVWUfwtXoQGfs',
output: `Command: sudo nmap 192.168.2.46 -T4 -F 
======================================================
`,},

{
id: 'jAfZXdOISgCktQbOElhHU',
output: `Command: nmap 192.168.2.46 -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-24 23:27 ¢Dx¢D_?D¡PCRE?!
Initiating Parallel DNS resolution of 1 host. at 23:27
Completed Parallel DNS resolution of 1 host. at 23:27, 0.00s elapsed
Initiating SYN Stealth Scan at 23:27
Scanning DESKTOP-D8E1SIS (192.168.2.46) [100 ports]
Discovered open port 445/tcp on 192.168.2.46
Discovered open port 139/tcp on 192.168.2.46
Discovered open port 135/tcp on 192.168.2.46
Discovered open port 3000/tcp on 192.168.2.46
Completed SYN Stealth Scan at 23:27, 0.01s elapsed (100 total ports)
Nmap scan report for DESKTOP-D8E1SIS (192.168.2.46)
Host is up, received localhost-response (0.00093s latency).
Scanned at 2021-03-24 23:27:27 ¢Dx¢D_?D¡PCRE?! for 0s
Not shown: 96 closed ports
Reason: 96 resets
PORT     STATE SERVICE      REASON
135/tcp  open  msrpc        syn-ack ttl 128
139/tcp  open  netbios-ssn  syn-ack ttl 128
445/tcp  open  microsoft-ds syn-ack ttl 128
3000/tcp open  ppp          syn-ack ttl 128

Read data files from: C:\Program Files (x86)\Nmap
Nmap done: 1 IP address (1 host up) scanned in 0.20 seconds
           Raw packets sent: 100 (4.400KB) | Rcvd: 204 (8.576KB)
`,},
]