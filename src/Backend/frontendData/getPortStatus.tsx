interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string): Data {return {target, timestamp, scanId, portno, port, status, service, version};}

export const rows = [
    createData('','', '','','','', '',''),


// ===================== Target: 192.168.1.1 ================================
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '1.95 seconds', 'TRlLFNZjQSbADHLFFstzv','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '1.95 seconds', 'TRlLFNZjQSbADHLFFstzv','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '1.95 seconds', 'TRlLFNZjQSbADHLFFstzv','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '1.95 seconds', 'TRlLFNZjQSbADHLFFstzv','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '1.95 seconds', 'TRlLFNZjQSbADHLFFstzv','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '1.95 seconds', 'TRlLFNZjQSbADHLFFstzv','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '3.93 seconds', 'fEwEerhfWueUCNXAyGGqE','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '3.93 seconds', 'fEwEerhfWueUCNXAyGGqE','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '3.93 seconds', 'fEwEerhfWueUCNXAyGGqE','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '3.93 seconds', 'fEwEerhfWueUCNXAyGGqE','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '3.93 seconds', 'fEwEerhfWueUCNXAyGGqE','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '3.93 seconds', 'fEwEerhfWueUCNXAyGGqE','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','137', 'tcp', 'filtered', 'netbios-ns', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','138', 'tcp', 'filtered', 'netbios-dgm', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','1434', 'tcp', 'filtered', 'ms-sql-m', 'no-response'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','9929', 'tcp', 'open', 'nping-echo', 'syn-ack'),
createData('scanme.nmap.org', '199.28 seconds', 'qvuwXNuNfoUEJMMaWCxKh','31337', 'tcp', 'open', 'Elite', 'syn-ack'),
// ===================== END of scanme.nmap.org =================================
]