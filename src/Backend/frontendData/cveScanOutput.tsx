interface Data {scanId: string, cve: string, info: string,}

function createData(scanId: string, cve: string, info: string): Data {return {scanId, cve, info};}

export const rows = [
    createData('','', '',),

].sort((a, b) => (a.cve < b.cve ? -1 : 1));