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

// ===================== Target: 127.0.0.1 ================================
createData('quRhTSwyFdvdOwxcqBhMT','631', 'tcp', 'open', 'ipp'),
createData('quRhTSwyFdvdOwxcqBhMT','3001', 'tcp', 'open', 'nessus'),
createData('quRhTSwyFdvdOwxcqBhMT','3306', 'tcp', 'open', 'mysql'),
createData('quRhTSwyFdvdOwxcqBhMT','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 127.0.0.1 =================================

// ===================== Target: 10.107.208.157 ================================
createData('QltQpoJxkYErQKiPnpomU','3001', 'tcp', 'open', 'nessus'),
createData('QltQpoJxkYErQKiPnpomU','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 10.107.208.157 =================================

// ===================== Target: 127.0.0.1 ================================
createData('ZMaQvhOKLtErrzNsWejYd','3001', 'tcp', 'open', 'nessus'),
createData('ZMaQvhOKLtErrzNsWejYd','3306', 'tcp', 'open', 'mysql'),
createData('ZMaQvhOKLtErrzNsWejYd','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 127.0.0.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('euLzVJfJskLutpzmdJybX','22', 'tcp', 'filtered', 'ssh'),
createData('euLzVJfJskLutpzmdJybX','23', 'tcp', 'filtered', 'telnet'),
createData('euLzVJfJskLutpzmdJybX','80', 'tcp', 'open', 'http'),
createData('euLzVJfJskLutpzmdJybX','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('euLzVJfJskLutpzmdJybX','515', 'tcp', 'filtered', 'printer'),
createData('euLzVJfJskLutpzmdJybX','9929', 'tcp', 'open', 'nping-echo'),
createData('euLzVJfJskLutpzmdJybX','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 127.0.0.1 ================================
createData('tSPsoHHfOTYCEwxBrPjOq','3001', 'tcp', 'open', 'http'),
createData('tSPsoHHfOTYCEwxBrPjOq','3306', 'tcp', 'open', 'mysql'),
createData('tSPsoHHfOTYCEwxBrPjOq','5000', 'tcp', 'open', 'http'),
// ===================== END of 127.0.0.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('slbSwXVOEiEtDablAWrsZ','53', 'tcp', 'open', 'domain'),
createData('slbSwXVOEiEtDablAWrsZ','80', 'tcp', 'open', 'tcpwrapped'),
createData('slbSwXVOEiEtDablAWrsZ','548', 'tcp', 'open', 'afp'),
createData('slbSwXVOEiEtDablAWrsZ','631', 'tcp', 'open', 'ipp?'),
createData('slbSwXVOEiEtDablAWrsZ','5000', 'tcp', 'open', 'tcpwrapped'),
createData('slbSwXVOEiEtDablAWrsZ','8200', 'tcp', 'open', 'tcpwrapped'),
createData('slbSwXVOEiEtDablAWrsZ','20005', 'tcp', 'open', 'btx?'),
// ===================== END of 192.168.1.1 =================================
]