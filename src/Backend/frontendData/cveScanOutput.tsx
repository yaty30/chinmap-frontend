interface Data {scanId: string, cve: string, info: string,}

function createData(scanId: string, cve: string, info: string): Data {return {scanId, cve, info};}

export const rows = [
    createData('','', '',),


// ===================== Target: 202.75.88.23 ================================
// ===================== END of 202.75.88.23 =================================

// ===================== Target: google.com ================================
// ===================== END of google.com =================================
].sort((a, b) => (a.cve < b.cve ? -1 : 1));