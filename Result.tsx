export const pureOutput = [`Command: nmap -A scanme.nmap.org
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-11 19:15 HKT
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
|_http-server-header: Apache/2.4.7 (Ubuntu)
|_http-title: Go ahead and ScanMe!
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
3372/tcp  filtered msdtc
9929/tcp  open     nping-echo   Nping echo
31337/tcp open     tcpwrapped
Aggressive OS guesses: Linux 2.6.32 (96%), Linux 2.6.32 or 3.10 (96%), Linux 4.4 (96%), Linux 2.6.32 - 2.6.35 (94%), Linux 2.6.32 - 2.6.39 (94%), Linux 4.0 (93%), Linux 2.6.32 - 3.0 (93%), Linux 3.11 - 4.1 (92%), Linux 3.2 - 3.8 (92%), Linux 5.0 - 5.4 (92%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 11 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 443/tcp)
HOP RTT       ADDRESS
1   1.87 ms   192.168.1.1
2   7.75 ms   203185042001.res.dyn.ctinets.com (203.185.42.1)
3   4.90 ms   10.239.77.5
4   3.90 ms   014199254133.ctinets.com (14.199.254.133)
5   4.99 ms   061244225101.ctinets.com (61.244.225.101)
6   3.98 ms   hnk-b2-link.telia.net (62.115.146.52)
7   53.92 ms  tky-b1-link.ip.twelve99.net (62.115.143.61)
8   159.90 ms sjo-b21-link.ip.twelve99.net (62.115.123.140)
9   159.99 ms linode-ic-342731-sjo-b21.c.telia.net (62.115.172.133)
10  160.44 ms 173.230.159.69
11  155.47 ms scanme.nmap.org (45.33.32.156)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 57.90 seconds
`]