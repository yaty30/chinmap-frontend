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

// ===================== Target: 192.168.86.35 ================================
createData('192.168.86.35', '2.08 seconds', 'VTzPKyfshdhjkPnuaIOBC','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('192.168.86.35', '2.08 seconds', 'VTzPKyfshdhjkPnuaIOBC','135', 'tcp', 'open', 'msrpc', 'syn-ack'),
createData('192.168.86.35', '2.08 seconds', 'VTzPKyfshdhjkPnuaIOBC','139', 'tcp', 'open', 'netbios-ssn', 'syn-ack'),
createData('192.168.86.35', '2.08 seconds', 'VTzPKyfshdhjkPnuaIOBC','443', 'tcp', 'open', 'https', 'syn-ack'),
createData('192.168.86.35', '2.08 seconds', 'VTzPKyfshdhjkPnuaIOBC','445', 'tcp', 'open', 'microsoft-ds', 'syn-ack'),
createData('192.168.86.35', '2.08 seconds', 'VTzPKyfshdhjkPnuaIOBC','5357', 'tcp', 'open', 'wsdapi', 'syn-ack'),
// ===================== END of 192.168.86.35 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '5.16 seconds', 'SfqDTehOLKhStOtHZrnLX','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '5.16 seconds', 'SfqDTehOLKhStOtHZrnLX','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '5.16 seconds', 'SfqDTehOLKhStOtHZrnLX','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '5.16 seconds', 'SfqDTehOLKhStOtHZrnLX','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '5.16 seconds', 'SfqDTehOLKhStOtHZrnLX','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '5.16 seconds', 'SfqDTehOLKhStOtHZrnLX','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '3.50 seconds', 'SNorErFqtmhspkLmxXgqo','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '3.50 seconds', 'SNorErFqtmhspkLmxXgqo','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '3.50 seconds', 'SNorErFqtmhspkLmxXgqo','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '3.50 seconds', 'SNorErFqtmhspkLmxXgqo','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '3.50 seconds', 'SNorErFqtmhspkLmxXgqo','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '3.50 seconds', 'SNorErFqtmhspkLmxXgqo','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================
]