interface Data {scanId: string, portno: string, port: string, status: string, service: string,}

function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}

export const rows = [
createData('','','','','',),
// ===================== Target: scanme.nmap.org ================================
createData('ddxwcuJKVOpMthvjQIUxY','22', 'tcp', 'open', 'ssh'),
createData('ddxwcuJKVOpMthvjQIUxY','25', 'tcp', 'filtered', 'smtp'),
createData('ddxwcuJKVOpMthvjQIUxY','80', 'tcp', 'open', 'http'),
createData('ddxwcuJKVOpMthvjQIUxY','135', 'tcp', 'filtered', 'msrpc'),
createData('ddxwcuJKVOpMthvjQIUxY','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('ddxwcuJKVOpMthvjQIUxY','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('BNUhtbnTzNRthehmofeAU','22', 'tcp', 'open', 'ssh'),
createData('BNUhtbnTzNRthehmofeAU','25', 'tcp', 'filtered', 'smtp'),
createData('BNUhtbnTzNRthehmofeAU','80', 'tcp', 'open', 'http'),
createData('BNUhtbnTzNRthehmofeAU','135', 'tcp', 'filtered', 'msrpc'),
createData('BNUhtbnTzNRthehmofeAU','137', 'tcp', 'filtered', 'netbios-ns'),
createData('BNUhtbnTzNRthehmofeAU','138', 'tcp', 'filtered', 'netbios-dgm'),
createData('BNUhtbnTzNRthehmofeAU','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('BNUhtbnTzNRthehmofeAU','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('BNUhtbnTzNRthehmofeAU','3372', 'tcp', 'filtered', 'msdtc'),
createData('BNUhtbnTzNRthehmofeAU','9929', 'tcp', 'open', 'nping-echo'),
createData('BNUhtbnTzNRthehmofeAU','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.1.1 ================================
createData('MJQhFPgfDGYZDPwgPdoqF','53', 'tcp', 'open', 'domain'),
createData('MJQhFPgfDGYZDPwgPdoqF','80', 'tcp', 'open', 'http'),
createData('MJQhFPgfDGYZDPwgPdoqF','548', 'tcp', 'open', 'afp'),
createData('MJQhFPgfDGYZDPwgPdoqF','631', 'tcp', 'open', 'ipp'),
createData('MJQhFPgfDGYZDPwgPdoqF','5000', 'tcp', 'open', 'upnp'),
createData('MJQhFPgfDGYZDPwgPdoqF','8200', 'tcp', 'open', 'trivnet1'),
createData('MJQhFPgfDGYZDPwgPdoqF','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================
]