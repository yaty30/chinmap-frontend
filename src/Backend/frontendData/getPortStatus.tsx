interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, version: string): Data {return {target, timestamp, scanId, portno, port, status, service, version};}

export const rows = [
    createData('','', '','','','', '',''),


// ===================== Target: scamne.nmap.org ================================
createData('scamne.nmap.org', '4.43 seconds', 'yZdUqNyxaSIVnedGwFjdL','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scamne.nmap.org', '4.43 seconds', 'yZdUqNyxaSIVnedGwFjdL','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scamne.nmap.org', '4.43 seconds', 'yZdUqNyxaSIVnedGwFjdL','113', 'tcp', 'closed', 'ident', 'reset'),
createData('scamne.nmap.org', '4.43 seconds', 'yZdUqNyxaSIVnedGwFjdL','443', 'tcp', 'open', 'https', 'syn-ack'),
// ===================== END of scamne.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '1.95 seconds', 'NLqxZysdsVFBlIZIQMQfm','22', 'tcp', 'open', 'ssh', 'syn-ack'),
createData('scanme.nmap.org', '1.95 seconds', 'NLqxZysdsVFBlIZIQMQfm','25', 'tcp', 'filtered', 'smtp', 'no-response'),
createData('scanme.nmap.org', '1.95 seconds', 'NLqxZysdsVFBlIZIQMQfm','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('scanme.nmap.org', '1.95 seconds', 'NLqxZysdsVFBlIZIQMQfm','135', 'tcp', 'filtered', 'msrpc', 'no-response'),
createData('scanme.nmap.org', '1.95 seconds', 'NLqxZysdsVFBlIZIQMQfm','139', 'tcp', 'filtered', 'netbios-ssn', 'no-response'),
createData('scanme.nmap.org', '1.95 seconds', 'NLqxZysdsVFBlIZIQMQfm','445', 'tcp', 'filtered', 'microsoft-ds', 'no-response'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 202.75.91.117 ================================
createData('202.75.91.117', '2.97 seconds', 'XDWjLcCMMCuQBncaDWpVv','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('202.75.91.117', '2.97 seconds', 'XDWjLcCMMCuQBncaDWpVv','443', 'tcp', 'open', 'https', 'syn-ack'),
// ===================== END of 202.75.91.117 =================================

// ===================== Target: 202.75.88.23 ================================
// ===================== END of 202.75.88.23 =================================

// ===================== Target: google.com ================================
createData('google.com', '1.99 seconds', 'QvVCoWKIczhLxkDWXtBNX','80', 'tcp', 'open', 'http', 'syn-ack'),
createData('google.com', '1.99 seconds', 'QvVCoWKIczhLxkDWXtBNX','443', 'tcp', 'open', 'https', 'syn-ack'),
// ===================== END of google.com =================================
]