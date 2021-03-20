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
id: 'AKzWlggrLgUUrjEfnERVC',
output: `Command: sudo nmap scanme.nmap.org -T4 -F 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-21 02:10 HKT
Initiating Ping Scan at 02:10
Scanning scanme.nmap.org (45.33.32.156) [4 ports]
Completed Ping Scan at 02:10, 0.16s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 02:10
Completed Parallel DNS resolution of 1 host. at 02:10, 0.01s elapsed
Initiating SYN Stealth Scan at 02:10
Scanning scanme.nmap.org (45.33.32.156) [100 ports]
Discovered open port 22/tcp on 45.33.32.156
Discovered open port 80/tcp on 45.33.32.156
Completed SYN Stealth Scan at 02:10, 3.32s elapsed (100 total ports)
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up, received echo-reply ttl 51 (0.16s latency).
Scanned at 2021-03-21 02:10:34 HKT for 3s
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
Nmap done: 1 IP address (1 host up) scanned in 3.69 seconds
           Raw packets sent: 114 (4.992KB) | Rcvd: 98 (3.916KB)
`,},
]