interface Data {scanId: string, cve: string, info: string,}

function createData(scanId: string, cve: string, info: string): Data {return {scanId, cve, info};}

export const rows = [
    createData('','', '',),


// ===================== Target: neopets.com ================================
// ===================== END of neopets.com =================================
].sort((a, b) => (a.cve < b.cve ? -1 : 1));