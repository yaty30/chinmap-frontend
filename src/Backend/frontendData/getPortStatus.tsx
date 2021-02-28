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


// ===================== Target: 192.168.1.7 ================================
createData('YmJHDIiOULRojXEbWDiSG','53', 'tcp', 'open', 'domain'),
createData('YmJHDIiOULRojXEbWDiSG','3001', 'tcp', 'open', 'nessus'),
createData('YmJHDIiOULRojXEbWDiSG','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.7 ================================
createData('IYKFFNeLkJRJtMBQzyHaZ','53', 'tcp', 'open', 'domain'),
createData('IYKFFNeLkJRJtMBQzyHaZ','3001', 'tcp', 'open', 'nessus'),
createData('IYKFFNeLkJRJtMBQzyHaZ','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.7 ================================
createData('GCuOwzJWNGyOBtUhVxqGE','53', 'tcp', 'open', 'domain'),
createData('GCuOwzJWNGyOBtUhVxqGE','3001', 'tcp', 'open', 'nessus'),
createData('GCuOwzJWNGyOBtUhVxqGE','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.1 ================================
createData('mjRQIYqisiMRboVKbQhxn','53', 'tcp', 'open', 'domain'),
createData('mjRQIYqisiMRboVKbQhxn','80', 'tcp', 'open', 'http'),
createData('mjRQIYqisiMRboVKbQhxn','548', 'tcp', 'open', 'afp'),
createData('mjRQIYqisiMRboVKbQhxn','631', 'tcp', 'open', 'ipp'),
createData('mjRQIYqisiMRboVKbQhxn','5000', 'tcp', 'open', 'upnp'),
createData('mjRQIYqisiMRboVKbQhxn','8200', 'tcp', 'open', 'trivnet1'),
createData('mjRQIYqisiMRboVKbQhxn','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.7 ================================
createData('olEjVWbJGVEYkzeyCTZJI','53', 'tcp', 'open', 'domain'),
createData('olEjVWbJGVEYkzeyCTZJI','3001', 'tcp', 'open', 'nessus'),
createData('olEjVWbJGVEYkzeyCTZJI','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.1 ================================
createData('nhEHJuovJTHSpztmgbWcI','53', 'tcp', 'open', 'domain'),
createData('nhEHJuovJTHSpztmgbWcI','80', 'tcp', 'open', 'http'),
createData('nhEHJuovJTHSpztmgbWcI','548', 'tcp', 'open', 'afp'),
createData('nhEHJuovJTHSpztmgbWcI','631', 'tcp', 'open', 'ipp'),
createData('nhEHJuovJTHSpztmgbWcI','5000', 'tcp', 'open', 'upnp'),
createData('nhEHJuovJTHSpztmgbWcI','8200', 'tcp', 'open', 'trivnet1'),
createData('nhEHJuovJTHSpztmgbWcI','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================
]