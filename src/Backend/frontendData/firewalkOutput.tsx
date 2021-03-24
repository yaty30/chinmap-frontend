interface Data {scanId: string, hop: string, host: string, protocol: string, blockedPorts: string}

function createData(scanId: string, hop: string, host: string, protocol: string, blockedPorts: string): Data {return {scanId, hop, host, protocol, blockedPorts};}

export const rows = [
    createData('','','','',''),


// ===================== Target: scanme.nmap.org ================================
createData('AKzWlggrLgUUrjEfnERVC', '_12','216.6.33.114','tcp','119'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('lBsZUineakKTlIsSNmaHw', '_2','125.59.20.1','tcp','25,135,139,445,1434'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('TRlLFNZjQSbADHLFFstzv', '_2','125.59.20.1','tcp','25,135,139,445,1434'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('fEwEerhfWueUCNXAyGGqE', '_2','125.59.20.1','tcp','25,135,139,445,1434'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('qvuwXNuNfoUEJMMaWCxKh', '_2','125.59.20.1','tcp','25,135,139,445,1434'),
// ===================== END of scanme.nmap.org =================================
].sort((a, b) => (a.hop < b.hop ? -1 : 1));