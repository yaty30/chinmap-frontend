interface Data {scanId: string, portno: string, port: string, status: string, service: string,}

function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}

export const rows = [
createData('','','','','',),

// ===================== Target: 192.168.1.1 ================================
createData('yIxmVhWdoldaVpfNOaIoT','53', 'tcp', 'open', 'domain'),
createData('yIxmVhWdoldaVpfNOaIoT','80', 'tcp', 'open', 'http'),
createData('yIxmVhWdoldaVpfNOaIoT','548', 'tcp', 'open', 'afp'),
createData('yIxmVhWdoldaVpfNOaIoT','631', 'tcp', 'open', 'ipp'),
createData('yIxmVhWdoldaVpfNOaIoT','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('DwhlyyvJMwnJzXXtFDKkQ','53', 'tcp', 'open', 'domain'),
createData('DwhlyyvJMwnJzXXtFDKkQ','80', 'tcp', 'open', 'http'),
createData('DwhlyyvJMwnJzXXtFDKkQ','548', 'tcp', 'open', 'afp'),
createData('DwhlyyvJMwnJzXXtFDKkQ','631', 'tcp', 'open', 'ipp'),
createData('DwhlyyvJMwnJzXXtFDKkQ','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('ddxwcuJKVOpMthvjQIUxY','22', 'tcp', 'open', 'ssh'),
createData('ddxwcuJKVOpMthvjQIUxY','25', 'tcp', 'filtered', 'smtp'),
createData('ddxwcuJKVOpMthvjQIUxY','80', 'tcp', 'open', 'http'),
createData('ddxwcuJKVOpMthvjQIUxY','135', 'tcp', 'filtered', 'msrpc'),
createData('ddxwcuJKVOpMthvjQIUxY','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('ddxwcuJKVOpMthvjQIUxY','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 168.235.74.9 ================================
createData('ORPUVElpkSxAbqWaaSRoI','80', 'tcp', 'open', 'http'),
createData('ORPUVElpkSxAbqWaaSRoI','161', 'udp', 'closed', 'snmp'),
// ===================== END of 168.235.74.9 =================================

// ===================== Target: 192.168.1.1 ================================
createData('eohyxHbEwZKbPaGJpykNG','53', 'tcp', 'open', 'domain'),
createData('eohyxHbEwZKbPaGJpykNG','80', 'tcp', 'open', 'http'),
createData('eohyxHbEwZKbPaGJpykNG','548', 'tcp', 'open', 'afp'),
createData('eohyxHbEwZKbPaGJpykNG','631', 'tcp', 'open', 'ipp'),
createData('eohyxHbEwZKbPaGJpykNG','5000', 'tcp', 'open', 'upnp'),
createData('eohyxHbEwZKbPaGJpykNG','8200', 'tcp', 'open', 'trivnet1'),
createData('eohyxHbEwZKbPaGJpykNG','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('QJcESrLeBQvVRKqnvieKd','53', 'tcp', 'open', 'domain'),
createData('QJcESrLeBQvVRKqnvieKd','80', 'tcp', 'open', 'http'),
createData('QJcESrLeBQvVRKqnvieKd','548', 'tcp', 'open', 'afp'),
createData('QJcESrLeBQvVRKqnvieKd','631', 'tcp', 'open', 'ipp'),
createData('QJcESrLeBQvVRKqnvieKd','5000', 'tcp', 'open', 'upnp'),
createData('QJcESrLeBQvVRKqnvieKd','8200', 'tcp', 'open', 'trivnet1'),
createData('QJcESrLeBQvVRKqnvieKd','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('dLyuCiGAAmFPZbMjmNJan','53', 'tcp', 'open', 'domain'),
createData('dLyuCiGAAmFPZbMjmNJan','80', 'tcp', 'open', 'http'),
createData('dLyuCiGAAmFPZbMjmNJan','548', 'tcp', 'open', 'afp'),
createData('dLyuCiGAAmFPZbMjmNJan','631', 'tcp', 'open', 'ipp'),
createData('dLyuCiGAAmFPZbMjmNJan','5000', 'tcp', 'open', 'upnp'),
createData('dLyuCiGAAmFPZbMjmNJan','8200', 'tcp', 'open', 'trivnet1'),
createData('dLyuCiGAAmFPZbMjmNJan','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('GGdnuXkyBdRImhBzWbQlj','53', 'tcp', 'open', 'domain'),
createData('GGdnuXkyBdRImhBzWbQlj','80', 'tcp', 'open', 'http'),
createData('GGdnuXkyBdRImhBzWbQlj','548', 'tcp', 'open', 'afp'),
createData('GGdnuXkyBdRImhBzWbQlj','631', 'tcp', 'open', 'ipp'),
createData('GGdnuXkyBdRImhBzWbQlj','5000', 'tcp', 'open', 'upnp'),
createData('GGdnuXkyBdRImhBzWbQlj','8200', 'tcp', 'open', 'trivnet1'),
createData('GGdnuXkyBdRImhBzWbQlj','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('jRrgxjzPQaWZWxBLIrhYY','53', 'tcp', 'open', 'domain'),
createData('jRrgxjzPQaWZWxBLIrhYY','80', 'tcp', 'open', 'http'),
createData('jRrgxjzPQaWZWxBLIrhYY','548', 'tcp', 'open', 'afp'),
createData('jRrgxjzPQaWZWxBLIrhYY','631', 'tcp', 'open', 'ipp'),
createData('jRrgxjzPQaWZWxBLIrhYY','5000', 'tcp', 'open', 'upnp'),
createData('jRrgxjzPQaWZWxBLIrhYY','8200', 'tcp', 'open', 'trivnet1'),
createData('jRrgxjzPQaWZWxBLIrhYY','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.7 ================================
createData('rzMroPpERxVfieJkvoijL','53', 'tcp', 'open', 'domain'),
createData('rzMroPpERxVfieJkvoijL','3001', 'tcp', 'open', 'nessus'),
createData('rzMroPpERxVfieJkvoijL','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.7 ================================
createData('MjVtwzrItfQFJeOFPMIgK','53', 'tcp', 'open', 'domain'),
createData('MjVtwzrItfQFJeOFPMIgK','3001', 'tcp', 'open', 'nessus'),
createData('MjVtwzrItfQFJeOFPMIgK','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================
]