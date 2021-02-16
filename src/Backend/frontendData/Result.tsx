export const pureOutput = [
    {
        id: "",
        output: "",
    },
{
id: 'yIxmVhWdoldaVpfNOaIoT',
output: `Command: nmap192.168.1.1 With Scan mode:  -T4 -F -vv 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 10:29 HKT
Initiating ARP Ping Scan at 10:29
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 10:29, 0.06s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:29
Completed Parallel DNS resolution of 1 host. at 10:29, 0.01s elapsed
Initiating SYN Stealth Scan at 10:29
Scanning 192.168.1.1 [100 ports
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Completed SYN Stealth Scan at 10:29, 0.07s elapsed (100 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0013s latency).
Scanned at 2021-02-15 10:29:21 HKT for 0s
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
Nmap done: 1 IP address (1 host up) scanned in 0.40 seconds
           Raw packets sent: 101 (4.428KB) | Rcvd: 101 (4.048KB)
`,},

{
id: 'DwhlyyvJMwnJzXXtFDKkQ',
output: `Command: nmap192.168.1.1 With Scan mode:  -T4 -F -vv 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 10:29 HKT
Initiating ARP Ping Scan at 10:29
Scanning 192.168.1.1 [1 port
Completed ARP Ping Scan at 10:29, 0.05s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:29
Completed Parallel DNS resolution of 1 host. at 10:29, 0.00s elapsed
Initiating SYN Stealth Scan at 10:29
Scanning 192.168.1.1 [100 ports
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Completed SYN Stealth Scan at 10:29, 0.01s elapsed (100 total ports)
Nmap scan report for 192.168.1.1
Host is up, received arp-response (0.0028s latency).
Scanned at 2021-02-15 10:29:58 HKT for 0s
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
Nmap done: 1 IP address (1 host up) scanned in 0.29 seconds
           Raw packets sent: 101 (4.428KB) | Rcvd: 101 (4.048KB)
`,},

{
id: 'ddxwcuJKVOpMthvjQIUxY',
output: `Command: nmapscanme.nmap.org With Scan mode:  -T4 -F -vv 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 10:31 HKT
Initiating Ping Scan at 10:31
Scanning scanme.nmap.org (45.33.32.156) [4 ports
Completed Ping Scan at 10:31, 0.17s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:31
Completed Parallel DNS resolution of 1 host. at 10:31, 0.01s elapsed
Initiating SYN Stealth Scan at 10:31
Scanning scanme.nmap.org (45.33.32.156) [100 ports
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 10:31, 1.57s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received reset ttl 53 (0.16s latency).
Scanned at 2021-02-15 10:31:20 HKT for 2s
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
Nmap done: 1 IP address (1 host up) scanned in 1.95 seconds
           Raw packets sent: 108 (4.728KB) | Rcvd: 98 (3.932KB)
`,},

{
id: 'ORPUVElpkSxAbqWaaSRoI',
output: `Command: nmap168.235.74.9 With Scan mode:  -v -sU -sT -p U:161,T:80 -T0 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 10:32 HKT
Initiating Ping Scan at 10:32
Scanning 168.235.74.9 [4 ports
Ping Scan Timing: About 12.50% done; ETC: 11:12 (0:35:00 remaining)
Completed Ping Scan at 10:37, 300.17s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 10:37
Completed Parallel DNS resolution of 1 host. at 10:37, 0.82s elapsed
Initiating UDP Scan at 10:37
Scanning 168.235.74.9 [1 port
UDP Scan Timing: About 50.00% done; ETC: 10:47 (0:05:00 remaining)
Completed UDP Scan at 10:42, 300.17s elapsed (1 total ports)
Initiating Connect Scan at 10:42
Scanning 168.235.74.9 [1 port
Connect Scan Timing: About 50.00% done; ETC: 10:52 (0:05:00 remaining)
Discovered open port 80/tcp on 168.235.74.9
Completed Connect Scan at 10:47, 300.32s elapsed (1 total ports)
Nmap scan report for 168.235.74.9
Host is up (0.18s latency).

PORT    STATE  SERVICE
80/tcp  open   http
161/udp closed snmp

Read data files from: /usr/local/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 901.83 seconds
           Raw packets sent: 2 (116B) | Rcvd: 2 (144B)
`,},

{
id: 'eohyxHbEwZKbPaGJpykNG',
output: `Command: nmap 192.168.1.1
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 10:55 HKT
Nmap scan report for 192.168.1.1
Host is up (0.0024s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
548/tcp   open  afp
631/tcp   open  ipp
5000/tcp  open  upnp
8200/tcp  open  trivnet1
20005/tcp open  btx
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Nmap done: 1 IP address (1 host up) scanned in 0.33 seconds
`,},

{
id: 'QJcESrLeBQvVRKqnvieKd',
output: `Command: nmap 192.168.1.1
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 10:56 HKT
Nmap scan report for 192.168.1.1
Host is up (0.0022s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
548/tcp   open  afp
631/tcp   open  ipp
5000/tcp  open  upnp
8200/tcp  open  trivnet1
20005/tcp open  btx
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Nmap done: 1 IP address (1 host up) scanned in 0.45 seconds
`,},

{
id: 'dLyuCiGAAmFPZbMjmNJan',
output: `Command: nmap 192.168.1.1
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 11:02 HKT
Nmap scan report for 192.168.1.1
Host is up (0.0034s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
548/tcp   open  afp
631/tcp   open  ipp
5000/tcp  open  upnp
8200/tcp  open  trivnet1
20005/tcp open  btx
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Nmap done: 1 IP address (1 host up) scanned in 0.35 seconds
`,},

{
id: 'GGdnuXkyBdRImhBzWbQlj',
output: `Command: nmap 192.168.1.1
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 11:02 HKT
Nmap scan report for 192.168.1.1
Host is up (0.0021s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
548/tcp   open  afp
631/tcp   open  ipp
5000/tcp  open  upnp
8200/tcp  open  trivnet1
20005/tcp open  btx
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Nmap done: 1 IP address (1 host up) scanned in 0.49 seconds
`,},

{
id: 'jRrgxjzPQaWZWxBLIrhYY',
output: `Command: nmap 192.168.1.1
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 11:02 HKT
Nmap scan report for 192.168.1.1
Host is up (0.0017s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
548/tcp   open  afp
631/tcp   open  ipp
5000/tcp  open  upnp
8200/tcp  open  trivnet1
20005/tcp open  btx
MAC Address: CC:40:D0:F4:D9:1D (Netgear)

Nmap done: 1 IP address (1 host up) scanned in 0.34 seconds
`,},

{
id: 'rzMroPpERxVfieJkvoijL',
output: `Command: nmap 192.168.1.7
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-15 11:12 HKT
Nmap scan report for 192.168.1.7
Host is up (0.000013s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
53/tcp   open  domain
3001/tcp open  nessus
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.19 seconds
`,},

{
id: 'MjVtwzrItfQFJeOFPMIgK',
output: `Command: nmap 192.168.1.7
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-16 20:32 HKT
Nmap scan report for 192.168.1.7
Host is up (0.000010s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
53/tcp   open  domain
3001/tcp open  nessus
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.20 seconds
`,},
]