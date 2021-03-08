interface Data {target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string,}

function createData(target: string, timestamp: string, scanId: string, portno: string, port: string, status: string, service: string, ): Data {return {target, timestamp, scanId, portno, port, status, service};}

export const rows = [
    createData('','', '','','','', '',),

// ===================== Target: 192.168.1.1 ================================
createData('192.168.1.1', '0.34 seconds', 'LQJYOtOnyEThiCmGzkqmw','53', 'tcp', 'open', 'domain'),
createData('192.168.1.1', '0.34 seconds', 'LQJYOtOnyEThiCmGzkqmw','80', 'tcp', 'open', 'http'),
createData('192.168.1.1', '0.34 seconds', 'LQJYOtOnyEThiCmGzkqmw','548', 'tcp', 'open', 'afp'),
createData('192.168.1.1', '0.34 seconds', 'LQJYOtOnyEThiCmGzkqmw','631', 'tcp', 'open', 'ipp'),
createData('192.168.1.1', '0.34 seconds', 'LQJYOtOnyEThiCmGzkqmw','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.7 ================================
createData('192.168.1.7', '0.26 seconds', 'IhukhpCeBMUtCEZfpfqli','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.7 ================================
createData('192.168.1.7', '0.21 seconds', 'YWOqYKNzgEHmFvCnSpXEG','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.7 ================================
createData('192.168.1.7', '0.20 seconds', 'GVOCXvebBzlabDVnOInzs','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: 192.168.1.7 ================================
createData('192.168.1.7', '0.26 seconds', 'EpwCMDyUtOSAUPXJPIckG','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.7 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '2.18 seconds', 'AxGTyvWbrBszKDZRDrsOm','22', 'tcp', 'open', 'ssh'),
createData('scanme.nmap.org', '2.18 seconds', 'AxGTyvWbrBszKDZRDrsOm','25', 'tcp', 'filtered', 'smtp'),
createData('scanme.nmap.org', '2.18 seconds', 'AxGTyvWbrBszKDZRDrsOm','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '2.18 seconds', 'AxGTyvWbrBszKDZRDrsOm','135', 'tcp', 'filtered', 'msrpc'),
createData('scanme.nmap.org', '2.18 seconds', 'AxGTyvWbrBszKDZRDrsOm','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('scanme.nmap.org', '2.18 seconds', 'AxGTyvWbrBszKDZRDrsOm','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.1.1 ================================
createData('192.168.1.1', '0.37 seconds', 'PtipQoqNrLhbSOoncVjZa','53', 'tcp', 'open', 'domain'),
createData('192.168.1.1', '0.37 seconds', 'PtipQoqNrLhbSOoncVjZa','80', 'tcp', 'open', 'http'),
createData('192.168.1.1', '0.37 seconds', 'PtipQoqNrLhbSOoncVjZa','548', 'tcp', 'open', 'afp'),
createData('192.168.1.1', '0.37 seconds', 'PtipQoqNrLhbSOoncVjZa','631', 'tcp', 'open', 'ipp'),
createData('192.168.1.1', '0.37 seconds', 'PtipQoqNrLhbSOoncVjZa','5000', 'tcp', 'open', 'upnp'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '3.39 seconds', 'axJNxVlDvYnKdTVRaloZf','22', 'tcp', 'open', 'ssh'),
createData('scanme.nmap.org', '3.39 seconds', 'axJNxVlDvYnKdTVRaloZf','25', 'tcp', 'filtered', 'smtp'),
createData('scanme.nmap.org', '3.39 seconds', 'axJNxVlDvYnKdTVRaloZf','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '3.39 seconds', 'axJNxVlDvYnKdTVRaloZf','135', 'tcp', 'filtered', 'msrpc'),
createData('scanme.nmap.org', '3.39 seconds', 'axJNxVlDvYnKdTVRaloZf','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('scanme.nmap.org', '3.39 seconds', 'axJNxVlDvYnKdTVRaloZf','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '1.99 seconds', 'cPnMQvjAxwxfIzYoTSmSu','22', 'tcp', 'open', 'ssh'),
createData('scanme.nmap.org', '1.99 seconds', 'cPnMQvjAxwxfIzYoTSmSu','25', 'tcp', 'filtered', 'smtp'),
createData('scanme.nmap.org', '1.99 seconds', 'cPnMQvjAxwxfIzYoTSmSu','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '1.99 seconds', 'cPnMQvjAxwxfIzYoTSmSu','135', 'tcp', 'filtered', 'msrpc'),
createData('scanme.nmap.org', '1.99 seconds', 'cPnMQvjAxwxfIzYoTSmSu','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('scanme.nmap.org', '1.99 seconds', 'cPnMQvjAxwxfIzYoTSmSu','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '1.94 seconds', 'sJGGVAEvNDSGHcknTLkPb','22', 'tcp', 'open', 'ssh'),
createData('scanme.nmap.org', '1.94 seconds', 'sJGGVAEvNDSGHcknTLkPb','25', 'tcp', 'filtered', 'smtp'),
createData('scanme.nmap.org', '1.94 seconds', 'sJGGVAEvNDSGHcknTLkPb','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '1.94 seconds', 'sJGGVAEvNDSGHcknTLkPb','135', 'tcp', 'filtered', 'msrpc'),
createData('scanme.nmap.org', '1.94 seconds', 'sJGGVAEvNDSGHcknTLkPb','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('scanme.nmap.org', '1.94 seconds', 'sJGGVAEvNDSGHcknTLkPb','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('scanme.nmap.org', '2.03 seconds', 'zHcSEKzhuHFadSjdNpFcE','22', 'tcp', 'open', 'ssh'),
createData('scanme.nmap.org', '2.03 seconds', 'zHcSEKzhuHFadSjdNpFcE','25', 'tcp', 'filtered', 'smtp'),
createData('scanme.nmap.org', '2.03 seconds', 'zHcSEKzhuHFadSjdNpFcE','80', 'tcp', 'open', 'http'),
createData('scanme.nmap.org', '2.03 seconds', 'zHcSEKzhuHFadSjdNpFcE','135', 'tcp', 'filtered', 'msrpc'),
createData('scanme.nmap.org', '2.03 seconds', 'zHcSEKzhuHFadSjdNpFcE','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('scanme.nmap.org', '2.03 seconds', 'zHcSEKzhuHFadSjdNpFcE','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================
]