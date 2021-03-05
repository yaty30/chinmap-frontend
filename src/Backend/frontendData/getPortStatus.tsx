interface Data {scanId: string, portno: string, port: string, status: string, service: string,}

function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}

export const rows = [
    createData('','','','','',),


// ===================== Target: 192.168.1.1 ================================
createData('ftSycuPSzZyxHKCJEVmiJ','53', 'tcp', 'open', 'domain'),
createData('ftSycuPSzZyxHKCJEVmiJ','80', 'tcp', 'open', 'http'),
createData('ftSycuPSzZyxHKCJEVmiJ','548', 'tcp', 'open', 'afp'),
createData('ftSycuPSzZyxHKCJEVmiJ','631', 'tcp', 'open', 'ipp'),
createData('ftSycuPSzZyxHKCJEVmiJ','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: vtc.edu.hk ================================
// ===================== END of vtc.edu.hk =================================

// ===================== Target: scanme.nmap.org ================================
createData('bdDSbjWcMBzKCFwhLhpBj','22', 'tcp', 'open', 'ssh'),
createData('bdDSbjWcMBzKCFwhLhpBj','25', 'tcp', 'filtered', 'smtp'),
createData('bdDSbjWcMBzKCFwhLhpBj','80', 'tcp', 'open', 'http'),
createData('bdDSbjWcMBzKCFwhLhpBj','135', 'tcp', 'filtered', 'msrpc'),
createData('bdDSbjWcMBzKCFwhLhpBj','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('bdDSbjWcMBzKCFwhLhpBj','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('rMLUnZTdbmpEpuuLvtKxs','22', 'tcp', 'open', 'ssh'),
createData('rMLUnZTdbmpEpuuLvtKxs','25', 'tcp', 'filtered', 'smtp'),
createData('rMLUnZTdbmpEpuuLvtKxs','80', 'tcp', 'open', 'http'),
createData('rMLUnZTdbmpEpuuLvtKxs','135', 'tcp', 'filtered', 'msrpc'),
createData('rMLUnZTdbmpEpuuLvtKxs','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('rMLUnZTdbmpEpuuLvtKxs','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('rMLUnZTdbmpEpuuLvtKxs','5009', 'tcp', 'filtered', 'airport-admin'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.1.1 ================================
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('nSevMftgodyIwXVxsEocE','53', 'tcp', 'open', 'domain'),
createData('nSevMftgodyIwXVxsEocE','80', 'tcp', 'open', 'http'),
createData('nSevMftgodyIwXVxsEocE','548', 'tcp', 'open', 'afp'),
createData('nSevMftgodyIwXVxsEocE','631', 'tcp', 'open', 'ipp'),
createData('nSevMftgodyIwXVxsEocE','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('puTeXnAfNfCwhaEOgfHrH','53', 'tcp', 'open', 'domain'),
createData('puTeXnAfNfCwhaEOgfHrH','80', 'tcp', 'open', 'http'),
createData('puTeXnAfNfCwhaEOgfHrH','548', 'tcp', 'open', 'afp'),
createData('puTeXnAfNfCwhaEOgfHrH','631', 'tcp', 'open', 'ipp'),
createData('puTeXnAfNfCwhaEOgfHrH','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
// ===================== END of 192.168.1.1 =================================
]