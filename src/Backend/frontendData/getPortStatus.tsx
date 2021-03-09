interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string): Data {return {target, timestamp, scanId, portno, port, status, service, version};}

export const rows = [
    createData('','', '','','','', '',''),

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '35.14 seconds', 'JmGDWcOuhrHObTDfnPxJA','22', 'tcp', 'open', 'ssh', 'OpenSSH'),
createData('scanme.nmap.org', '35.14 seconds', 'JmGDWcOuhrHObTDfnPxJA','25', 'tcp', 'filtered', 'smtp', '80/tcp'),
createData('scanme.nmap.org', '35.14 seconds', 'JmGDWcOuhrHObTDfnPxJA','135', 'tcp', 'filtered', 'msrpc', '139/tcp'),
createData('scanme.nmap.org', '35.14 seconds', 'JmGDWcOuhrHObTDfnPxJA','445', 'tcp', 'filtered', 'microsoft-ds', '3372/tcp'),
createData('scanme.nmap.org', '35.14 seconds', 'JmGDWcOuhrHObTDfnPxJA','9929', 'tcp', 'open', 'nping-echo', 'Nping'),
createData('scanme.nmap.org', '35.14 seconds', 'JmGDWcOuhrHObTDfnPxJA','31337', 'tcp', 'open', 'tcpwrapped', 'Aggressive'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '33.34 seconds', 'NgRnqdJZBsIWLBEvWoxKf','22', 'tcp', 'open', 'ssh', 'OpenSSH'),
createData('scanme.nmap.org', '33.34 seconds', 'NgRnqdJZBsIWLBEvWoxKf','25', 'tcp', 'filtered', 'smtp', '80/tcp'),
createData('scanme.nmap.org', '33.34 seconds', 'NgRnqdJZBsIWLBEvWoxKf','135', 'tcp', 'filtered', 'msrpc', '139/tcp'),
createData('scanme.nmap.org', '33.34 seconds', 'NgRnqdJZBsIWLBEvWoxKf','445', 'tcp', 'filtered', 'microsoft-ds', '3372/tcp'),
createData('scanme.nmap.org', '33.34 seconds', 'NgRnqdJZBsIWLBEvWoxKf','9929', 'tcp', 'open', 'nping-echo', 'Nping'),
createData('scanme.nmap.org', '33.34 seconds', 'NgRnqdJZBsIWLBEvWoxKf','31337', 'tcp', 'open', 'tcpwrapped', 'Aggressive'),
// ===================== END of scanme.nmap.org =================================
]