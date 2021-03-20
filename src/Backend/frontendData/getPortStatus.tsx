interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string): Data {return {target, timestamp, scanId, portno, port, status, service, version};}

export const rows = [
    createData('','', '','','','', '',''),


// ===================== Target: 192.168.1.1 ================================
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '3.69 seconds', 'AKzWlggrLgUUrjEfnERVC','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '3.69 seconds', 'AKzWlggrLgUUrjEfnERVC','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '3.69 seconds', 'AKzWlggrLgUUrjEfnERVC','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '3.69 seconds', 'AKzWlggrLgUUrjEfnERVC','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '3.69 seconds', 'AKzWlggrLgUUrjEfnERVC','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '3.69 seconds', 'AKzWlggrLgUUrjEfnERVC','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================
]