interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string,}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, ): Data {return {target, timestamp, scanId, portno, port, status, service};}

export const rows = [
    createData('','', '','','','', '',),

// ===================== Target: 192.168.1.1 ================================
createData('192.168.1.1', '0.26 seconds', 'UtcKkPAFwvwDBUToMgxml','53', 'tcp', 'open', 'domain'),
createData('192.168.1.1', '0.26 seconds', 'UtcKkPAFwvwDBUToMgxml','80', 'tcp', 'open', 'http'),
createData('192.168.1.1', '0.26 seconds', 'UtcKkPAFwvwDBUToMgxml','548', 'tcp', 'open', 'afp'),
createData('192.168.1.1', '0.26 seconds', 'UtcKkPAFwvwDBUToMgxml','631', 'tcp', 'open', 'ipp'),
createData('192.168.1.1', '0.26 seconds', 'UtcKkPAFwvwDBUToMgxml','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','53', 'tcp', 'open', 'domain'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','80', 'tcp', 'open', 'http'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','548', 'tcp', 'open', 'afp'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','631', 'tcp', 'open', 'ipp'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','1990', 'tcp', 'open', 'stun-p1'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','5000', 'tcp', 'open', 'upnp'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','5916', 'tcp', 'open', 'unknown'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','7272', 'tcp', 'open', 'watchme-7272'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','8200', 'tcp', 'open', 'trivnet1'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','20005', 'tcp', 'open', 'btx'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','33344', 'tcp', 'open', 'unknown'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','42080', 'tcp', 'open', 'unknown'),
createData('192.168.1.1', '15.87 seconds', 'RYWeVFHvqxaNTqPRqWLnO','42443', 'tcp', 'open', 'unknown'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','53', 'tcp', 'open', 'domain'),
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','80', 'tcp', 'open', 'http'),
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','548', 'tcp', 'open', 'afp'),
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','631', 'tcp', 'open', 'ipp'),
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','5000', 'tcp', 'open', 'upnp'),
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','8200', 'tcp', 'open', 'trivnet1'),
createData('192.168.1.1', '1.49 seconds', 'oScYjMgDMtXjnjObAvGGi','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('192.168.1.1', '0.30 seconds', 'WBswwIrRKqsKTWiUPZgVp','53', 'tcp', 'open', 'domain'),
createData('192.168.1.1', '0.30 seconds', 'WBswwIrRKqsKTWiUPZgVp','80', 'tcp', 'open', 'http'),
createData('192.168.1.1', '0.30 seconds', 'WBswwIrRKqsKTWiUPZgVp','548', 'tcp', 'open', 'afp'),
createData('192.168.1.1', '0.30 seconds', 'WBswwIrRKqsKTWiUPZgVp','631', 'tcp', 'open', 'ipp'),
createData('192.168.1.1', '0.30 seconds', 'WBswwIrRKqsKTWiUPZgVp','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '4.65 seconds', 'dnebKLxEHLjiNXQqVDLbn','22', 'tcp', 'open', 'ssh'),
createData('scanme.nmap.org', '4.65 seconds', 'dnebKLxEHLjiNXQqVDLbn','25', 'tcp', 'filtered', 'smtp'),
createData('scanme.nmap.org', '4.65 seconds', 'dnebKLxEHLjiNXQqVDLbn','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '4.65 seconds', 'dnebKLxEHLjiNXQqVDLbn','135', 'tcp', 'filtered', 'msrpc'),
createData('scanme.nmap.org', '4.65 seconds', 'dnebKLxEHLjiNXQqVDLbn','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('scanme.nmap.org', '4.65 seconds', 'dnebKLxEHLjiNXQqVDLbn','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '0.64 seconds', 'uLzlIzhmLZSJKDwtzhMyt','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '0.64 seconds', 'uLzlIzhmLZSJKDwtzhMyt','161', 'udp', 'closed', 'snmp'),
// ===================== END of scanme.nmap.org =================================
]