export const cveScanOutput = [
    {
        scanId: '',
        output: ``
    },

{
scanId: 'DoenReAakbRfvsWtPluem',
output:`
Starting Nmap 7.91 ( https://nmap.org ) at 2021-02-24 13:17 �Dx�D_?D�PCRE?!
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.16s latency).
Not shown: 991 closed ports
PORT      STATE    SERVICE      VERSION
22/tcp    open     ssh          OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)
| vulscan: VulDB - https://vuldb.com:
| [12724] OpenSSH up to 6.6 Fingerprint Record Check sshconnect.c verify_host_key HostCertificate weak authentication
| 
| MITRE CVE - https://cve.mitre.org:
| [CVE-2012-5975] The SSH USERAUTH CHANGE REQUEST feature in SSH Tectia Server 6.0.4 through 6.0.20, 6.1.0 through 6.1.12, 6.2.0 through 6.2.5, and 6.3.0 through 6.3.2 on UNIX and Linux, when old-style password authentication is enabled, allows remote attackers to bypass authentication via a crafted session involving entry of blank passwords, as demonstrated by a root login session from a modified OpenSSH client with an added input_userauth_passwd_changereq call in sshconnect2.c.
| [CVE-2012-5536] A certain Red Hat build of the pam_ssh_agent_auth module on Red Hat Enterprise Linux (RHEL) 6 and Fedora Rawhide calls the glibc error function instead of the error function in the OpenSSH codebase, which allows local users to obtain sensitive information from process memory or possibly gain privileges via crafted use of an application that relies on this module, as demonstrated by su and sudo.
| [CVE-2010-5107] The default configuration of OpenSSH through 6.1 enforces a fixed time limit between establishing a TCP connection and completing a login, which makes it easier for remote attackers to cause a denial of service (connection-slot exhaustion) by periodically making many new TCP connections.
| [CVE-2008-1483] OpenSSH 4.3p2, and probably other versions, allows local users to hijack forwarded X connections by causing ssh to set DISPLAY to :10, even when another process is listening on the associated port, as demonstrated by opening TCP port 6010 (IPv4) and sniffing a cookie sent by Emacs.
| [CVE-2007-3102] Unspecified vulnerability in the linux_audit_record_event function in OpenSSH 4.3p2, as used on Fedora Core 6 and possibly other systems, allows remote attackers to write arbitrary characters to an audit log via a crafted username.  NOTE: some of these details are obtained from third party information.
| [CVE-2004-2414] Novell NetWare 6.5 SP 1.1, when installing or upgrading using the Overlay CDs and performing a custom installation with OpenSSH, includes sensitive password information in the (1) NIOUTPUT.TXT and (2) NI.LOG log files, which might allow local users to obtain the passwords.
| 
| SecurityFocus - https://www.securityfocus.com/bid/:
| [102780] OpenSSH CVE-2016-10708 Multiple Denial of Service Vulnerabilities
| [101552] OpenSSH 'sftp-server.c' Remote Security Bypass Vulnerability
| [94977] OpenSSH CVE-2016-10011 Local Information Disclosure Vulnerability
| [94975] OpenSSH CVE-2016-10012 Security Bypass Vulnerability
| [94972] OpenSSH CVE-2016-10010 Privilege Escalation Vulnerability
| [94968] OpenSSH CVE-2016-10009 Remote Code Execution Vulnerability
| [93776] OpenSSH 'ssh/kex.c' Denial of Service Vulnerability
| [92212] OpenSSH CVE-2016-6515 Denial of Service Vulnerability
| [92210] OpenSSH CBC Padding Weak Encryption Security Weakness
| [92209] OpenSSH MAC Verification Security Bypass Vulnerability
| [91812] OpenSSH CVE-2016-6210 User Enumeration Vulnerability
| [90440] OpenSSH CVE-2004-1653 Remote Security Vulnerability
| [90340] OpenSSH CVE-2004-2760 Remote Security Vulnerability
| [89385] OpenSSH CVE-2005-2666 Local Security Vulnerability
| [88655] OpenSSH CVE-2001-1382 Remote Security Vulnerability
| [88513] OpenSSH CVE-2000-0999 Remote Security Vulnerability
| [88367] OpenSSH CVE-1999-1010 Local Security Vulnerability
| [87789] OpenSSH CVE-2003-0682 Remote Security Vulnerability
| [86187] OpenSSH 'session.c' Local Security Bypass Vulnerability
| [86144] OpenSSH CVE-2007-2768 Remote Security Vulnerability
| [84427] OpenSSH CVE-2016-1908 Security Bypass Vulnerability
| [84314] OpenSSH CVE-2016-3115 Remote Command Injection Vulnerability
| [84185] OpenSSH CVE-2006-4925 Denial-Of-Service Vulnerability
| [81293] OpenSSH CVE-2016-1907 Denial of Service Vulnerability
| [80698] OpenSSH CVE-2016-0778 Heap Based Buffer Overflow Vulnerability
| [80695] OpenSSH CVE-2016-0777 Information Disclosure Vulnerability
| [76497] OpenSSH CVE-2015-6565 Local Security Bypass Vulnerability
| [76317] OpenSSH PAM Support Multiple Remote Code Execution Vulnerabilities
| [75990] OpenSSH Login Handling Security Bypass Weakness
| [75525] OpenSSH 'x11_open_helper()' Function Security Bypass Vulnerability
| [71420] Portable OpenSSH 'gss-serv-krb5.c' Security Bypass Vulnerability
| [68757] OpenSSH Multiple Remote Denial of Service Vulnerabilities
| [66459] OpenSSH Certificate Validation Security Bypass Vulnerability
| [66355] OpenSSH 'child_set_env()' Function Security Bypass Vulnerability
| [65674] OpenSSH 'ssh-keysign.c' Local Information Disclosure Vulnerability
| [65230] OpenSSH 'schnorr.c' Remote Memory Corruption Vulnerability
| [63605] OpenSSH 'sshd' Process Remote Memory Corruption Vulnerability
| [61286] OpenSSH Remote Denial of Service Vulnerability
| [58894] GSI-OpenSSH PAM_USER Security Bypass Vulnerability
| [58162] OpenSSH CVE-2010-5107 Denial of Service Vulnerability
| [54114] OpenSSH 'ssh_gssapi_parse_ename()' Function Denial of Service Vulnerability
| [51702] Debian openssh-server Forced Command Handling Information Disclosure Vulnerability
| [50416] Linux Kernel 'kdump' and 'mkdumprd' OpenSSH Integration Remote Information Disclosure Vulnerability
| [49473] OpenSSH Ciphersuite Specification Information Disclosure Weakness
| [48507] OpenSSH 'pam_thread()' Remote Buffer Overflow Vulnerability
| [47691] Portable OpenSSH 'ssh-keysign' Local Unauthorized Access Vulnerability
| [46155] OpenSSH Legacy Certificate Signing Information Disclosure Vulnerability
| [45304] OpenSSH J-PAKE Security Bypass Vulnerability
| [36552] Red Hat Enterprise Linux OpenSSH 'ChrootDirectory' Option Local Privilege Escalation Vulnerability
| [32319] OpenSSH CBC Mode Information Disclosure Vulnerability
| [30794] Red Hat OpenSSH Backdoor Vulnerability
| [30339] OpenSSH 'X11UseLocalhost' X11 Forwarding Session Hijacking Vulnerability
| [30276] Debian OpenSSH SELinux Privilege Escalation Vulnerability
| [28531] OpenSSH ForceCommand Command Execution Weakness
| [28444] OpenSSH X Connections Session Hijacking Vulnerability
| [26097] OpenSSH LINUX_AUDIT_RECORD_EVENT Remote Log Injection Weakness
| [25628] OpenSSH X11 Cookie Local Authentication Bypass Vulnerability
| [23601] OpenSSH S/Key Remote Information Disclosure Vulnerability
| [20956] OpenSSH Privilege Separation Key Signature Weakness
| [20418] OpenSSH-Portable Existing Password Remote Information Disclosure Weakness
| [20245] OpenSSH-Portable GSSAPI Authentication Abort Information Disclosure Weakness
| [20241] Portable OpenSSH GSSAPI Remote Code Execution Vulnerability
| [20216] OpenSSH Duplicated Block Remote Denial of Service Vulnerability
| [16892] OpenSSH Remote PAM Denial Of Service Vulnerability
| [14963] OpenSSH LoginGraceTime Remote Denial Of Service Vulnerability
| [14729] OpenSSH GSSAPI Credential Disclosure Vulnerability
| [14727] OpenSSH DynamicForward Inadvertent GatewayPorts Activation Vulnerability
| [11781] OpenSSH-portable PAM Authentication Remote Information Disclosure Vulnerability
| [9986] RCP, OpenSSH SCP Client File Corruption Vulnerability
| [9040] OpenSSH PAM Conversation Memory Scrubbing Weakness
| [8677] Multiple Portable OpenSSH PAM Vulnerabilities
| [8628] OpenSSH Buffer Mismanagement Vulnerabilities
| [7831] OpenSSH Reverse DNS Lookup Access Control Bypass Vulnerability
| [7482] OpenSSH Remote Root Authentication Timing Side-Channel Weakness
| [7467] OpenSSH-portable Enabled PAM Delay Information Disclosure Vulnerability
| [7343] OpenSSH Authentication Execution Path Timing Information Leakage Weakness
| [6168] OpenSSH Visible Password Vulnerability
| [5374] OpenSSH Trojan Horse Vulnerability
| [5093] OpenSSH Challenge-Response Buffer Overflow Vulnerabilities
| [4560] OpenSSH Kerberos 4 TGT/AFS Token Buffer Overflow Vulnerability
| [4241] OpenSSH Channel Code Off-By-One Vulnerability
| [3614] OpenSSH UseLogin Environment Variable Passing Vulnerability
| [3560] OpenSSH Kerberos Arbitrary Privilege Elevation Vulnerability
| [3369] OpenSSH Key Based Source IP Access Control Bypass Vulnerability
| [3345] OpenSSH SFTP Command Restriction Bypassing Vulnerability
| [2917] OpenSSH PAM Session Evasion Vulnerability
| [2825] OpenSSH Client X11 Forwarding Cookie Removal File Symbolic Link Vulnerability
| [2356] OpenSSH Private Key Authentication Check Vulnerability
| [1949] OpenSSH Client Unauthorized Remote Forwarding Vulnerability
| [1334] OpenSSH UseLogin Vulnerability
| 
| IBM X-Force - https://exchange.xforce.ibmcloud.com:
| [83258] GSI-OpenSSH auth-pam.c security bypass
| [82781] OpenSSH time limit denial of service
| [82231] OpenSSH pam_ssh_agent_auth PAM code execution
| [74809] OpenSSH ssh_gssapi_parse_ename denial of service
| [72756] Debian openssh-server commands information disclosure
| [68339] OpenSSH pam_thread buffer overflow
| [67264] OpenSSH ssh-keysign unauthorized access
| [65910] OpenSSH remote_glob function denial of service
| [65163] OpenSSH certificate information disclosure
| [64387] OpenSSH J-PAKE security bypass
| [63337] Cisco Unified Videoconferencing OpenSSH weak security
| [46620] OpenSSH and multiple SSH Tectia products CBC mode information disclosure
| [45202] OpenSSH signal handler denial of service
| [44747] RHEL OpenSSH backdoor
| [44280] OpenSSH PermitRootLogin information disclosure
| [44279] OpenSSH sshd weak security
| [44037] OpenSSH sshd SELinux role unauthorized access
| [43940] OpenSSH X11 forwarding information disclosure
| [41549] OpenSSH ForceCommand directive security bypass
| [41438] OpenSSH sshd session hijacking
| [40897] OpenSSH known_hosts weak security
| [40587] OpenSSH username weak security
| [37371] OpenSSH username data manipulation
| [37118] RHSA update for OpenSSH privilege separation monitor authentication verification weakness not installed
| [37112] RHSA update for OpenSSH signal handler race condition not installed
| [37107] RHSA update for OpenSSH identical block denial of service not installed
| [36637] OpenSSH X11 cookie privilege escalation
| [35167] OpenSSH packet.c newkeys[mode] denial of service
| [34490] OpenSSH OPIE information disclosure
| [33794] OpenSSH ChallengeResponseAuthentication information disclosure
| [32975] Apple Mac OS X OpenSSH denial of service
| [32387] RHSA-2006:0738 updates for openssh not installed
| [32359] RHSA-2006:0697 updates for openssh not installed
| [32230] RHSA-2006:0298 updates for openssh not installed
| [32132] RHSA-2006:0044 updates for openssh not installed
| [30120] OpenSSH privilege separation monitor authentication verification weakness
| [29255] OpenSSH GSSAPI user enumeration
| [29254] OpenSSH signal handler race condition
| [29158] OpenSSH identical block denial of service
| [28147] Apple Mac OS X OpenSSH nonexistent user login denial of service
| [25116] OpenSSH OpenPAM denial of service
| [24305] OpenSSH SCP shell expansion command execution
| [22665] RHSA-2005:106 updates for openssh not installed
| [22117] OpenSSH GSSAPI allows elevated privileges
| [22115] OpenSSH GatewayPorts security bypass
| [20930] OpenSSH sshd.c LoginGraceTime denial of service
| [19441] Sun Solaris OpenSSH LDAP (1) client authentication denial of service
| [17213] OpenSSH allows port bouncing attacks
| [16323] OpenSSH scp file overwrite
| [13797] OpenSSH PAM information leak
| [13271] OpenSSH could allow an attacker to corrupt the PAM conversion stack
| [13264] OpenSSH PAM code could allow an attacker to gain access
| [13215] OpenSSH buffer management errors could allow an attacker to execute code
| [13214] OpenSSH memory vulnerabilities
| [13191] OpenSSH large packet buffer overflow
| [12196] OpenSSH could allow an attacker to bypass login restrictions
| [11970] OpenSSH could allow an attacker to obtain valid administrative account
| [11902] OpenSSH PAM support enabled information leak
| [9803] OpenSSH &quot
| [9763] OpenSSH downloaded from the OpenBSD FTP site or OpenBSD FTP mirror sites could contain a Trojan Horse
| [9307] OpenSSH is running on the system
| [9169] OpenSSH &quot
| [8896] OpenSSH Kerberos 4 TGT/AFS buffer overflow
| [8697] FreeBSD libutil in OpenSSH fails to drop privileges prior to using the login class capability database
| [8383] OpenSSH off-by-one error in channel code
| [7647] OpenSSH UseLogin option arbitrary code execution
| [7634] OpenSSH using sftp and restricted keypairs could allow an attacker to bypass restrictions
| [7598] OpenSSH with Kerberos allows attacker to gain elevated privileges
| [7179] OpenSSH source IP access control bypass
| [6757] OpenSSH &quot
| [6676] OpenSSH X11 forwarding symlink attack could allow deletion of arbitrary files
| [6084] OpenSSH 2.3.1 allows remote users to bypass authentication
| [5517] OpenSSH allows unauthorized access to resources
| [4646] OpenSSH UseLogin option allows remote users to execute commands as root
| 
| Exploit-DB - https://www.exploit-db.com:
| [14866] Novell Netware 6.5 - OpenSSH Remote Stack Overflow
| 
| OpenVAS (Nessus) - http://www.openvas.org:
| [902488] OpenSSH 'sshd' GSSAPI Credential Disclosure Vulnerability
| [900179] OpenSSH CBC Mode Information Disclosure Vulnerability
| [881183] CentOS Update for openssh CESA-2012:0884 centos6 
| [880802] CentOS Update for openssh CESA-2009:1287 centos5 i386
| [880746] CentOS Update for openssh CESA-2009:1470 centos5 i386
| [870763] RedHat Update for openssh RHSA-2012:0884-04
| [870129] RedHat Update for openssh RHSA-2008:0855-01
| [861813] Fedora Update for openssh FEDORA-2010-5429
| [861319] Fedora Update for openssh FEDORA-2007-395
| [861170] Fedora Update for openssh FEDORA-2007-394
| [861012] Fedora Update for openssh FEDORA-2007-715
| [840345] Ubuntu Update for openssh vulnerability USN-597-1
| [840300] Ubuntu Update for openssh update USN-612-5
| [840271] Ubuntu Update for openssh vulnerability USN-612-2
| [840268] Ubuntu Update for openssh update USN-612-7
| [840259] Ubuntu Update for openssh vulnerabilities USN-649-1
| [840214] Ubuntu Update for openssh vulnerability USN-566-1
| [831074] Mandriva Update for openssh MDVA-2010:162 (openssh)
| [830929] Mandriva Update for openssh MDVA-2010:090 (openssh)
| [830807] Mandriva Update for openssh MDVA-2010:026 (openssh)
| [830603] Mandriva Update for openssh MDVSA-2008:098 (openssh)
| [830523] Mandriva Update for openssh MDVSA-2008:078 (openssh)
| [830317] Mandriva Update for openssh-askpass-qt MDKA-2007:127 (openssh-askpass-qt)
| [830191] Mandriva Update for openssh MDKSA-2007:236 (openssh)
| [802407] OpenSSH 'sshd' Challenge Response Authentication Buffer Overflow Vulnerability
| [103503] openssh-server Forced Command Handling Information Disclosure Vulnerability
| [103247] OpenSSH Ciphersuite Specification Information Disclosure Weakness
| [103064] OpenSSH Legacy Certificate Signing Information Disclosure Vulnerability
| [100584] OpenSSH X Connections Session Hijacking Vulnerability
| [100153] OpenSSH CBC Mode Information Disclosure Vulnerability
| [66170] CentOS Security Advisory CESA-2009:1470 (openssh)
| [65987] SLES10: Security update for OpenSSH
| [65819] SLES10: Security update for OpenSSH
| [65514] SLES9: Security update for OpenSSH
| [65513] SLES9: Security update for OpenSSH
| [65334] SLES9: Security update for OpenSSH
| [65248] SLES9: Security update for OpenSSH
| [65218] SLES9: Security update for OpenSSH
| [65169] SLES9: Security update for openssh,openssh-askpass
| [65126] SLES9: Security update for OpenSSH
| [65019] SLES9: Security update for OpenSSH
| [65015] SLES9: Security update for OpenSSH
| [64931] CentOS Security Advisory CESA-2009:1287 (openssh)
| [61639] Debian Security Advisory DSA 1638-1 (openssh)
| [61030] Debian Security Advisory DSA 1576-2 (openssh)
| [61029] Debian Security Advisory DSA 1576-1 (openssh)
| [60840] FreeBSD Security Advisory (FreeBSD-SA-08:05.openssh.asc)
| [60803] Gentoo Security Advisory GLSA 200804-03 (openssh)
| [60667] Slackware Advisory SSA:2008-095-01 openssh 
| [59014] Slackware Advisory SSA:2007-255-01 openssh 
| [58741] Gentoo Security Advisory GLSA 200711-02 (openssh)
| [57919] Gentoo Security Advisory GLSA 200611-06 (openssh)
| [57895] Gentoo Security Advisory GLSA 200609-17 (openssh)
| [57585] Debian Security Advisory DSA 1212-1 (openssh (1:3.8.1p1-8.sarge.6))
| [57492] Slackware Advisory SSA:2006-272-02 openssh 
| [57483] Debian Security Advisory DSA 1189-1 (openssh-krb5)
| [57476] FreeBSD Security Advisory (FreeBSD-SA-06:22.openssh.asc)
| [57470] FreeBSD Ports: openssh
| [56352] FreeBSD Security Advisory (FreeBSD-SA-06:09.openssh.asc)
| [56330] Gentoo Security Advisory GLSA 200602-11 (OpenSSH)
| [56294] Slackware Advisory SSA:2006-045-06 openssh 
| [53964] Slackware Advisory SSA:2003-266-01 New OpenSSH packages 
| [53885] Slackware Advisory SSA:2003-259-01 OpenSSH Security Advisory 
| [53884] Slackware Advisory SSA:2003-260-01 OpenSSH updated again 
| [53788] Debian Security Advisory DSA 025-1 (openssh)
| [52638] FreeBSD Security Advisory (FreeBSD-SA-03:15.openssh.asc)
| [52635] FreeBSD Security Advisory (FreeBSD-SA-03:12.openssh.asc)
| [11343] OpenSSH Client Unauthorized Remote Forwarding
| [10954] OpenSSH AFS/Kerberos ticket/token passing
| [10883] OpenSSH Channel Code Off by 1
| [10823] OpenSSH UseLogin Environment Variables
| 
| SecurityTracker - https://www.securitytracker.com:
| [1028187] OpenSSH pam_ssh_agent_auth Module on Red Hat Enterprise Linux Lets Remote Users Execute Arbitrary Code
| [1026593] OpenSSH Lets Remote Authenticated Users Obtain Potentially Sensitive Information
| [1025739] OpenSSH on FreeBSD Has Buffer Overflow in pam_thread() That Lets Remote Users Execute Arbitrary Code
| [1025482] OpenSSH ssh-keysign Utility Lets Local Users Gain Elevated Privileges
| [1025028] OpenSSH Legacy Certificates May Disclose Stack Contents to Remote Users
| [1022967] OpenSSH on Red Hat Enterprise Linux Lets Remote Authenticated Users Gain Elevated Privileges
| [1021235] OpenSSH CBC Mode Error Handling May Let Certain Remote Users Obtain Plain Text in Certain Cases
| [1020891] OpenSSH on Debian Lets Remote Users Prevent Logins
| [1020730] OpenSSH for Red Hat Enterprise Linux Packages May Have Been Compromised
| [1020537] OpenSSH on HP-UX Lets Local Users Hijack X11 Sessions
| [1019733] OpenSSH Unsafe Default Configuration May Let Local Users Execute Arbitrary Commands
| [1019707] OpenSSH Lets Local Users Hijack Forwarded X Sessions in Certain Cases
| [1017756] Apple OpenSSH Key Generation Process Lets Remote Users Deny Service
| [1017183] OpenSSH Privilege Separation Monitor Validation Error May Cause the Monitor to Fail to Properly Control the Unprivileged Process
| [1016940] OpenSSH Race Condition in Signal Handler Lets Remote Users Deny Service and May Potentially Permit Code Execution
| [1016939] OpenSSH GSSAPI Authentication Abort Error Lets Remote Users Determine Valid Usernames
| [1016931] OpenSSH SSH v1 CRC Attack Detection Implementation Lets Remote Users Deny Service
| [1016672] OpenSSH on Mac OS X Lets Remote Users Deny Service
| [1015706] OpenSSH Interaction With OpenPAM Lets Remote Users Deny Service
| [1015540] OpenSSH scp Double Shell Character Expansion During Local-to-Local Copying May Let Local Users Gain Elevated Privileges in Certain Cases
| [1014845] OpenSSH May Unexpectedly Activate GatewayPorts and Also May Disclose GSSAPI Credentials in Certain Cases
| [1011193] OpenSSH scp Directory Traversal Flaw Lets Remote SSH Servers Overwrite Files in Certain Cases
| [1011143] OpenSSH Default Configuration May Be Unsafe When Used With Anonymous SSH Services
| [1007791] Portable OpenSSH PAM free() Bug May Let Remote Users Execute Root Code
| [1007716] OpenSSH buffer_append_space() and Other Buffer Management Errors May Let Remote Users Execute Arbitrary Code
| [1006926] OpenSSH Host Access Restrictions Can Be Bypassed By Remote Users
| [1006688] OpenSSH Timing Flaw With Pluggable Authentication Modules Can Disclose Valid User Account Names to Remote Users
| [1004818] OpenSSH's Secure Shell (SSH) Implementation Weakness May Disclose User Passwords to Remote Users During Man-in-the-Middle Attacks
| [1004616] OpenSSH Integer Overflow and Buffer Overflow May Allow Remote Users to Gain Root Access to the System
| [1004391] OpenSSH 'BSD_AUTH' Access Control Bug May Allow Unauthorized Remote Users to Authenticated to the System
| [1004115] OpenSSH Buffer Overflow in Kerberos Ticket and AFS Token Processing Lets Local Users Execute Arbitrary Code With Root Level Permissions
| [1003758] OpenSSH Off-by-one 'Channels' Bug May Let Authorized Remote Users Execute Arbitrary Code with Root Privileges
| [1002895] OpenSSH UseLogin Environment Variable Bug Lets Local Users Execute Commands and Gain Root Access
| [1002748] OpenSSH 3.0 Denial of Service Condition May Allow Remote Users to Crash the sshd Daemon and KerberosV Configuration Error May Allow Remote Users to Partially Authenticate When Authentication Should Not Be Permitted
| [1002734] OpenSSH's S/Key Implementation Information Disclosure Flaw Provides Remote Users With Information About Valid User Accounts
| [1002455] OpenSSH May Fail to Properly Restrict IP Addresses in Certain Configurations
| [1002432] OpenSSH's Sftp-server Subsystem Lets Authorized Remote Users with Restricted Keypairs Obtain Additional Access on the Server
| [1001683] OpenSSH Allows Authorized Users to Delete Other User Files Named Cookies
| 
| OSVDB - http://www.osvdb.org:
| [92034] GSI-OpenSSH auth-pam.c Memory Management Authentication Bypass
| [90474] Red Hat / Fedora PAM Module for OpenSSH Incorrect error() Function Calling Local Privilege Escalation
| [90007] OpenSSH logingracetime / maxstartup Threshold Connection Saturation Remote DoS
| [81500] OpenSSH gss-serv.c ssh_gssapi_parse_ename Function Field Length Value Parsing Remote DoS
| [78706] OpenSSH auth-options.c sshd auth_parse_options Function authorized_keys Command Option Debug Message Information Disclosure
| [75753] OpenSSH PAM Module Aborted Conversation Local Information Disclosure
| [75249] OpenSSH sftp-glob.c remote_glob Function Glob Expression Parsing Remote DoS
| [75248] OpenSSH sftp.c process_put Function Glob Expression Parsing Remote DoS
| [72183] Portable OpenSSH ssh-keysign ssh-rand-helper Utility File Descriptor Leak Local Information Disclosure
| [70873] OpenSSH Legacy Certificates Stack Memory Disclosure
| [69658] OpenSSH J-PAKE Public Parameter Validation Shared Secret Authentication Bypass
| [67743] Novell NetWare OpenSSH SSHD.NLM Absolute Path Handling Remote Overflow
| [59353] OpenSSH sshd Local TCP Redirection Connection Masking Weakness
| [58495] OpenSSH sshd ChrootDirectory Feature SetUID Hard Link Local Privilege Escalation
| [56921] OpenSSH Unspecified Remote Compromise
| [53021] OpenSSH on ftp.openbsd.org Trojaned Distribution
| [50036] OpenSSH CBC Mode Chosen Ciphertext 32-bit Chunk Plaintext Context Disclosure
| [49386] OpenSSH sshd TCP Connection State Remote Account Enumeration
| [48791] OpenSSH on Debian sshd Crafted Username Arbitrary Remote SELinux Role Access
| [47635] OpenSSH Packages on Red Hat Enterprise Linux Compromised Distribution
| [47227] OpenSSH X11UseLocalhost X11 Forwarding Port Hijacking
| [45873] Cisco WebNS SSHield w/ OpenSSH Crafted Large Packet Remote DoS
| [43911] OpenSSH ~/.ssh/rc ForceCommand Bypass Arbitrary Command Execution
| [43745] OpenSSH X11 Forwarding Local Session Hijacking
| [43371] OpenSSH Trusted X11 Cookie Connection Policy Bypass
| [39214] OpenSSH linux_audit_record_event Crafted Username Audit Log Injection
| [37315] pam_usb OpenSSH Authentication Unspecified Issue
| [34850] OpenSSH on Mac OS X Key Generation Remote Connection DoS
| [34601] OPIE w/ OpenSSH Account Enumeration
| [34600] OpenSSH S/KEY Authentication Account Enumeration
| [32721] OpenSSH Username Password Complexity Account Enumeration
| [30232] OpenSSH Privilege Separation Monitor Weakness
| [29494] OpenSSH packet.c Invalid Protocol Sequence Remote DoS
| [29266] OpenSSH GSSAPI Authentication Abort Username Enumeration
| [29264] OpenSSH Signal Handler Pre-authentication Race Condition Code Execution
| [29152] OpenSSH Identical Block Packet DoS
| [27745] Apple Mac OS X OpenSSH Nonexistent Account Login Enumeration DoS
| [23797] OpenSSH with OpenPAM Connection Saturation Forked Process Saturation DoS
| [22692] OpenSSH scp Command Line Filename Processing Command Injection
| [20216] OpenSSH with KerberosV Remote Authentication Bypass
| [19142] OpenSSH Multiple X11 Channel Forwarding Leaks
| [19141] OpenSSH GSSAPIAuthentication Credential Escalation
| [18236] OpenSSH no pty Command Execution Local PAM Restriction Bypass
| [16567] OpenSSH Privilege Separation LoginGraceTime DoS
| [16039] Solaris 108994 Series Patch OpenSSH LDAP Client Authentication DoS
| [9562] OpenSSH Default Configuration Anon SSH Service Port Bounce Weakness
| [9550] OpenSSH scp Traversal Arbitrary File Overwrite
| [6601] OpenSSH *realloc() Unspecified Memory Errors
| [6245] OpenSSH SKEY/BSD_AUTH Challenge-Response Remote Overflow
| [6073] OpenSSH on FreeBSD libutil Arbitrary File Read
| [6072] OpenSSH PAM Conversation Function Stack Modification
| [6071] OpenSSH SSHv1 PAM Challenge-Response Authentication Privilege Escalation
| [5536] OpenSSH sftp-server Restricted Keypair Restriction Bypass
| [5408] OpenSSH echo simulation Information Disclosure
| [5113] OpenSSH NIS YP Netgroups Authentication Bypass
| [4536] OpenSSH Portable AIX linker Privilege Escalation
| [3938] OpenSSL and OpenSSH /dev/random Check Failure
| [3456] OpenSSH buffer_append_space() Heap Corruption
| [2557] OpenSSH Multiple Buffer Management Multiple Overflows
| [2140] OpenSSH w/ PAM Username Validity Timing Attack
| [2112] OpenSSH Reverse DNS Lookup Bypass
| [2109] OpenSSH sshd Root Login Timing Side-Channel Weakness
| [1853] OpenSSH Symbolic Link 'cookies' File Removal
| [839] OpenSSH PAMAuthenticationViaKbdInt Challenge-Response Remote Overflow
| [781] OpenSSH Kerberos TGT/AFS Token Passing Remote Overflow
| [730] OpenSSH Channel Code Off by One Remote Privilege Escalation
| [688] OpenSSH UseLogin Environment Variable Local Command Execution
| [642] OpenSSH Multiple Key Type ACL Bypass
| [504] OpenSSH SSHv2 Public Key Authentication Bypass
| [341] OpenSSH UseLogin Local Privilege Escalation
|_
25/tcp    filtered smtp
80/tcp    open     http         Apache httpd 2.4.7 ((Ubuntu))
|_http-server-header: Apache/2.4.7 (Ubuntu)
| vulscan: VulDB - https://vuldb.com:
| [76733] Apache HTTP Server 2.4.7/2.4.8/2.4.9/2.4.10/2.4.12 ap_some_auth_required unknown vulnerability
| [76732] Apache HTTP Server 2.4.7/2.4.8/2.4.9/2.4.10/2.4.12 Request apr_brigade_flatten privilege escalation
| [12667] Apache HTTP Server 2.4.7 mod_log_config.c log_cookie denial of service
| [62417] Apache CXF 2.4.7/2.4.8/2.5.3/2.5.4/2.6.1 spoofing
| [152664] Apache HTTP Server up to 2.4.41 mod_rewrite Request privilege escalation
| [152665] Apache HTTP Server up to 2.4.41 mod_proxy_ftp Uninitialized Memory memory corruption
| [142325] Apache HTTP Server up to 2.4.39 mod_remoteip Stack-based memory corruption
| [142324] Apache HTTP Server up to 2.4.39 mod_proxy cross site scripting
| [142323] Apache HTTP Server up to 2.4.39 HTTP2 Session memory corruption
| [142187] Apache HTTP Server up to 2.4.39 mod_rewrite Newline Open Redirect
| [136374] Apache HTTP Server up to 2.4.38 Slash Regular Expression unknown vulnerability
| [136373] Apache HTTP Server 2.4.34/2.4.35/2.4.36/2.4.37/2.4.38 HTTP2 Request Crash denial of service
| [136372] Apache HTTP Server up to 2.4.38 HTTP2 Request unknown vulnerability
| [133112] Apache HTTP Server up to 2.4.38 mod_auth_digest race condition privilege escalation
| [133111] Apache HTTP Server 2.4.37/2.4.38 mod_ssl Bypass privilege escalation
| [130341] Apache HTTP Server 2.4.37 mod_ssl Loop denial of service
| [130330] Apache HTTP Server up to 2.4.37 mod_session Expired privilege escalation
| [130329] Apache HTTP Server 2.4.37 mod_http2 Slowloris denial of service
| [124447] Apache HTTP Server up to 2.4.34 SETTINGS Frame denial of service
| [121910] Apache HTTP Server 2.4.33 mod_md HTTP Requests denial of service
| [122569] Apache HTTP Server up to 2.4.33 HTTP2 Request denial of service
| [115061] Apache HTTP Server up to 2.4.29 HTTP Digest Authentication Challenge HTTP Requests Replay privilege escalation
| [115060] Apache HTTP Server up to 2.4.29 mod_cache_socache Request Header Crash denial of service
| [115059] Apache HTTP Server up to 2.4.29 HTTP2 NULL Pointer Dereference denial of service
| [115058] Apache HTTP Server up to 2.4.29 HTTP Header Crash denial of service
| [115057] Apache HTTP Server up to 2.4.29 mod_session Variable Name Cache privilege escalation
| [115039] Apache HTTP Server up to 2.4.29 FilesMatch File Upload privilege escalation
| [114258] Apache HTTP Server up to 2.4.22 mod_cluster Segmentation Fault denial of service
| [108069] Oracle Endeca Information Discovery Integrator 2.4/3.0/3.1/3.2 Apache Commons Collections memory corruption
| [104986] Apache CXF 2.4.5/2.5.1 WS-SP UsernameToken Policy SOAP Request weak authentication
| [103521] Apache HTTP Server 2.4.26 HTTP2 Free memory corruption
| [94627] Apache HTTP Server up to 2.4.24 mod_auth_digest Crash denial of service
| [94626] Apache HTTP Server up to 2.4.24 mod_session_crypto Padding weak encryption
| [94625] Apache HTTP Server up to 2.4.24 Response Split privilege escalation
| [93958] Apache HTTP Server up to 2.4.23 mod_http2 h2_stream.c denial of service
| [89669] Apache HTTP Server up to 2.4.23 RFC 3875 Namespace Conflict Environment Variable Open Redirect
| [88747] Apache HTTP Server 2.4.17/2.4.18 mod_http2 denial of service
| [88667] Apache HTTP Server up to 2.4.20 mod_http2 Certificate weak authentication
| [77083] Apache Groovy up to 2.4.3 MethodClosure.java MethodClosure memory corruption
| [76731] Apache HTTP Server 2.4.12 ErrorDocument 400 Crash denial of service
| [74367] Apache HTTP Server up to 2.4.12 mod_lua lua_request.c wsupgrade denial of service
| [73106] Apache Hadoop up to 2.4.0 Symlink privilege escalation
| [68575] Apache HTTP Server up to 2.4.10 LuaAuthzProvider mod_lua.c privilege escalation
| [68435] Apache HTTP Server 2.4.10 mod_proxy_fcgi.c handle_headers denial of service
| [67183] Apache HTTP Server up to 2.4.9 mod_proxy denial of service
| [67180] Apache HTTP Server up to 2.4.9 WinNT MPM Memory Leak denial of service
| [67185] Apache HTTP Server up to 2.4.9 mod_status Heap-Based memory corruption
| [67184] Apache HTTP Server 2.4.5/2.4.6 mod_cache NULL Pointer Dereference denial of service
| [67182] Apache HTTP Server up to 2.4.9 mod_deflate Memory Consumption denial of service
| [67181] Apache HTTP Server up to 2.4.9 mod_cgid denial of service
| [13300] Apache HTTP Server 2.4.1/2.4.2 mod_wsgi setuid privilege escalation
| [13299] Apache HTTP Server 2.4.1/2.4.2 mod_wsgi Content-Type Header information disclosure
| [9683] Apache HTTP Server 2.4.5 mod_session_dbd denial of service
| [7202] Apache HTTP Server 2.4.2 on Oracle Solaris ld_library_path cross site scripting
| [6092] Apache HTTP Server 2.4.0/2.4.1/2.4.2 mod_proxy_ajp.c information disclosure
| [6090] Apache HTTP Server 2.4.0/2.4.1/2.4.2 mod_proxy_http.c information disclosure
| [9673] Apache HTTP Server up to 2.4.4 mod_dav mod_dav.c Request denial of service
| 
| MITRE CVE - https://cve.mitre.org:
| [CVE-2012-2378] Apache CXF 2.4.5 through 2.4.7, 2.5.1 through 2.5.3, and 2.6.x before 2.6.1, does not properly enforce child policies of a WS-SecurityPolicy 1.1 SupportingToken policy on the client side, which allows remote attackers to bypass the (1) AlgorithmSuite, (2) SignedParts, (3) SignedElements, (4) EncryptedParts, and (5) EncryptedElements policies.
| [CVE-2013-2249] mod_session_dbd.c in the mod_session_dbd module in the Apache HTTP Server before 2.4.5 proceeds with save operations for a session without considering the dirty flag and the requirement for a new session ID, which has unspecified impact and remote attack vectors.
| [CVE-2012-4558] Multiple cross-site scripting (XSS) vulnerabilities in the balancer_handler function in the manager interface in mod_proxy_balancer.c in the mod_proxy_balancer module in the Apache HTTP Server 2.2.x before 2.2.24-dev and 2.4.x before 2.4.4 allow remote attackers to inject arbitrary web script or HTML via a crafted string.
| [CVE-2012-3502] The proxy functionality in (1) mod_proxy_ajp.c in the mod_proxy_ajp module and (2) mod_proxy_http.c in the mod_proxy_http module in the Apache HTTP Server 2.4.x before 2.4.3 does not properly determine the situations that require closing a back-end connection, which allows remote attackers to obtain sensitive information in opportunistic circumstances by reading a response that was intended for a different client.
| [CVE-2012-3499] Multiple cross-site scripting (XSS) vulnerabilities in the Apache HTTP Server 2.2.x before 2.2.24-dev and 2.4.x before 2.4.4 allow remote attackers to inject arbitrary web script or HTML via vectors involving hostnames and URIs in the (1) mod_imagemap, (2) mod_info, (3) mod_ldap, (4) mod_proxy_ftp, and (5) mod_status modules.
| [CVE-2012-3451] Apache CXF before 2.4.9, 2.5.x before 2.5.5, and 2.6.x before 2.6.2 allows remote attackers to execute unintended web-service operations by sending a header with a SOAP Action String that is inconsistent with the message body.
| [CVE-2012-2687] Multiple cross-site scripting (XSS) vulnerabilities in the make_variant_list function in mod_negotiation.c in the mod_negotiation module in the Apache HTTP Server 2.4.x before 2.4.3, when the MultiViews option is enabled, allow remote attackers to inject arbitrary web script or HTML via a crafted filename that is not properly handled during construction of a variant list.
| [CVE-2012-2379] Apache CXF 2.4.x before 2.4.8, 2.5.x before 2.5.4, and 2.6.x before 2.6.1, when a Supporting Token specifies a child WS-SecurityPolicy 1.1 or 1.2 policy, does not properly ensure that an XML element is signed or encrypted, which has unspecified impact and attack vectors.
| [CVE-2012-0883] envvars (aka envvars-std) in the Apache HTTP Server before 2.4.2 places a zero-length directory name in the LD_LIBRARY_PATH, which allows local users to gain privileges via a Trojan horse DSO in the current working directory during execution of apachectl.
| [CVE-2011-2516] Off-by-one error in the XML signature feature in Apache XML Security for C++ 1.6.0, as used in Shibboleth before 2.4.3 and possibly other products, allows remote attackers to cause a denial of service (crash) via a signature using a large RSA key, which triggers a buffer overflow.
| 
| SecurityFocus - https://www.securityfocus.com/bid/:
| [42102] Apache 'mod_proxy_http' 2.2.9 for Unix Timeout Handling Information Disclosure Vulnerability
| [27237] Apache HTTP Server 2.2.6, 2.0.61 and 1.3.39 'mod_status' Cross-Site Scripting Vulnerability
| [15413] PHP Apache 2 Virtual() Safe_Mode and Open_Basedir Restriction Bypass Vulnerability
| [15177] PHP Apache 2 Local Denial of Service Vulnerability
| [6065] Apache 2 WebDAV CGI POST Request Information Disclosure Vulnerability
| [5816] Apache 2 mod_dav Denial Of Service Vulnerability
| [5486] Apache 2.0 CGI Path Disclosure Vulnerability
| [5485] Apache 2.0 Path Disclosure Vulnerability
| [5434] Apache 2.0 Encoded Backslash Directory Traversal Vulnerability
| [5256] Apache httpd 2.0 CGI Error Path Disclosure Vulnerability
| [4057] Apache 2 for Windows OPTIONS request Path Disclosure Vulnerability
| [4056] Apache 2 for Windows php.exe Path Disclosure Vulnerability
| 
| IBM X-Force - https://exchange.xforce.ibmcloud.com:
| [75211] Debian GNU/Linux apache 2 cross-site scripting
| 
| Exploit-DB - https://www.exploit-db.com:
| [31052] Apache <= 2.2.6 'mod_negotiation' HTML Injection and HTTP Response Splitting Vulnerability
| [30901] Apache HTTP Server 2.2.6 Windows Share PHP File Extension Mapping Information Disclosure Vulnerability
| [30835] Apache HTTP Server <= 2.2.4 413 Error HTTP Request Method Cross-Site Scripting Weakness
| [28424] Apache 2.x HTTP Server Arbitrary HTTP Request Headers Security Weakness
| [28365] Apache 2.2.2 CGI Script Source Code Information Disclosure Vulnerability
| [27915] Apache James 2.2 SMTP Denial of Service Vulnerability
| [27135] Apache Struts 2 DefaultActionMapper Prefixes OGNL Code Execution
| [26710] Apache CXF prior to 2.5.10, 2.6.7 and 2.7.4 - Denial of Service
| [24590] Apache 2.0.x mod_ssl Remote Denial of Service Vulnerability
| [23581] Apache 2.0.4x mod_perl Module File Descriptor Leakage Vulnerability
| [23482] Apache 2.0.4x mod_php Module File Descriptor Leakage Vulnerability (2)
| [23481] Apache 2.0.4x mod_php Module File Descriptor Leakage Vulnerability (1)
| [23296] Red Hat Apache 2.0.40 Directory Index Default Configuration Error
| [23282] apache cocoon 2.14/2.2 - Directory Traversal vulnerability
| [22191] Apache Web Server 2.0.x MS-DOS Device Name Denial of Service Vulnerability
| [21854] Apache 2.0.39/40 Oversized STDERR Buffer Denial of Service Vulnerability
| [21719] Apache 2.0 Path Disclosure Vulnerability
| [21697] Apache 2.0 Encoded Backslash Directory Traversal Vulnerability
| [20272] Apache 1.2.5/1.3.1,UnityMail 2.0 MIME Header DoS Vulnerability
| [19828] Cobalt RaQ 2.0/3.0 Apache .htaccess Disclosure Vulnerability
| [18984] Apache Struts <= 2.2.1.1 - Remote Command Execution
| [18329] Apache Struts2 <= 2.3.1 - Multiple Vulnerabilities
| [17691] Apache Struts < 2.2.0 - Remote Command Execution
| [15319] Apache 2.2 (Windows) Local Denial of Service
| [14617] Apache JackRabbit 2.0.0 webapp XPath Injection
| [11650] Apache 2.2.14 mod_isapi Dangling Pointer Remote SYSTEM Exploit
| [8458] Apache Geronimo <= 2.1.3 - Multiple Directory Traversal Vulnerabilities
| [5330] Apache 2.0 mod_jk2 2.0.2 - Remote Buffer Overflow Exploit (win32)
| [3996] Apache 2.0.58 mod_rewrite Remote Overflow Exploit (win2k3)
| [2237] Apache < 1.3.37, 2.0.59, 2.2.3 (mod_rewrite) Remote Overflow PoC
| [1056] Apache <= 2.0.49 Arbitrary Long HTTP Headers Denial of Service
| [855] Apache <= 2.0.52 HTTP GET request Denial of Service Exploit
| [132] Apache 1.3.x - 2.0.48 - mod_userdir Remote Users Disclosure Exploit
| [38] Apache <= 2.0.45 APR Remote Exploit -Apache-Knacker.pl
| [34] Webfroot Shoutbox < 2.32 (Apache) Remote Exploit
| [11] Apache <= 2.0.44 Linux Remote Denial of Service Exploit
| [9] Apache HTTP Server 2.x Memory Leak Exploit
| 
| OpenVAS (Nessus) - http://www.openvas.org:
| [855524] Solaris Update for Apache 2 120544-14
| [855077] Solaris Update for Apache 2 120543-14
| [100858] Apache 'mod_proxy_http' 2.2.9 for Unix Timeout Handling Information Disclosure Vulnerability
| [72626] Debian Security Advisory DSA 2579-1 (apache2)
| [71551] Gentoo Security Advisory GLSA 201206-25 (apache)
| [71550] Gentoo Security Advisory GLSA 201206-24 (apache tomcat)
| [71485] Debian Security Advisory DSA 2506-1 (libapache-mod-security)
| [71256] Debian Security Advisory DSA 2452-1 (apache2)
| [71238] Debian Security Advisory DSA 2436-1 (libapache2-mod-fcgid)
| [70724] Debian Security Advisory DSA 2405-1 (apache2)
| [70235] Debian Security Advisory DSA 2298-2 (apache2)
| [70233] Debian Security Advisory DSA 2298-1 (apache2)
| [69988] Debian Security Advisory DSA 2279-1 (libapache2-mod-authnz-external)
| [69338] Debian Security Advisory DSA 2202-1 (apache2)
| [65131] SLES9: Security update for Apache 2 oes/CORE
| [64426] Gentoo Security Advisory GLSA 200907-04 (apache)
| [61381] Gentoo Security Advisory GLSA 200807-06 (apache)
| [60582] Gentoo Security Advisory GLSA 200803-19 (apache)
| [58745] Gentoo Security Advisory GLSA 200711-06 (apache)
| [57851] Gentoo Security Advisory GLSA 200608-01 (apache)
| [56246] Gentoo Security Advisory GLSA 200602-03 (Apache)
| [55392] Gentoo Security Advisory GLSA 200509-12 (Apache)
| [55129] Gentoo Security Advisory GLSA 200508-15 (apache)
| [54739] Gentoo Security Advisory GLSA 200411-18 (apache)
| [54724] Gentoo Security Advisory GLSA 200411-03 (apache)
| [54712] Gentoo Security Advisory GLSA 200410-21 (apache)
| [54689] Gentoo Security Advisory GLSA 200409-33 (net=www/apache)
| [54677] Gentoo Security Advisory GLSA 200409-21 (apache)
| [54610] Gentoo Security Advisory GLSA 200407-03 (Apache)
| [54601] Gentoo Security Advisory GLSA 200406-16 (Apache)
| [54590] Gentoo Security Advisory GLSA 200406-05 (Apache)
| [54582] Gentoo Security Advisory GLSA 200405-22 (Apache)
| [54529] Gentoo Security Advisory GLSA 200403-04 (Apache)
| [54499] Gentoo Security Advisory GLSA 200310-04 (Apache)
| [54498] Gentoo Security Advisory GLSA 200310-03 (Apache)
| [11092] Apache 2.0.39 Win32 directory traversal
| [66081] SLES11: Security update for Apache 2
| [66074] SLES10: Security update for Apache 2
| [66070] SLES9: Security update for Apache 2
| [65893] SLES10: Security update for Apache 2
| [65888] SLES10: Security update for Apache 2
| [65510] SLES9: Security update for Apache 2
| [65249] SLES9: Security update for Apache 2
| [65230] SLES9: Security update for Apache 2
| [65228] SLES9: Security update for Apache 2
| [65207] SLES9: Security update for Apache 2
| [65136] SLES9: Security update for Apache 2
| [65017] SLES9: Security update for Apache 2
| 
| SecurityTracker - https://www.securitytracker.com:
| [1008196] Apache 2.x on Windows May Return Unexpected Files For URLs Ending With Certain Characters
| [1007143] Apache 2.0 Web Server May Use a Weaker Encryption Implementation Than Specified in Some Cases
| [1006444] Apache 2.0 Web Server Line Feed Buffer Allocation Flaw Lets Remote Users Deny Service
| [1005963] Apache Web Server 2.x Windows Device Access Flaw Lets Remote Users Crash the Server or Possibly Execute Arbitrary Code
| [1004770] Apache 2.x Web Server ap_log_rerror() Function May Disclose Full Installation Path to Remote Users
| 
| OSVDB - http://www.osvdb.org:
| [20897] PHP w/ Apache 2 SAPI virtual() Function Unspecified INI Setting Disclosure
|_
135/tcp   filtered msrpc
139/tcp   filtered netbios-ssn
445/tcp   filtered microsoft-ds
3372/tcp  filtered msdtc
9929/tcp  open     nping-echo   Nping echo
| vulscan: VulDB - https://vuldb.com:
| [150247] Moxa MGate 5105-MB-EIP up to 4.1 MainPing.asp Parameter privilege escalation
| [148263] Huawei Product MPLS Echo Request Message Parameter denial of service
| [141891] echosign Plugin up to 1.1 on WordPress add_templates.php Parameter cross site scripting
| [141890] echosign Plugin up to 1.1 on WordPress inc.php Parameter cross site scripting
| [137406] Linux Kernel up to 5.0.7 IP ID Generator ICMP Echo Request KASLR information disclosure
| [136155] TP-LINK TL-WR940N PingIframeRpm.htm ipAddrDispose ICMP Echo Request memory corruption
| [134602] Seagate NAS OS 4.3.15.1 Referer Header echo-server.html information disclosure
| [126827] payfort-php-SDK up to 2018-04-26 Echo error.php Parameter cross site scripting
| [126825] payfort-php-SDK up to 2018-04-26 Echo success.php Parameter cross site scripting
| [126066] Typecho 1.1 Server-Side Request Forgery
| [121526] Techotronic all-in-one-favicon Plugin 4.6 on WordPress Apple-Text/GIF-Text/ICO-Text/PNG-Text/JPG-Text Persistent cross site scripting
| [118994] IntelliVue Patient Monitor up to X3 Echo Service Stack-based memory corruption
| [118387] Amazon Echo/Echo Dot/Echo Show/Echo Spot Listening Spying information disclosure
| [113374] Huawei NGFW Module/IPS Module/Secospace MPLS Echo Request Message denial of service
| [108805] Typecho up to 1.1 admin/write-post.php cross site scripting
| [107924] Zhone zNID GPON 2426A up to S3.0 Web Admin Portal zhnping.cmd Shell Metacharacter privilege escalation
| [97527] cgiemail/cgiecho cross site scripting
| [97526] cgiemail/cgiecho Redirect Injection privilege escalation
| [97525] cgiemail/cgiecho Open Redirect
| [97524] cgiemail/cgiecho Template File Format String
| [88997] Cisco ASA up to 9.4.3.3 ICMP Echo Reply ACL ICMP Subtype Firewall privilege escalation
| [88370] Linux Kernel 3.10.0 ICMP Echo Request net/ipv4/icmp.c icmp_check_sysrq memory corruption
| [81655] MeshCMS 3.6 echo.jsp cross site scripting
| [78983] MediaWiki up to 1.23.10/1.24.3/1.25.2 Extension:Echo Username information disclosure
| [68972] Django up to 1.7.2 ModelMultipleChoiceField SQL Query denial of service
| [72250] Echo News Beta X.509 Certificate spoofing
| [65975] Linux Kernel 3.14.8/3.15.1 SCTP sctp_association_free COOKIE_ECHO Chunk denial of service
| [70053] Echoping 6.0.2 readline.c SSL_readline memory corruption
| [67376] Splunk 5.0/5.0.1/5.0.2/5.0.3/5.0.4 Shell echo.sh privilege escalation
| [66870] Huawei Echo Life cross site scripting
| [12725] Linux Kernel 3.10.34/3.12.15/3.13.7 ICMP net/ipv4/inet_fragment.c inet_frag_intern ICMP Echo Request denial of service
| [12519] Linux Kernel 2.6.32/2.6.34/3.10/3.11/3.13 SCTP Handhshake net/sctp/sm_statefuns.c sctp_sf_do_5_1D_ce COOKIE_ECHO denial of service
| [7922] Wireshark up to 1.8.5 MPLS Echo Dissector Infinite Loop denial of service
| [54955] Jianping Yu pidgin-knotify 0.1/0.1.2/0.2.0/0.2.1 pidgin-knotify.c privilege escalation
| [4187] Microsoft Windows 7/Server 2008/Vista TCP/IP Stack Ipv4SetEchoRequestCreate denial of service
| [48946] PHPEcho CMS 2.0-rc3 index.php sql injection
| [48945] PHPEcho CMS 2.0-rc3 cross site scripting
| [64065] Nextapp Echo 2.0.1/2.1.0/3.0 XML Parser unknown vulnerability
| [43725] EchoVNC 1.1.1 CLogger::WriteFormated memory corruption
| [43686] Acronis True Image Echo Server 9.5.8072 information disclosure
| 
| MITRE CVE - https://cve.mitre.org:
| [CVE-2013-3464] Cisco IOS XR allows local users to cause a denial of service (Silicon Packet Processor memory corruption, improper mutex handling, and device reload) by starting an outbound flood of large ICMP Echo Request packets and stopping this with a CTRL-C sequence, aka Bug ID CSCui60347.
| [CVE-2013-2479] The dissect_mpls_echo_tlv_dd_map function in epan/dissectors/packet-mpls-echo.c in the MPLS Echo dissector in Wireshark 1.8.x before 1.8.6 allows remote attackers to cause a denial of service (infinite loop) via invalid Sub-tlv data.
| [CVE-2013-2206] The sctp_sf_do_5_2_4_dupcook function in net/sctp/sm_statefuns.c in the SCTP implementation in the Linux kernel before 3.8.5 does not properly handle associations during the processing of a duplicate COOKIE ECHO chunk, which allows remote attackers to cause a denial of service (NULL pointer dereference and system crash) or possibly have unspecified other impact via crafted SCTP traffic.
| [CVE-2013-0499] Cross-site scripting (XSS) vulnerability in the echo functionality on IBM WebSphere DataPower SOA appliances with firmware 3.8.2, 4.0, 4.0.1, 4.0.2, and 5.0.0 allows remote attackers to inject arbitrary web script or HTML via a SOAP message, as demonstrated by the XML Firewall, Multi Protocol Gateway (MPGW), Web Service Proxy, and Web Token services.
| [CVE-2012-2394] Wireshark 1.4.x before 1.4.13 and 1.6.x before 1.6.8 on the SPARC and Itanium platforms does not properly perform data alignment for a certain structure member, which allows remote attackers to cause a denial of service (application crash) via a (1) ICMP or (2) ICMPv6 Echo Request packet.
| [CVE-2011-2395] The Neighbor Discovery (ND) protocol implementation in Cisco IOS on unspecified switches allows remote attackers to bypass the Router Advertisement Guarding functionality via a fragmented IPv6 packet in which the Router Advertisement (RA) message is contained in the second fragment, as demonstrated by (1) a packet in which the first fragment contains a long Destination Options extension header or (2) a packet in which the first fragment contains an ICMPv6 Echo Request message.
| [CVE-2011-2059] The ipv6 component in Cisco IOS before 15.1(4)M1.3 allows remote attackers to conduct fingerprinting attacks and obtain potentially sensitive information about the presence of the IOS operating system via an ICMPv6 Echo Request packet containing a Hop-by-Hop (HBH) extension header (EH) with a 0x0c01050c value in the PadN option data, aka Bug ID CSCtq02219.
| [CVE-2011-1385] IBM AIX 5.3, 6.1, and 7.1, and VIOS 2.1.x and 2.2.x, allows remote attackers to cause a denial of service (system crash) via an ICMP Echo Reply packet that contains 1 in the Identifier field, a different vulnerability than CVE-2012-0194.
| [CVE-2010-4563] The Linux kernel, when using IPv6, allows remote attackers to determine whether a host is sniffing the network by sending an ICMPv6 Echo Request to a multicast address and determining whether an Echo Reply is sent, as demonstrated by thcping.
| [CVE-2010-4562] Microsoft Windows 2008, 7, Vista, 2003, 2000, and XP, when using IPv6, allows remote attackers to determine whether a host is sniffing the network by sending an ICMPv6 Echo Request to a multicast address and determining whether an Echo Reply is sent, as demonstrated by thcping. NOTE: due to a typo, some sources map CVE-2010-4562 to a ProFTPd mod_sql vulnerability, but that issue is covered by CVE-2010-4652.
| [CVE-2010-2529] Unspecified vulnerability in ping.c in iputils 20020927, 20070202, 20071127, and 20100214 on Mandriva Linux allows remote attackers to cause a denial of service (hang) via a crafted echo response.
| [CVE-2010-0119] Bournal before 1.4.1 on FreeBSD 8.0, when the -K option is used, places a ccrypt key on the command line, which allows local users to obtain sensitive information by listing the process and its arguments, related to "echoing."
| [CVE-2009-5135] The Java XML parser in Echo before 2.1.1 and 3.x before 3.0.b6 allows remote attackers to read arbitrary files via a request containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.
| [CVE-2009-2402] SQL injection vulnerability in index.php in the forum module in PHPEcho CMS 2.0-rc3 allows remote attackers to execute arbitrary SQL commands via the id parameter in a thread action, a different vector than CVE-2008-0355.
| [CVE-2009-2401] Cross-site scripting (XSS) vulnerability in PHPEcho CMS 2.0-rc3 allows remote attackers to inject arbitrary web script or HTML via a forum post.
| [CVE-2009-1683] The Telephony component in Apple iPhone OS 1.0 through 2.2.1 and iPhone OS for iPod touch 1.1 through 2.2.1 allows remote attackers to cause a denial of service (device reset) via a crafted ICMP echo request, which triggers an assertion error related to a "logic issue."
| [CVE-2008-7034] PHP remote file inclusion vulnerability in kernel/smarty/Smarty.class.php in PHPEcho CMS 2.0 rc3 allows remote attackers to execute arbitrary PHP code via a URL in unspecified vectors that modify the _smarty_compile_path variable in the fetch function.
| [CVE-2008-3705] Stack-based buffer overflow in the CLogger::WriteFormated function in echoware/Logger.cpp in EchoVNC Linux before 1.1.2 allows remote echoServers to execute arbitrary code via a large (1) group or (2) user list, aka a "very crowded echoServer" attack.  NOTE: some of these details are obtained from third party information.
| [CVE-2008-3671] Acronis True Image Echo Server 9.x build 8072 on Linux does not properly encrypt backups to an FTP server, which allows remote attackers to obtain sensitive information.  NOTE: the provenance of this information is unknown
| [CVE-2008-0526] Cisco Unified IP Phone 7940, 7940G, 7960, and 7960G running SCCP firmware allows remote attackers to cause a denial of service (reboot) via a long ICMP echo request (ping) packet.
| [CVE-2008-0355] SQL injection vulnerability in index.php in the forum module in PHPEcho CMS, probably 2.0-rc3 and earlier, allows remote attackers to execute arbitrary SQL commands via the id parameter in a section action, a different vector than CVE-2007-2866.
| [CVE-2007-5576] BEA Tuxedo 8.0 before RP392 and 8.1 before RP293, and WebLogic Enterprise 5.1 before RP174, echo the password in cleartext, which allows physically proximate attackers to obtain sensitive information via the (1) cnsbind, (2) cnsunbind, or (3) cnsls commands.
| [CVE-2007-4213] Palm OS on Treo 650, 680, 700p, and 755p Smart phones allows remote attackers to cause a denial of service (device reset or hang) via a flood of large ICMP echo requests.  NOTE: this is probably a different vulnerability than CVE-2003-0293.
| [CVE-2007-3335] Multiple SQL injection vulnerabilities in the admin panel in PHPEcho CMS before 1.6 allow remote attackers to execute arbitrary SQL commands via unspecified vectors.
| [CVE-2007-2866] Multiple SQL injection vulnerabilities in modules/admin/modules/gallery.php in PHPEcho CMS 2.0-rc1 and earlier allow remote attackers to execute arbitrary SQL commands via the id parameter and possibly other parameters.  NOTE: some of these details are obtained from third party information.
| [CVE-2007-1988] Cross-site scripting (XSS) vulnerability in kernel/filters.inc.php in PHPEcho CMS 2.0 allows remote attackers to inject arbitrary web script or HTML via the id parameter.
| [CVE-2007-1987] ** DISPUTED **  Multiple PHP remote file inclusion vulnerabilities in PHPEcho CMS 2.0 allow remote attackers to execute arbitrary PHP code via a URL in the (1) _plugin_file parameter to smarty/internals/core.load_pulgins.php or the (2) root_path parameter to index.php.  NOTE: CVE disputes (1) because the inclusion occurs within a function that is not called during a direct request. CVE disputes (2) because root_path is defined in config.php before use.
| [CVE-2007-1834] Cisco Unified CallManager (CUCM) 5.0 before 5.0(4a)SU1 and Cisco Unified Presence Server (CUPS) 1.0 before 1.0(3) allow remote attackers to cause a denial of service (loss of voice services) via a flood of ICMP echo requests, aka bug ID CSCsf12698.
| [CVE-2007-0343] OpenBSD before 20070116 allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via certain IPv6 ICMP (aka ICMP6) echo request packets.
| [CVE-2006-3146] The TOSRFBD.SYS driver for Toshiba Bluetooth Stack 4.00.29 and earlier on Windows allows remote attackers to cause a denial of service (reboot) via a L2CAP echo request that triggers an out-of-bounds memory access, similar to "Ping o' Death" and as demonstrated by BlueSmack.  NOTE: this issue was originally reported for 4.00.23.
| [CVE-2006-2741] Cross-site scripting (XSS) vulnerability in Epicdesigns tinyBB 0.3 allow remote attackers to inject arbitrary web script or HTML via the q parameter in forgot.php, which is echoed in an error message, and other unspecified vectors.
| [CVE-2006-2639] Cross-site scripting (XSS) vulnerability in the input forms in prattmic and Master5006 PHPSimpleChoose 0.3 allows remote attackers to inject arbitrary web script or HTML via a javascript URI in the SRC attribute of an IMG element.
| [CVE-2006-2272] Linux SCTP (lksctp) before 2.6.17 allows remote attackers to cause a denial of service (kernel panic) via incoming IP fragmented (1) COOKIE_ECHO and (2) HEARTBEAT SCTP control chunks.
| [CVE-2006-1030] Unspecified vulnerability in mod_templatechooser in Joomla! 1.0.7 allows remote attackers to obtain sensitive information via an unspecified attack vector that reveals the path.
| [CVE-2006-0454] Linux kernel before 2.6.15.3 down to 2.6.12, while constructing an ICMP response in icmp_send, does not properly handle when the ip_options_echo function in icmp.c fails, which allows remote attackers to cause a denial of service (crash) via vectors such as (1) record-route and (2) timestamp IP options with the needaddr bit set and a truncated value.
| [CVE-2006-0374] Advantage Century Telecommunication (ACT) P202S IP Phone 1.01.21 running firmware 1.1.21 has multiple undocumented ports available, which (1) might allow remote attackers to obtain sensitive information, such as memory contents and internal operating-system data, by directly accessing the VxWorks WDB remote debugging ONCRPC (aka wdbrpc) on UDP 17185, (2) reflect network data using echo (TCP 7), or (3) gain access without authentication using rlogin (TCP 513).
| [CVE-2005-0443] index.php in CubeCart 2.0.4 allows remote attackers to (1) obtain the full path for the web server or (2) conduct cross-site scripting (XSS) attacks via an invalid language parameter, which echoes the parameter in a PHP error message.
| [CVE-2004-1700] Cross-site scripting (XSS) vulnerability in SettingsBase.php in Pinnacle ShowCenter 1.51 build 121 allows remote attackers to inject arbitrary HTML or web script via the Skin parameter, which is echoed in an error message.
| [CVE-2004-1410] Cross-site scripting (XSS) vulnerability in Gadu-Gadu build 155 and earlier allows remote attackers to inject arbitrary web script via a URL, which is echoed in a popup window that displays a parsing error message, a different vulnerability than CVE-2004-1229.
| [CVE-2004-1133] Multiple cross-site scripting (XSS) vulnerabilities in Microsoft W3Who ISAPI (w3who.dll) allow remote attackers to inject arbitrary HTML and web script via (1) HTTP headers such as "Connection" or (2) invalid parameters whose values are echoed in the resulting error message.
| [CVE-2004-0819] The bridge functionality in OpenBSD 3.4 and 3.5, when running a gateway configured as a bridging firewall with the link2 option for IPSec enabled, allows remote attackers to cause a denial of service (crash) via an ICMP echo (ping) packet.
| [CVE-2004-0673] Cross-site scripting (XSS) vulnerability in SCI Photo Chat Server 3.4.9 allows remote attackers to execute arbitrary web script as other users via an invalid request that is echoed in the resulting error message.
| [CVE-2004-0303] OWLS 1.0 allows remote attackers to retrieve arbitrary files via absolute pathnames in (1) the file parameter in /glossaries/index.php, (2) the filename parameter in /readings/index.php, or (3) the filename parameter in /multiplechoice/resultsignore.php, as demonstrated using /etc/passwd.
| [CVE-2004-0302] Directory traversal vulnerability in OWLS 1.0 allows remote attackers to read arbitrary files via a .. (dot dot) in the (1) file parameter in index.php, (2) editfile in glossary.php, or (3) editfile in newmultiplechoice.php.
| [CVE-2003-1282] IBM Net.Data allows remote attackers to obtain sensitive information such as path names, server names and possibly user names and passwords by causing the (1) $(DTW_CURRENT_FILENAME), (2) $(DATABASE), (3) $(LOGIN), (4) $(PASSWORD), and possibly other predefined variables that can be echoed back to the user via a web form.
| [CVE-2003-1222] BEA Weblogic Express and Server 8.0 through 8.1 SP 1, when using a foreign Java Message Service (JMS) provider, echoes the password for the foreign provider to the console and stores it in cleartext in config.xml, which could allow attackers to obtain the password.
| [CVE-2003-0944] Buffer overflow in the WAECHO default service in web-tools in SAP DB before 7.4.03.30 allows remote attackers to execute arbitrary code via a URL with a long requestURI.
| [CVE-2003-0943] web-tools in SAP DB before 7.4.03.30 installs several services that are enabled by default, which could allow remote attackers to obtain potentially sensitive information or redirect attacks against internal databases via (1) waecho, (2) Web SQL Interface (websql), or (3) Web Database Manager (webdbm).
| [CVE-2003-0293] PalmOS allows remote attackers to cause a denial of service (CPU consumption) via a flood of ICMP echo request (ping) packets.
| [CVE-2003-0022] The "screen dump" feature in rxvt 2.7.8 allows attackers to overwrite arbitrary files via a certain character escape sequence when it is echoed to a user's terminal, e.g. when the user views a file containing the malicious sequence.
| [CVE-2003-0021] The "screen dump" feature in Eterm 0.9.1 and earlier allows attackers to overwrite arbitrary files via a certain character escape sequence when it is echoed to a user's terminal, e.g. when the user views a file containing the malicious sequence.
| [CVE-2002-2129] Cross-site scripting vulnerability (XSS) in editform.php for w-Agora 4.1.5 allows remote attackers to execute arbitrary web script via an arbitrary form field name containing the script, which is echoed back to the user when displaying the form.
| [CVE-2002-1632] Oracle 9i Application Server (9iAS) installs multiple sample pages that allow remote attackers to obtain environment variables and other sensitive information via (1) info.jsp, (2) printenv, (3) echo, or (4) echo2.
| [CVE-2002-1453] Cross-site scripting (XSS) vulnerability in MyWebServer 1.0.2 allows remote attackers to insert script and HTML via a long request followed by the malicious script, which is echoed back to the user in an error message.
| [CVE-2002-1168] Cross-site scripting (XSS) vulnerability in IBM Web Traffic Express Caching Proxy Server 3.6 and 4.x before 4.0.1.26 allows remote attackers to execute script as other users via an HTTP request that contains an Location: header with a "%0a%0d" (CRLF) sequence, which echoes the Location as an HTTP header in the server response.
| [CVE-2002-0574] Memory leak in FreeBSD 4.5 and earlier allows remote attackers to cause a denial of service (memory exhaustion) via ICMP echo packets that trigger a bug in ip_output() in which the reference count for a routing table entry is not decremented, which prevents the entry from being removed.
| [CVE-2001-1382] The "echo simulation" traffic analysis countermeasure in OpenSSH before 2.9.9p2 sends an additional echo packet after the password and carriage return is entered, which could allow remote attackers to determine that the countermeasure is being used.
| [CVE-2001-0754] Cisco CBOS 2.3.8 and earlier allows remote attackers to cause a denial of service via a series of large ICMP ECHO REPLY (ping) packets, which cause it to enter ROMMON mode and stop forwarding packets.
| [CVE-2001-0752] Cisco CBOS 2.3.8 and earlier allows remote attackers to cause a denial of service via an ICMP ECHO REQUEST (ping) with the IP Record Route option set.
| [CVE-2001-0313] Borderware Firewall Server 6.1.2 allows remote attackers to cause a denial of service via a ping to the broadcast address of the public network on which the server is placed, which causes the server to continuously send pings (echo requests) to the network.
| [CVE-2001-0309] inetd in Red Hat 6.2 does not properly close sockets for internal services such as chargen, daytime, echo, etc., which allows remote attackers to cause a denial of service via a series of connections to the internal services.
| [CVE-2001-0057] Cisco 600 routers running CBOS 2.4.1 and earlier allow remote attackers to cause a denial of service via a large ICMP echo (ping) packet.
| [CVE-2000-1216] Buffer overflow in portmir for AIX 4.3.0 allows local users to corrupt lock files and gain root privileges via the echo_error routine.
| [CVE-2000-0418] The Cayman 3220-H DSL router allows remote attackers to cause a denial of service via oversized ICMP echo (ping) requests.
| [CVE-2000-0213] The Sambar server includes batch files ECHO.BAT and HELLO.BAT in the CGI directory, which allow remote attackers to execute commands via shell metacharacters.
| [CVE-1999-1297] cmdtool in OpenWindows 3.0 and XView 3.0 in SunOS 4.1.4 and earlier allows attackers with physical access to the system to display unechoed characters (such as those from password prompts) via the L2/AGAIN key.
| [CVE-1999-1201] Windows 95 and Windows 98 systems, when configured with multiple TCP/IP stacks bound to the same MAC address, allow remote attackers to cause a denial of service (traffic amplification) via a certain ICMP echo (ping) packet, which causes all stacks to send a ping response, aka TCP Chorusing.
| [CVE-1999-0635] The echo service is running.
| [CVE-1999-0523] ICMP echo (ping) is allowed from arbitrary hosts.
| [CVE-1999-0344] NT users can gain debug-level access on a system process using the Sechole exploit.
| [CVE-1999-0103] Echo and chargen, or other combinations of UDP services, can be used in tandem to flood the server, a.k.a. UDP bomb or UDP packet storm.
| 
| SecurityFocus - https://www.securityfocus.com/bid/:
| [95870] cgiemail and cgiecho Multiple Security Vulnerabilities
| [83909] PHPSimpleChoose CVE-2006-2639 Cross-Site Scripting Vulnerability
| [81836] PHPEcho CMS CVE-2007-1988 Cross-Site Scripting Vulnerability
| [81756] PHPEcho CMS CVE-2007-2866 SQL-Injection Vulnerability
| [81699] PHPEcho CMS CVE-2007-3335 SQL-Injection Vulnerability
| [80556] PHPEcho CMS CVE-2009-2402 SQL-Injection Vulnerability
| [80171] Unix Echo and Chargen CVE-1999-0103 Remote Security Vulnerability
| [79068] Echo CVE-2009-5135 Remote Security Vulnerability
| [78317] Multiple Huawei EchoLife Routers Multiple Security Vulnerabilities
| [77380] Mediawiki Echo Extension 'User::isHidden()' Security Bypass Vulnerability
| [72080] Django 'ModelMultipleChoiceField' Denial of Service Vulnerability
| [69449] Multiple F5 BIG-IP Products 'echo.jsp' Multiple Cross Site Scripting Vulnerabilities
| [66594] Huawei Echo Life HG8247 CVE-2014-0337 HTML Injection Vulnerability
| [65269] RubyGems echor 'backplane.rb' Remote Command Injection Vulnerability
| [65264] RubyGems echor Plaintext Credential Local Information Disclosure Vulnerability
| [61545] EchoVNC Denial of Service Vulnerability
| [58350] Wireshark MPLS Echo Dissector CVE-2013-2479 Denial of Service Vulnerability
| [50379] Cisco IOS Fingerprinting ICMPv6 Echo Request Information Disclosure Vulnerability
| [49971] Echo Module Cross-Site Scripting Vulnerability
| [46223] Oracle Java 'JFileChooser' Security Bypass Vulnerability
| [45394] echoping Multiple Remote Buffer Overflow Vulnerabilities
| [42606] Microsoft Windows 'IcmpSendEcho()' Local Denial Of Service Vulnerability
| [39650] Huawei EchoLife HG520c 'AutoRestart.html' Authentication Bypass Vulnerability
| [39646] Huawei EchoLife HG520 Remote Information Disclosure Vulnerability
| [35488] PHPEcho CMS SQL Injection and HTML Injection Vulnerabilities
| [35445] Apple iPhone and iPod touch ICMP Echo Request Remote Denial of Service Vulnerability
| [34060] NextApp Echo XML Parsing Local File Disclosure Vulnerability
| [30722] EchoVNC Remote Buffer Overflow Vulnerability
| [30456] Acronis True Image Echo Server Information Disclosure Weakness
| [28169] Acronis True Image Echo Enterprise Server Multiple Remote Denial of Service Vulnerabilities
| [27960] PHPEcho CMS 'Smarty.class.php' Remote File Include Vulnerability
| [27326] PHPEcho CMS 'index.php' SQL Injection Vulnerability
| [22087] OpenBSD ICMP6 Echo Request Remote Denial Of Service Vulnerability
| [18408] PHPSimpleChoose Multiple HTML Injection Vulnerabilities
| [8754] Cisco PIX ICMP Echo Request Network Address Translation Pool Exhaustion Vulnerability
| [8323] Cisco IOS UDP Echo Service Memory Disclosure Vulnerability
| [7220] Snort Evasion Echo Flag Port Scan Vulnerability
| [4539] FreeBSD Routing Table ICMP Echo Reply Denial Of Service Vulnerability
| 
| IBM X-Force - https://exchange.xforce.ibmcloud.com:
| [86385] Cisco IOS XR ICMP Echo Request denial of service
| [86113] EchoVNC Viewer denial of service
| [82631] Wireshark MPLS Echo dissector denial of service
| [82221] IBM WebSphere DataPower Appliance echo web service cross-site scripting
| [71616] IBM AIX ICMP ECHOREPLY denial of service
| [71008] Cisco IOS ICMPv6 Echo Request information disclosure
| [70349] Drupal Echo URL spoofing
| [70339] Drupal Echo unspecified cross-site scripting
| [65228] Oracle Java JFileChooser security bypass
| [64141] echoping SSL_readline() buffer overflow
| [64140] echoping TLS_readline() buffer overflow
| [61258] Microsoft Windows IcmpSendEcho2Ex denial of service
| [57952] Huawei EchoLife HG520c UDP information disclosure
| [57943] Huawei EchoLife HG520c rpLocalDeviceJump.html denial of service
| [57942] Huawei EchoLife HG520c AutoRestart.html denial of service
| [55284] EchoArticles index.php cross-site scripting
| [51943] Apache AXIS XML Parser echoheaders.jws Sample Web Service Denial of Service
| [51643] PHPEcho CMS forum module SQL injection
| [51360] PHPEcho CMS stealing.php cross-site scripting
| [51214] Apple iPod touch and Apple iPhone ICMP echo request denial of service
| [49167] Echo2 XML information disclosure
| [44501] EchoVNC for Linux CLogger::WriteFormated() buffer overflow
| [44109] True Image Echo Enterprise Server FTP encryption weak security
| [41071] Acronis True Image Echo Group Server Acronis Group Server component denial of service
| [41070] Acronis True Image Echo Group Server Acronis True Image Windows Agent component denial of service
| [40792] PHPEcho CMS Smarty.class.php file include
| [39742] PHPEcho CMS index.php path disclosure
| [39741] PHPEcho CMS index.php SQL injection
| [34479] PHPEcho CMS gallery.php SQL injection
| [33442] PHPEcho CMS index.php and core_load_plugins.php file include
| [33435] PHPEcho CMS filters.inc.php cross-site scripting
| [33299] Cisco Unified Presence Server and Cisco Unified CallManager ICMP Echo Requests (Ping) denial of service
| [32959] PHPEcho CMS admin panel module SQL injection
| [31609] OpenBSD ICMP6 echo request packets denial of service
| [27228] Toshiba Bluetooth Stack L2CAP echo request denial of service
| [26714] PHPSimpleChoose phpsimplechoose.php script cross-site scripting
| [24575] Linux kernel icmp.c ip_options_echo() denial of service
| [23012] GPSDrive dg_echo() format string
| [17129] OpenBSD ICMP echo denial of service
| [13773] SAP DB waecho service long HTTP request buffer overflow
| [13351] Cisco PIX Firewall sending large amount of ICMP echo requests causes denial of service
| [12794] Cisco IOS UDP ECHO packet information leak
| [12011] Palm OS ICMP_ECHO packets denial of service
| [8893] FreeBSD TCP/IP routing table ICMP echo reply denial of service
| [8565] Echo UDP port probe
| [8504] SNMP ECHO bounce detected
| [8014] ICMP Echo Reply without Echo
| [7929] IBM AIX portmir echo_error buffer overflow
| [7901] Echo packets with source port of 69
| [7482] Sun cmdtool displays unechoed characters
| [7299] Cisco CBOS routers multiple ECHO REQUESTS denial of service
| [5629] Cisco CBOS large ICMP ECHO packet denial of service
| [3999] Sambar Server hello.bat and echo.bat CGI scripts
| [2981] echo service enabled
| [1915] IRIX reg_echo.cgi reveals server hardware information
| [1412] Illegally formatted echo request ICMP (ping) packets could cause a system abort
| [1231] SecHole lets non-administrative users gain Debug Level access
| [44] Echo service
| 
| Exploit-DB - https://www.exploit-db.com:
| [27292] EchoVNC Viewer Remote DoS Vulnerability
| [23724] Fool's Workshop Owl's Workshop 1.0 newmultiplechoice.php Arbitrary File Access
| [23722] Fool's Workshop Owl's Workshop 1.0 multiplechoice/index.php Arbitrary File Access
| [22978] Cisco IOS 10/11/12 UDP Echo Service Memory Disclosure Vulnerability
| [17328] Magneto ICMP ActiveX 4.0.0.20 - ICMPSendEchoRequest Remote Code Execute
| [14705] Microsoft Windows (IcmpSendEcho2Ex interrupting) Denial of Service Vulnerability
| [12298] Huawei EchoLife HG520 Remote Information Disclosure
| [12297] Huawei EchoLife HG520c Denial of Service and Modem Reset
| [9014] PHPEcho CMS 2.0-rc3 (forum) XSS Cookie Stealing / Blind Vulnerability
| [8191] NextApp Echo < 2.1.1 XML Injection Vulnerability
| [4929] PHPEcho CMS 2.0 (id) Remote SQL Injection Vulnerability
| 
| OpenVAS (Nessus) - http://www.openvas.org:
| [100075] Check for echo Service
| 
| SecurityTracker - https://www.securitytracker.com:
| [1024358] Windows TCP/IP Stack IcmpSendEcho2Ex() Bug Lets Local Users Deny Service
| [1019407] Cisco Unified IP Phone Can Be Crashed By Remote Users Sending an ICMP Echo Request Packet
| [1017574] Solaris ICMP Echo Packet Processing Error Lets Remote Users Deny Service
| [1017518] OpenBSD ICMP6 Echo Request Bug Lets Remote Users Deny Service
| [1007877] Cisco PIX NAT Pool Can Be Consumed With ICMP Echo Request Packets
| [1007363] Cisco IOS May Disclose Portions of Memory to Remote Users Via UDP Echo Response Packets
| [1006759] PalmOS Can Be Disabled By Remote Users Sending Continuous ICMP Echo Requests
| [1003188] Snort Network Intrusion Detection System Can Be Crashed By a Remote User Sending a One Byte ICMP Echo Request Packet
| 
| OSVDB - http://www.osvdb.org:
| [96175] Cisco IOS XR Outbound ICMP Echo Saturation Local DoS
| [96141] EchoVNC Viewer Crafted Request Large Size Value Handling Allocation Failure DoS Weakness
| [90994] Wireshark MPLS Echo Dissector Malformed Packet Handling Infinite Loop Remote DoS
| [78760] Multiple Linux ICMPv6 Echo Request Remote Promiscuous Mode Detection
| [78759] Microsoft Windows ICMPv6 Echo Request Remote Promiscuous Mode Detection
| [76818] Cisco IOS IPv6 Component Crafted Echo Request Packet Remote Information Disclosure
| [76104] Echo Module for Drupal Unspecified URL Spoofing Weakness
| [76103] Echo Module for Drupal Unspecified XSS
| [75354] Oracle fcgi-bin/echo XSS
| [70163] echoping readline.c Multiple Function Encrypted HTTP Reply Remote Overflow
| [67408] Microsoft Windows Ipv4SetEchoRequestCreate() Interruption DoS
| [66681] iputils / inetutils ping Crafted Echo Response Remote DoS
| [63991] Huawei EchoLife HG520c AutoRestart.html Unrestricted Access DoS
| [63990] Huawei EchoLife HG520 Crafted UDP Packet Information Disclosure
| [56155] IBM WebSphere Application Server (WAS) JAX-WS Web Services Ping and Echo Sample (/scriptwssamplesei/demo) Multiple Parameter XSS
| [55756] PHPEcho CMS Forum Post XSS
| [55755] PHPEcho CMS Forum Module index.php id Parameter SQL Injection
| [55241] Apple iPhone / iPod Touch Telephony ICMP Echo Packet Handling Remote DoS
| [53687] PHPEcho CMS modules/admin/index.php Path Disclosure
| [53686] PHPEcho CMS kernel/init.php Path Disclosure
| [52889] NextApp Echo2 Engine External Entity (XXE) Data Parsing Arbitrary File Access
| [51018] PHPEcho CMS smarty/Smarty.class.php smarty_compile_path Parameter Remote File Inclusion
| [47542] Acronis True Image Echo Server FTP Backup Encryption Failure Remote Cleartext Information Disclosure
| [47540] EchoVNC for Linux echoware/Logger.cpp CLogger::WriteFormated Function Remote Overflow
| [43075] Acronis True Image Echo Group Server Malformed Packet Remote DoS
| [41569] Cisco Unified IP Phone Large ICMP Echo Packet DoS
| [40541] Forum Module for PHPEcho CMS index.php id Parameter SQL Injection
| [38053] PHPEcho CMS modules/admin/modules/gallery.php id Parameter SQL Injection
| [36551] Serendipity serendipity_event_templatechooser/serendipity_event_templatechooser.php serendipity[charset] Parameter Traversal Local File Inclusion
| [35262] PHPEcho CMS kernel/filters.inc.php id Parameter XSS
| [34594] Cisco CUCM / CUPS ICMP Echo Request Saturation DoS
| [34117] PHPEcho CMS Multiple Script Remote File Inclusion
| [34004] PHPEcho CMS Admin Panel SQL Injection
| [32935] OpenBSD Crafted IPv6 ICMP Echo Request DoS
| [25784] PHPSimpleChoose phpsimplechoose.php Input Form XSS
| [23818] Joomla! mod_templatechooser Path Disclosure
| [22993] Linux Kernel ip_options_echo() Function Crafted ICMP Packet Remote DoS
| [19448] aMember Pro /echo/config.inc.php Remote File Inclusion
| [18218] Oracle 9iAS echo2 Sample Application Information Disclosure
| [18217] Oracle 9iAS echo Sample Application Information Disclosure
| [17315] Lpanel functions.inc.php Echoed Password Disclosure
| [17004] Sendmail NFS Mount safechown Bypass
| [10057] Palm OS ICMP Echo Request Saturation DoS
| [8427] Solaris ping ECHO_REQUEST Local Overflow
| [7200] Cisco 600 CBOS Large ICMP Echo Packet DoS
| [5958] FastCGI echo Information Disclosure
| [5802] Sambar Server echo.bat Code Execution
| [5408] OpenSSH echo simulation Information Disclosure
| [5232] FreeBSD ip_output Routing Table ICMP Echo DoS
| [4429] Snort Echo Flag Detection Bypass
| [4130] Motorola T720 TCP SYN / ICMP ECHO Saturation DoS
| [4007] OWLS newmultiplechoice.php Arbitrary File Access
| [4003] OWLS multiplechoice/index.php Arbitrary File Access
| [3954] FastCGI echo2.exe Query String XSS
| [3084] SAP DB waecho Service Long HTTP Request Overflow
| [2352] Cisco IOS UDP Echo Memory Disclosure
| [1348] Cayman 3220H DSL Router Oversized ICMP Echo Handling Remote DoS
| [700] FastCGI echo.exe Query String XSS
| [150] Echo / Chargen UDP Services Spoofed Packet Remote DoS
|_
31337/tcp open     tcpwrapped
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 21.34 seconds

`},

]