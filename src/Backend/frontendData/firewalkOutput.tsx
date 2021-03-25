interface Data {scanId: string, hop: string, host: string, protocol: string, blockedPorts: string}

function createData(scanId: string, hop: string, host: string, protocol: string, blockedPorts: string): Data {return {scanId, hop, host, protocol, blockedPorts};}

export const rows = [
    createData('','','','',''),


// ===================== Target: scanme.nmap.org ================================
// ===================== END of scanme.nmap.org =================================
].sort((a, b) => (a.hop < b.hop ? -1 : 1));