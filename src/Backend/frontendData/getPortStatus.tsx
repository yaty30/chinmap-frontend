interface Data {scanId: string, portno: string, port: string, status: string, service: string,}

function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}

export const rows = [
    createData('','','','','',),

// ===================== Target: 192.168.1.1 ================================
createData('ruDdYMRlcpymMchTZzJFJ','53', 'tcp', 'open', 'domain'),
createData('ruDdYMRlcpymMchTZzJFJ','80', 'tcp', 'open', 'http'),
createData('ruDdYMRlcpymMchTZzJFJ','548', 'tcp', 'open', 'afp'),
createData('ruDdYMRlcpymMchTZzJFJ','631', 'tcp', 'open', 'ipp'),
createData('ruDdYMRlcpymMchTZzJFJ','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('wzWSaCvLiFghaXkTcLxCS','53', 'tcp', 'open', 'domain'),
createData('wzWSaCvLiFghaXkTcLxCS','80', 'tcp', 'open', 'http'),
createData('wzWSaCvLiFghaXkTcLxCS','548', 'tcp', 'open', 'afp'),
createData('wzWSaCvLiFghaXkTcLxCS','631', 'tcp', 'open', 'ipp'),
createData('wzWSaCvLiFghaXkTcLxCS','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('SCHrdbVfxQfKtIqwsPJcn','53', 'tcp', 'open', 'domain'),
createData('SCHrdbVfxQfKtIqwsPJcn','80', 'tcp', 'open', 'http'),
createData('SCHrdbVfxQfKtIqwsPJcn','548', 'tcp', 'open', 'afp'),
createData('SCHrdbVfxQfKtIqwsPJcn','631', 'tcp', 'open', 'ipp'),
createData('SCHrdbVfxQfKtIqwsPJcn','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('fWhdMxLFQjsqmAKORTNWr','22', 'tcp', 'open', 'ssh'),
createData('fWhdMxLFQjsqmAKORTNWr','80', 'tcp', 'open', 'http'),
createData('fWhdMxLFQjsqmAKORTNWr','9929', 'tcp', 'open', 'nping-echo'),
createData('fWhdMxLFQjsqmAKORTNWr','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.1.1 ================================
createData('HKRAdXnqfxalYmPjUGzic','53', 'tcp', 'open', 'domain'),
createData('HKRAdXnqfxalYmPjUGzic','80', 'tcp', 'open', 'http'),
createData('HKRAdXnqfxalYmPjUGzic','548', 'tcp', 'open', 'afp'),
createData('HKRAdXnqfxalYmPjUGzic','631', 'tcp', 'open', 'ipp'),
createData('HKRAdXnqfxalYmPjUGzic','5000', 'tcp', 'open', 'upnp'),
createData('HKRAdXnqfxalYmPjUGzic','8200', 'tcp', 'open', 'trivnet1'),
createData('HKRAdXnqfxalYmPjUGzic','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('UZDSlyNTxzpkaiKeCJHOs','53', 'tcp', 'open', 'domain'),
createData('UZDSlyNTxzpkaiKeCJHOs','80', 'tcp', 'open', 'http'),
createData('UZDSlyNTxzpkaiKeCJHOs','548', 'tcp', 'open', 'afp'),
createData('UZDSlyNTxzpkaiKeCJHOs','631', 'tcp', 'open', 'ipp'),
createData('UZDSlyNTxzpkaiKeCJHOs','5000', 'tcp', 'open', 'upnp'),
createData('UZDSlyNTxzpkaiKeCJHOs','8200', 'tcp', 'open', 'trivnet1'),
createData('UZDSlyNTxzpkaiKeCJHOs','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================
]