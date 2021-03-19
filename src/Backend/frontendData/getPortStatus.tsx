interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string): Data {return {target, timestamp, scanId, portno, port, status, service, version};}

export const rows = [
    createData('','', '','','','', '',''),


// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '1.99 seconds', 'wJaXMnPKEVRlDGbRGSvnS','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '1.99 seconds', 'wJaXMnPKEVRlDGbRGSvnS','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '1.99 seconds', 'wJaXMnPKEVRlDGbRGSvnS','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '1.99 seconds', 'wJaXMnPKEVRlDGbRGSvnS','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '1.99 seconds', 'wJaXMnPKEVRlDGbRGSvnS','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '1.99 seconds', 'wJaXMnPKEVRlDGbRGSvnS','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.86.29 ================================
createData('192.168.86.29', '0.30 seconds', 'AkwrUGSYfLMzVAHTVfuCh','3306', 'tcp', 'open', 'mysql', 'syn-ack'),
// ===================== END of 192.168.86.29 =================================

// ===================== Target: 192.168.86.29 ================================
createData('192.168.86.29', '0.30 seconds', 'eAtxrxUIXSQAhXzIKizJY','3306', 'tcp', 'open', 'mysql', 'syn-ack'),
// ===================== END of 192.168.86.29 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '2.40 seconds', 'SgkKDivNVPiOVErScVfGu','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '2.40 seconds', 'SgkKDivNVPiOVErScVfGu','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '2.40 seconds', 'SgkKDivNVPiOVErScVfGu','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '2.40 seconds', 'SgkKDivNVPiOVErScVfGu','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '2.40 seconds', 'SgkKDivNVPiOVErScVfGu','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '2.40 seconds', 'SgkKDivNVPiOVErScVfGu','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.1.250 ================================
createData('192.168.1.250', '0.27 seconds', 'MiVsFYOcJruIIDRKKDmEL','53', 'tcp', 'open', 'domain', 'syn-ack'),
createData('192.168.1.250', '0.27 seconds', 'MiVsFYOcJruIIDRKKDmEL','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('192.168.1.250', '0.27 seconds', 'MiVsFYOcJruIIDRKKDmEL','443', 'tcp', 'open', 'https', 'syn-ack'),
createData('192.168.1.250', '0.27 seconds', 'MiVsFYOcJruIIDRKKDmEL','49152', 'tcp', 'open', 'unknown', 'syn-ack'),
// ===================== END of 192.168.1.250 =================================
]