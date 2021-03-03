interface Data {scanId: string, portno: string, port: string, status: string, service: string,}

function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}

export const rows = [
    createData('','','','','',),


// ===================== Target: 10.107.208.157 ================================
createData('BuGFZdhNqoMlzRdVfpUmL','3001', 'tcp', 'open', 'nessus'),
createData('BuGFZdhNqoMlzRdVfpUmL','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 10.107.208.157 =================================

// ===================== Target: scanme.nmap.org ================================
createData('ZfnDLPDBeMqkLRQCZaiav','22', 'tcp', 'filtered', 'ssh'),
createData('ZfnDLPDBeMqkLRQCZaiav','23', 'tcp', 'filtered', 'telnet'),
createData('ZfnDLPDBeMqkLRQCZaiav','80', 'tcp', 'open', 'http'),
createData('ZfnDLPDBeMqkLRQCZaiav','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('ZfnDLPDBeMqkLRQCZaiav','515', 'tcp', 'filtered', 'printer'),
createData('ZfnDLPDBeMqkLRQCZaiav','9929', 'tcp', 'open', 'nping-echo'),
createData('ZfnDLPDBeMqkLRQCZaiav','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================
]