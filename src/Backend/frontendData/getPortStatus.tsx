interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string): Data {return {target, timestamp, scanId, portno, port, status, service, version};}

export const rows = [
    createData('','', '','','','', '',''),


// ===================== Target: 192.158.1.0sn=24 ================================
// ===================== END of 192.158.1.0sn=24 =================================

// ===================== Target: 192.168.86.0sn=24 ================================
// ===================== END of 192.168.86.0sn=24 =================================

// ===================== Target: 192.168.1.0sn=24 ================================
// ===================== END of 192.168.1.0sn=24 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '5.41 seconds', 'GSFAFBMYjjmXkHqoIykQH','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '5.41 seconds', 'GSFAFBMYjjmXkHqoIykQH','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '5.41 seconds', 'GSFAFBMYjjmXkHqoIykQH','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '5.41 seconds', 'GSFAFBMYjjmXkHqoIykQH','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '5.41 seconds', 'GSFAFBMYjjmXkHqoIykQH','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '5.41 seconds', 'GSFAFBMYjjmXkHqoIykQH','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: neopets.com ================================
createData('neopets.com', '24.04 seconds', 'kCCNTSfyNbTtiqPfuOHre','80', 'tcp', 'open', 'http', 'syn-ack'),
// ===================== END of neopets.com =================================

// ===================== Target: neopets.com ================================
createData('neopets.com', '62.03 seconds', 'zTIywiLyngtcwedWOmVEj','80', 'tcp', 'open', 'http', 'syn-ack'),
// ===================== END of neopets.com =================================

// ===================== Target: neopets.com ================================
createData('neopets.com', '23.83 seconds', 'CiadpTlKZPNdqcdsFmLGz','80', 'tcp', 'open', 'http', 'syn-ack'),
// ===================== END of neopets.com =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '5.52 seconds', 'VvRpTPLVdQJIqAqBkWiSW','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '5.52 seconds', 'VvRpTPLVdQJIqAqBkWiSW','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '5.52 seconds', 'VvRpTPLVdQJIqAqBkWiSW','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '5.52 seconds', 'VvRpTPLVdQJIqAqBkWiSW','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '5.52 seconds', 'VvRpTPLVdQJIqAqBkWiSW','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '5.52 seconds', 'VvRpTPLVdQJIqAqBkWiSW','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '8.07 seconds', 'IYpUQDqeAQHPaonnEselp','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '8.07 seconds', 'IYpUQDqeAQHPaonnEselp','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '8.07 seconds', 'IYpUQDqeAQHPaonnEselp','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '8.07 seconds', 'IYpUQDqeAQHPaonnEselp','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '8.07 seconds', 'IYpUQDqeAQHPaonnEselp','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '8.07 seconds', 'IYpUQDqeAQHPaonnEselp','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '7.20 seconds', 'gPYHfIIAMoKvKixWsTnvu','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '7.20 seconds', 'gPYHfIIAMoKvKixWsTnvu','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '7.20 seconds', 'gPYHfIIAMoKvKixWsTnvu','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '7.20 seconds', 'gPYHfIIAMoKvKixWsTnvu','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '7.20 seconds', 'gPYHfIIAMoKvKixWsTnvu','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '7.20 seconds', 'gPYHfIIAMoKvKixWsTnvu','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================
]