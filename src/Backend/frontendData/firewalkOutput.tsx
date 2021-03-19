interface Data {scanId: string, hop: string, host: string, protocol: string, blockedPorts: string}

function createData(scanId: string, hop: string, host: string, protocol: string, blockedPorts: string): Data {return {scanId, hop, host, protocol, blockedPorts};}

export const rows = [
    createData('','','','',''),



// ===================== Target: scanme.nmap.org ================================
createData('wJaXMnPKEVRlDGbRGSvnS', '_2','203.185.42.1','tcp','25,135,139,445,3372'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.86.29 ================================
// ===================== END of 192.168.86.29 =================================

// ===================== Target: 192.168.86.29 ================================
// ===================== END of 192.168.86.29 =================================

// ===================== Target: scanme.nmap.org ================================
createData('SgkKDivNVPiOVErScVfGu', '_2','125.59.20.1','tcp','25,135,139,445,1434'),
// ===================== END of scanme.nmap.org =================================
].sort((a, b) => (a.hop < b.hop ? -1 : 1));