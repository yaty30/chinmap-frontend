export const pureOutput = [
{
id: '',
output: ``
,},


{
id: 'BuGFZdhNqoMlzRdVfpUmL',
output: `Command: nmap 10.107.208.157 -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 12:53 HKT
Nmap scan report for 10.107.208.157
Host is up (0.000078s latency).
Not shown: 998 closed ports
PORT     STATE SERVICE
3001/tcp open  nessus
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.23 seconds
`,},

{
id: 'ZfnDLPDBeMqkLRQCZaiav',
output: `Command: nmap scanme.nmap.org -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 13:35 HKT
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).
Not shown: 993 closed ports
PORT      STATE    SERVICE
22/tcp    filtered ssh
23/tcp    filtered telnet
80/tcp    open     http
445/tcp   filtered microsoft-ds
515/tcp   filtered printer
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 40.06 seconds
`,},

{
id: 'quRhTSwyFdvdOwxcqBhMT',
output: `Command: nmap 127.0.0.1 -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 15:21 HKT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.000079s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE
631/tcp  open  ipp
3001/tcp open  nessus
3306/tcp open  mysql
5000/tcp open  upnp

Nmap done: 1 IP address (1 host up) scanned in 1.31 seconds
`,},

{
id: 'QltQpoJxkYErQKiPnpomU',
output: `Command: nmap 10.107.208.157   -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 15:29 HKT
Nmap scan report for 10.107.208.157
Host is up (0.013s latency).
Not shown: 998 closed ports
PORT     STATE SERVICE
3001/tcp open  nessus
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.31 seconds
`,},

{
id: 'ZMaQvhOKLtErrzNsWejYd',
output: `Command: nmap 127.0.0.1   -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 15:40 HKT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00012s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
3001/tcp open  nessus
3306/tcp open  mysql
5000/tcp open  upnp

Nmap done: 1 IP address (1 host up) scanned in 0.22 seconds
`,},

{
id: 'euLzVJfJskLutpzmdJybX',
output: `Command: nmap scanme.nmap.org   -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 16:05 HKT
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).
Not shown: 993 closed ports
PORT      STATE    SERVICE
22/tcp    filtered ssh
23/tcp    filtered telnet
80/tcp    open     http
445/tcp   filtered microsoft-ds
515/tcp   filtered printer
9929/tcp  open     nping-echo
31337/tcp open     Elite

Nmap done: 1 IP address (1 host up) scanned in 40.25 seconds
`,},

{
id: 'tSPsoHHfOTYCEwxBrPjOq',
output: `Command: nmap 127.0.0.1 -T4 -A -v  -Pn 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-03 16:07 HKT
NSE: Loaded 153 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 16:07
Completed NSE at 16:07, 0.00s elapsed
Initiating NSE at 16:07
Completed NSE at 16:07, 0.00s elapsed
Initiating NSE at 16:07
Completed NSE at 16:07, 0.00s elapsed
Initiating Ping Scan at 16:07
Scanning 127.0.0.1 [2 ports
Completed Ping Scan at 16:07, 0.00s elapsed (1 total hosts)
Initiating Connect Scan at 16:07
Scanning localhost (127.0.0.1) [1000 ports
Discovered open port 3306/tcp on 127.0.0.1
Discovered open port 3001/tcp on 127.0.0.1
Discovered open port 5000/tcp on 127.0.0.1
Completed Connect Scan at 16:07, 0.08s elapsed (1000 total ports)
Initiating Service scan at 16:07
Scanning 3 services on localhost (127.0.0.1)
Completed Service scan at 16:08, 11.02s elapsed (3 services on 1 host)
NSE: Script scanning 127.0.0.1.
Initiating NSE at 16:08
Completed NSE at 16:08, 0.19s elapsed
Initiating NSE at 16:08
Completed NSE at 16:08, 0.02s elapsed
Initiating NSE at 16:08
Completed NSE at 16:08, 0.00s elapsed
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00021s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE VERSION
3001/tcp open  http    Node.js (Express middleware)
|_http-favicon: Unknown favicon MD5: 19147428D04FC499A4C2FCB0B36377BD
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: ChiNmap
3306/tcp open  mysql   MySQL 8.0.22
| mysql-info: 
|   Protocol: 10
|   Version: 8.0.22
|   Thread ID: 15
|   Capabilities flags: 65535
|   Some Capabilities: SupportsLoadDataLocal, DontAllowDatabaseTableColumn, LongColumnFlag, ConnectWithDatabase, ODBCClient, SupportsTransactions, Support41Auth, Speaks41ProtocolOld, LongPassword, IgnoreSpaceBeforeParenthesis, Speaks41ProtocolNew, SwitchToSSLAfterHandshake, SupportsCompression, IgnoreSigpipes, InteractiveClient, FoundRows, SupportsMultipleResults, SupportsMultipleStatments, SupportsAuthPlugins
|   Status: Autocommit
|   Salt: p!NW
| \x15SREU\x7Fu*Oq\x7F4\x1Bv,
|_  Auth Plugin Name: caching_sha2_password
| ssl-cert: Subject: commonName=MySQL_Server_8.0.22_Auto_Generated_Server_Certificate
| Issuer: commonName=MySQL_Server_8.0.22_Auto_Generated_CA_Certificate
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2020-12-10T05:35:57
| Not valid after:  2030-12-08T05:35:57
| MD5:   2462 bf92 62cc 5570 3e14 3f06 6da9 c3e3
|_SHA-1: 7ab9 c3f1 8132 12a5 ad29 c761 17f7 9649 aa42 7074
|_ssl-date: TLS randomness does not represent time
5000/tcp open  http    Werkzeug httpd 1.0.1 (Python 3.8.3)
|_http-title: 404 Not Found

NSE: Script Post-scanning.
Initiating NSE at 16:08
Completed NSE at 16:08, 0.00s elapsed
Initiating NSE at 16:08
Completed NSE at 16:08, 0.00s elapsed
Initiating NSE at 16:08
Completed NSE at 16:08, 0.00s elapsed
Read data files from: /usr/local/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 12.51 seconds
`,},

{
id: 'slbSwXVOEiEtDablAWrsZ',
output: `Command: nmap 192.168.1.1 -T4 -A -v 
======================================================
Starting Nmap 7.91 ( https://nmap.org ) at 2021-03-04 13:31 HKT
NSE: Loaded 153 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 13:31
Completed NSE at 13:31, 0.00s elapsed
Initiating NSE at 13:31
Completed NSE at 13:31, 0.00s elapsed
Initiating NSE at 13:31
Completed NSE at 13:31, 0.00s elapsed
Initiating Ping Scan at 13:31
Scanning 192.168.1.1 [2 ports]
Completed Ping Scan at 13:31, 0.00s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 13:31
Completed Parallel DNS resolution of 1 host. at 13:31, 0.00s elapsed
Initiating Connect Scan at 13:31
Scanning 192.168.1.1 [1000 ports]
Discovered open port 80/tcp on 192.168.1.1
Discovered open port 53/tcp on 192.168.1.1
Discovered open port 8200/tcp on 192.168.1.1
Discovered open port 20005/tcp on 192.168.1.1
Discovered open port 631/tcp on 192.168.1.1
Discovered open port 5000/tcp on 192.168.1.1
Discovered open port 548/tcp on 192.168.1.1
Completed Connect Scan at 13:31, 1.74s elapsed (1000 total ports)
Initiating Service scan at 13:31
Scanning 7 services on 192.168.1.1
Completed Service scan at 13:34, 156.61s elapsed (7 services on 1 host)
NSE: Script scanning 192.168.1.1.
Initiating NSE at 13:34
Completed NSE at 13:34, 14.39s elapsed
Initiating NSE at 13:34
Completed NSE at 13:34, 8.03s elapsed
Initiating NSE at 13:34
Completed NSE at 13:34, 0.00s elapsed
Nmap scan report for 192.168.1.1
Host is up (0.0019s latency).
Not shown: 993 closed ports
PORT      STATE SERVICE    VERSION
53/tcp    open  domain     dnsmasq 2.78
| dns-nsid: 
|_  bind.version: dnsmasq-2.78
80/tcp    open  tcpwrapped
| http-auth: 
| HTTP/1.0 401 Unauthorized\x0D
|_  Basic realm=NETGEAR R7000
|_http-title: 401 Unauthorized
548/tcp   open  afp        Netatalk 2.2.5 (name: R7000; protocol 3.3)
| afp-serverinfo: 
|   Server Flags: 
|     Flags hex: 0x8f79
|     Super Client: true
|     UUIDs: true
|     UTF8 Server Name: true
|     Open Directory: true
|     Reconnect: false
|     Server Notifications: true
|     TCP/IP: true
|     Server Signature: true
|     Server Messages: true
|     Password Saving Prohibited: false
|     Password Changing: false
|     Copy File: true
|   Server Name: R7000
|   Machine Type: Netatalk2.2.5
|   AFP Versions: AFP2.2, AFPX03, AFP3.1, AFP3.2, AFP3.3
|   UAMs: DHX2, 2-Way Randnum exchange, Randnum exchange, DHCAST128, Cleartxt Passwrd, No User Authent
|   Server Signature: c8230d4020b52001b8bd834720f8cc3d
|   Network Addresses: 
|     192.168.1.1
|_  UTF8 Server Name: R7000
631/tcp   open  ipp?
5000/tcp  open  tcpwrapped
8200/tcp  open  tcpwrapped
20005/tcp open  btx?
Service Info: OS: Unix

NSE: Script Post-scanning.
Initiating NSE at 13:34
Completed NSE at 13:34, 0.00s elapsed
Initiating NSE at 13:34
Completed NSE at 13:34, 0.00s elapsed
Initiating NSE at 13:34
Completed NSE at 13:34, 0.00s elapsed
Read data files from: /usr/local/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 181.62 seconds
`,},
]