interface Data {scanId: string, hop: string, host: string, protocol: string, blockedPorts: string}

function createData(scanId: string, hop: string, host: string, protocol: string, blockedPorts: string): Data {return {scanId, hop, host, protocol, blockedPorts};}

export const rows = [
    createData('','','','',''),


// ===================== Target: neopets.com ================================
// ===================== END of neopets.com =================================

// ===================== Target: scanme.nmap.org ================================
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('IYpUQDqeAQHPaonnEselp', '_2','125.59.20.1','tcp','25,135,139,445,1434'),
// ===================== END of scanme.nmap.org =================================
].sort((a, b) => (a.hop < b.hop ? -1 : 1));