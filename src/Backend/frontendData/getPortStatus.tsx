interface Data {scanId: string, portno: string, port: string, status: string, service: string,}

function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}

export const rows = [
createData('','','','','',),
// ===================== Target: scanme.nmap.org ================================
createData('ddxwcuJKVOpMthvjQIUxY','22', 'tcp', 'open', 'ssh'),
createData('ddxwcuJKVOpMthvjQIUxY','25', 'tcp', 'filtered', 'smtp'),
createData('ddxwcuJKVOpMthvjQIUxY','80', 'tcp', 'open', 'http'),
createData('ddxwcuJKVOpMthvjQIUxY','135', 'tcp', 'filtered', 'msrpc'),
createData('ddxwcuJKVOpMthvjQIUxY','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('ddxwcuJKVOpMthvjQIUxY','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('BNUhtbnTzNRthehmofeAU','22', 'tcp', 'open', 'ssh'),
createData('BNUhtbnTzNRthehmofeAU','25', 'tcp', 'filtered', 'smtp'),
createData('BNUhtbnTzNRthehmofeAU','80', 'tcp', 'open', 'http'),
createData('BNUhtbnTzNRthehmofeAU','135', 'tcp', 'filtered', 'msrpc'),
createData('BNUhtbnTzNRthehmofeAU','137', 'tcp', 'filtered', 'netbios-ns'),
createData('BNUhtbnTzNRthehmofeAU','138', 'tcp', 'filtered', 'netbios-dgm'),
createData('BNUhtbnTzNRthehmofeAU','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('BNUhtbnTzNRthehmofeAU','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('BNUhtbnTzNRthehmofeAU','3372', 'tcp', 'filtered', 'msdtc'),
createData('BNUhtbnTzNRthehmofeAU','9929', 'tcp', 'open', 'nping-echo'),
createData('BNUhtbnTzNRthehmofeAU','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: 192.168.1.1 ================================
createData('MJQhFPgfDGYZDPwgPdoqF','53', 'tcp', 'open', 'domain'),
createData('MJQhFPgfDGYZDPwgPdoqF','80', 'tcp', 'open', 'http'),
createData('MJQhFPgfDGYZDPwgPdoqF','548', 'tcp', 'open', 'afp'),
createData('MJQhFPgfDGYZDPwgPdoqF','631', 'tcp', 'open', 'ipp'),
createData('MJQhFPgfDGYZDPwgPdoqF','5000', 'tcp', 'open', 'upnp'),
createData('MJQhFPgfDGYZDPwgPdoqF','8200', 'tcp', 'open', 'trivnet1'),
createData('MJQhFPgfDGYZDPwgPdoqF','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('ijCCjRttPmAPWqdcfDQDi','22', 'tcp', 'open', 'ssh'),
createData('ijCCjRttPmAPWqdcfDQDi','25', 'tcp', 'filtered', 'smtp'),
createData('ijCCjRttPmAPWqdcfDQDi','80', 'tcp', 'open', 'http'),
createData('ijCCjRttPmAPWqdcfDQDi','135', 'tcp', 'filtered', 'msrpc'),
createData('ijCCjRttPmAPWqdcfDQDi','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('ijCCjRttPmAPWqdcfDQDi','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('efvvpejuKjqGHdiqpbmWp','22', 'tcp', 'open', 'ssh'),
createData('efvvpejuKjqGHdiqpbmWp','25', 'tcp', 'filtered', 'smtp'),
createData('efvvpejuKjqGHdiqpbmWp','80', 'tcp', 'open', 'http'),
createData('efvvpejuKjqGHdiqpbmWp','135', 'tcp', 'filtered', 'msrpc'),
createData('efvvpejuKjqGHdiqpbmWp','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('efvvpejuKjqGHdiqpbmWp','445', 'tcp', 'filtered', 'microsoft-ds'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('EXPtIuwQAGlIWmpYRaNci','80', 'tcp', 'open', 'http'),
createData('EXPtIuwQAGlIWmpYRaNci','161', 'udp', 'closed', 'snmp'),
// ===================== END of scanme.nmap.org =================================


// ===================== Target: 192.168.1.1 ================================
createData('sJbFCuGKprMGawJDnbWaZ','53', 'tcp', 'open', 'domain'),
createData('sJbFCuGKprMGawJDnbWaZ','80', 'tcp', 'open', 'http'),
createData('sJbFCuGKprMGawJDnbWaZ','548', 'tcp', 'open', 'afp'),
createData('sJbFCuGKprMGawJDnbWaZ','631', 'tcp', 'open', 'ipp'),
createData('sJbFCuGKprMGawJDnbWaZ','5000', 'tcp', 'open', 'upnp'),
createData('sJbFCuGKprMGawJDnbWaZ','8200', 'tcp', 'open', 'trivnet1'),
createData('sJbFCuGKprMGawJDnbWaZ','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('YHYZpeLdCwMMmXetoSxhr','53', 'tcp', 'open', 'domain'),
createData('YHYZpeLdCwMMmXetoSxhr','80', 'tcp', 'open', 'http'),
createData('YHYZpeLdCwMMmXetoSxhr','548', 'tcp', 'open', 'afp'),
createData('YHYZpeLdCwMMmXetoSxhr','631', 'tcp', 'open', 'ipp'),
createData('YHYZpeLdCwMMmXetoSxhr','5000', 'tcp', 'open', 'upnp'),
createData('YHYZpeLdCwMMmXetoSxhr','8200', 'tcp', 'open', 'trivnet1'),
createData('YHYZpeLdCwMMmXetoSxhr','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.1 ================================
createData('tUZNyJRmqDsTeOWmVfXpT','53', 'tcp', 'open', 'domain'),
createData('tUZNyJRmqDsTeOWmVfXpT','80', 'tcp', 'open', 'http'),
createData('tUZNyJRmqDsTeOWmVfXpT','548', 'tcp', 'open', 'afp'),
createData('tUZNyJRmqDsTeOWmVfXpT','631', 'tcp', 'open', 'ipp'),
createData('tUZNyJRmqDsTeOWmVfXpT','5000', 'tcp', 'open', 'upnp'),
createData('tUZNyJRmqDsTeOWmVfXpT','8200', 'tcp', 'open', 'trivnet1'),
createData('tUZNyJRmqDsTeOWmVfXpT','20005', 'tcp', 'open', 'btx'),
// ===================== END of 192.168.1.1 =================================

// ===================== Target: 192.168.1.0/24 ================================
createData('ncddFUqzWsBtHVReTrLJf','53', 'tcp', 'open', 'domain'),
createData('ncddFUqzWsBtHVReTrLJf','80', 'tcp', 'open', 'http'),
createData('ncddFUqzWsBtHVReTrLJf','548', 'tcp', 'open', 'afp'),
createData('ncddFUqzWsBtHVReTrLJf','631', 'tcp', 'open', 'ipp'),
createData('ncddFUqzWsBtHVReTrLJf','5000', 'tcp', 'open', 'upnp'),
createData('ncddFUqzWsBtHVReTrLJf','8200', 'tcp', 'open', 'trivnet1'),
createData('ncddFUqzWsBtHVReTrLJf','20005', 'tcp', 'open', 'btx'),
createData('ncddFUqzWsBtHVReTrLJf','4321', 'tcp', 'open', 'rwhois'),
createData('ncddFUqzWsBtHVReTrLJf','5000', 'tcp', 'open', 'upnp'),
createData('ncddFUqzWsBtHVReTrLJf','7000', 'tcp', 'open', 'afs3-fileserver'),
createData('ncddFUqzWsBtHVReTrLJf','10000', 'tcp', 'open', 'snet-sensor-mgmt'),
createData('ncddFUqzWsBtHVReTrLJf','85', 'tcp', 'filtered', 'mit-ml-dev'),
createData('ncddFUqzWsBtHVReTrLJf','1002', 'tcp', 'filtered', 'windows-icfw'),
createData('ncddFUqzWsBtHVReTrLJf','1132', 'tcp', 'filtered', 'kvm-via-ip'),
createData('ncddFUqzWsBtHVReTrLJf','2099', 'tcp', 'filtered', 'h2250-annex-g'),
createData('ncddFUqzWsBtHVReTrLJf','2605', 'tcp', 'filtered', 'bgpd'),
createData('ncddFUqzWsBtHVReTrLJf','2607', 'tcp', 'filtered', 'connection'),
createData('ncddFUqzWsBtHVReTrLJf','5907', 'tcp', 'filtered', 'unknown'),
createData('ncddFUqzWsBtHVReTrLJf','6692', 'tcp', 'filtered', 'unknown'),
createData('ncddFUqzWsBtHVReTrLJf','7070', 'tcp', 'filtered', 'realserver'),
createData('ncddFUqzWsBtHVReTrLJf','7435', 'tcp', 'filtered', 'unknown'),
createData('ncddFUqzWsBtHVReTrLJf','8081', 'tcp', 'filtered', 'blackice-icecap'),
createData('ncddFUqzWsBtHVReTrLJf','9111', 'tcp', 'filtered', 'DragonIDSConsole'),
createData('ncddFUqzWsBtHVReTrLJf','13722', 'tcp', 'filtered', 'netbackup'),
createData('ncddFUqzWsBtHVReTrLJf','49157', 'tcp', 'filtered', 'unknown'),
createData('ncddFUqzWsBtHVReTrLJf','62078', 'tcp', 'open', 'iphone-sync'),
createData('ncddFUqzWsBtHVReTrLJf','3000', 'tcp', 'open', 'ppp'),
createData('ncddFUqzWsBtHVReTrLJf','3000', 'tcp', 'open', 'ppp'),
createData('ncddFUqzWsBtHVReTrLJf','53', 'tcp', 'open', 'domain'),
createData('ncddFUqzWsBtHVReTrLJf','3001', 'tcp', 'open', 'nessus'),
createData('ncddFUqzWsBtHVReTrLJf','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.0/24 =================================

// ===================== Target: 192.168.1.0/24 ================================
createData('iMROXTPwVPduhrNtdOdhn','53', 'tcp', 'open', 'domain'),
createData('iMROXTPwVPduhrNtdOdhn','80', 'tcp', 'open', 'http'),
createData('iMROXTPwVPduhrNtdOdhn','548', 'tcp', 'open', 'afp'),
createData('iMROXTPwVPduhrNtdOdhn','631', 'tcp', 'open', 'ipp'),
createData('iMROXTPwVPduhrNtdOdhn','5000', 'tcp', 'open', 'upnp'),
createData('iMROXTPwVPduhrNtdOdhn','8200', 'tcp', 'open', 'trivnet1'),
createData('iMROXTPwVPduhrNtdOdhn','20005', 'tcp', 'open', 'btx'),
createData('iMROXTPwVPduhrNtdOdhn','62078', 'tcp', 'open', 'iphone-sync'),
createData('iMROXTPwVPduhrNtdOdhn','3000', 'tcp', 'open', 'ppp'),
createData('iMROXTPwVPduhrNtdOdhn','3000', 'tcp', 'open', 'ppp'),
createData('iMROXTPwVPduhrNtdOdhn','53', 'tcp', 'open', 'domain'),
createData('iMROXTPwVPduhrNtdOdhn','3001', 'tcp', 'open', 'nessus'),
createData('iMROXTPwVPduhrNtdOdhn','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.0/24 =================================

// ===================== Target: 192.168.1.0/24 ================================
createData('lYYCflwsDgoKErFLdNOCl','53', 'tcp', 'open', 'domain'),
createData('lYYCflwsDgoKErFLdNOCl','80', 'tcp', 'open', 'http'),
createData('lYYCflwsDgoKErFLdNOCl','548', 'tcp', 'open', 'afp'),
createData('lYYCflwsDgoKErFLdNOCl','631', 'tcp', 'open', 'ipp'),
createData('lYYCflwsDgoKErFLdNOCl','5000', 'tcp', 'open', 'upnp'),
createData('lYYCflwsDgoKErFLdNOCl','8200', 'tcp', 'open', 'trivnet1'),
createData('lYYCflwsDgoKErFLdNOCl','20005', 'tcp', 'open', 'btx'),
createData('lYYCflwsDgoKErFLdNOCl','62078', 'tcp', 'open', 'iphone-sync'),
createData('lYYCflwsDgoKErFLdNOCl','62078', 'tcp', 'open', 'iphone-sync'),
createData('lYYCflwsDgoKErFLdNOCl','3000', 'tcp', 'open', 'ppp'),
createData('lYYCflwsDgoKErFLdNOCl','3000', 'tcp', 'open', 'ppp'),
createData('lYYCflwsDgoKErFLdNOCl','53', 'tcp', 'open', 'domain'),
createData('lYYCflwsDgoKErFLdNOCl','3001', 'tcp', 'open', 'nessus'),
createData('lYYCflwsDgoKErFLdNOCl','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.0/24 =================================

// ===================== Target: 192.168.1.0/24 ================================
createData('pLpdRFALVDObzbLsnHEHS','53', 'tcp', 'open', 'domain'),
createData('pLpdRFALVDObzbLsnHEHS','80', 'tcp', 'open', 'http'),
createData('pLpdRFALVDObzbLsnHEHS','548', 'tcp', 'open', 'afp'),
createData('pLpdRFALVDObzbLsnHEHS','631', 'tcp', 'open', 'ipp'),
createData('pLpdRFALVDObzbLsnHEHS','5000', 'tcp', 'open', 'upnp'),
createData('pLpdRFALVDObzbLsnHEHS','8200', 'tcp', 'open', 'trivnet1'),
createData('pLpdRFALVDObzbLsnHEHS','20005', 'tcp', 'open', 'btx'),
createData('pLpdRFALVDObzbLsnHEHS','62078', 'tcp', 'open', 'iphone-sync'),
createData('pLpdRFALVDObzbLsnHEHS','62078', 'tcp', 'open', 'iphone-sync'),
createData('pLpdRFALVDObzbLsnHEHS','3000', 'tcp', 'open', 'ppp'),
createData('pLpdRFALVDObzbLsnHEHS','3000', 'tcp', 'open', 'ppp'),
createData('pLpdRFALVDObzbLsnHEHS','53', 'tcp', 'open', 'domain'),
createData('pLpdRFALVDObzbLsnHEHS','3001', 'tcp', 'open', 'nessus'),
createData('pLpdRFALVDObzbLsnHEHS','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.0/24 =================================

// ===================== Target: 192.168.1.0/24 ================================
createData('fiminFjeStrixCIHiCIjG','53', 'tcp', 'open', 'domain'),
createData('fiminFjeStrixCIHiCIjG','80', 'tcp', 'open', 'http'),
createData('fiminFjeStrixCIHiCIjG','548', 'tcp', 'open', 'afp'),
createData('fiminFjeStrixCIHiCIjG','631', 'tcp', 'open', 'ipp'),
createData('fiminFjeStrixCIHiCIjG','5000', 'tcp', 'open', 'upnp'),
createData('fiminFjeStrixCIHiCIjG','8200', 'tcp', 'open', 'trivnet1'),
createData('fiminFjeStrixCIHiCIjG','20005', 'tcp', 'open', 'btx'),
createData('fiminFjeStrixCIHiCIjG','62078', 'tcp', 'open', 'iphone-sync'),
createData('fiminFjeStrixCIHiCIjG','3000', 'tcp', 'open', 'ppp'),
createData('fiminFjeStrixCIHiCIjG','3000', 'tcp', 'open', 'ppp'),
createData('fiminFjeStrixCIHiCIjG','53', 'tcp', 'open', 'domain'),
createData('fiminFjeStrixCIHiCIjG','3001', 'tcp', 'open', 'nessus'),
createData('fiminFjeStrixCIHiCIjG','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.0/24 =================================

// ===================== Target: 192.168.1.0/24 ================================
createData('aRtfLJkrEerTVZfERlnPN','53', 'tcp', 'open', 'domain'),
createData('aRtfLJkrEerTVZfERlnPN','80', 'tcp', 'open', 'http'),
createData('aRtfLJkrEerTVZfERlnPN','548', 'tcp', 'open', 'afp'),
createData('aRtfLJkrEerTVZfERlnPN','631', 'tcp', 'open', 'ipp'),
createData('aRtfLJkrEerTVZfERlnPN','5000', 'tcp', 'open', 'upnp'),
createData('aRtfLJkrEerTVZfERlnPN','8200', 'tcp', 'open', 'trivnet1'),
createData('aRtfLJkrEerTVZfERlnPN','20005', 'tcp', 'open', 'btx'),
createData('aRtfLJkrEerTVZfERlnPN','843', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','1034', 'tcp', 'filtered', 'zincite-a'),
createData('aRtfLJkrEerTVZfERlnPN','1132', 'tcp', 'filtered', 'kvm-via-ip'),
createData('aRtfLJkrEerTVZfERlnPN','1875', 'tcp', 'filtered', 'westell-stats'),
createData('aRtfLJkrEerTVZfERlnPN','2042', 'tcp', 'filtered', 'isis'),
createData('aRtfLJkrEerTVZfERlnPN','2288', 'tcp', 'filtered', 'netml'),
createData('aRtfLJkrEerTVZfERlnPN','4343', 'tcp', 'filtered', 'unicall'),
createData('aRtfLJkrEerTVZfERlnPN','7004', 'tcp', 'filtered', 'afs3-kaserver'),
createData('aRtfLJkrEerTVZfERlnPN','8082', 'tcp', 'filtered', 'blackice-alerts'),
createData('aRtfLJkrEerTVZfERlnPN','8083', 'tcp', 'filtered', 'us-srv'),
createData('aRtfLJkrEerTVZfERlnPN','8093', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','8300', 'tcp', 'filtered', 'tmi'),
createData('aRtfLJkrEerTVZfERlnPN','10024', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','10626', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','19801', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','24800', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','26214', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','4', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','777', 'tcp', 'filtered', 'multiling-http'),
createData('aRtfLJkrEerTVZfERlnPN','843', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','1033', 'tcp', 'filtered', 'netinfo'),
createData('aRtfLJkrEerTVZfERlnPN','1034', 'tcp', 'filtered', 'zincite-a'),
createData('aRtfLJkrEerTVZfERlnPN','1132', 'tcp', 'filtered', 'kvm-via-ip'),
createData('aRtfLJkrEerTVZfERlnPN','1875', 'tcp', 'filtered', 'westell-stats'),
createData('aRtfLJkrEerTVZfERlnPN','2042', 'tcp', 'filtered', 'isis'),
createData('aRtfLJkrEerTVZfERlnPN','2288', 'tcp', 'filtered', 'netml'),
createData('aRtfLJkrEerTVZfERlnPN','3283', 'tcp', 'filtered', 'netassistant'),
createData('aRtfLJkrEerTVZfERlnPN','4343', 'tcp', 'filtered', 'unicall'),
createData('aRtfLJkrEerTVZfERlnPN','7004', 'tcp', 'filtered', 'afs3-kaserver'),
createData('aRtfLJkrEerTVZfERlnPN','8082', 'tcp', 'filtered', 'blackice-alerts'),
createData('aRtfLJkrEerTVZfERlnPN','8083', 'tcp', 'filtered', 'us-srv'),
createData('aRtfLJkrEerTVZfERlnPN','8093', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','8222', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','8300', 'tcp', 'filtered', 'tmi'),
createData('aRtfLJkrEerTVZfERlnPN','10024', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','10626', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','18040', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','19801', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','24800', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','26214', 'tcp', 'filtered', 'unknown'),
createData('aRtfLJkrEerTVZfERlnPN','62078', 'tcp', 'open', 'iphone-sync'),
createData('aRtfLJkrEerTVZfERlnPN','3000', 'tcp', 'open', 'ppp'),
createData('aRtfLJkrEerTVZfERlnPN','3000', 'tcp', 'open', 'ppp'),
createData('aRtfLJkrEerTVZfERlnPN','53', 'tcp', 'open', 'domain'),
createData('aRtfLJkrEerTVZfERlnPN','3001', 'tcp', 'open', 'nessus'),
createData('aRtfLJkrEerTVZfERlnPN','3306', 'tcp', 'open', 'mysql'),
// ===================== END of 192.168.1.0/24 =================================

// ===================== Target: scanme.nmap.org ================================
createData('bryEjNfxXYXEeYzpOUNHT','22', 'tcp', 'open', 'ssh'),
createData('bryEjNfxXYXEeYzpOUNHT','25', 'tcp', 'filtered', 'smtp'),
createData('bryEjNfxXYXEeYzpOUNHT','80', 'tcp', 'open', 'http'),
createData('bryEjNfxXYXEeYzpOUNHT','135', 'tcp', 'filtered', 'msrpc'),
createData('bryEjNfxXYXEeYzpOUNHT','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('bryEjNfxXYXEeYzpOUNHT','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('bryEjNfxXYXEeYzpOUNHT','3372', 'tcp', 'filtered', 'msdtc'),
createData('bryEjNfxXYXEeYzpOUNHT','9929', 'tcp', 'open', 'nping-echo'),
createData('bryEjNfxXYXEeYzpOUNHT','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('BwPKVRnLYwQuyelwoJTXr','22', 'tcp', 'open', 'ssh'),
createData('BwPKVRnLYwQuyelwoJTXr','25', 'tcp', 'filtered', 'smtp'),
createData('BwPKVRnLYwQuyelwoJTXr','80', 'tcp', 'open', 'http'),
createData('BwPKVRnLYwQuyelwoJTXr','135', 'tcp', 'filtered', 'msrpc'),
createData('BwPKVRnLYwQuyelwoJTXr','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('BwPKVRnLYwQuyelwoJTXr','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('BwPKVRnLYwQuyelwoJTXr','3372', 'tcp', 'filtered', 'msdtc'),
createData('BwPKVRnLYwQuyelwoJTXr','9929', 'tcp', 'open', 'nping-echo'),
createData('BwPKVRnLYwQuyelwoJTXr','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('PhUIoDzjgwueSCKTQjtrs','22', 'tcp', 'open', 'ssh'),
createData('PhUIoDzjgwueSCKTQjtrs','25', 'tcp', 'filtered', 'smtp'),
createData('PhUIoDzjgwueSCKTQjtrs','80', 'tcp', 'open', 'http'),
createData('PhUIoDzjgwueSCKTQjtrs','135', 'tcp', 'filtered', 'msrpc'),
createData('PhUIoDzjgwueSCKTQjtrs','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('PhUIoDzjgwueSCKTQjtrs','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('PhUIoDzjgwueSCKTQjtrs','3372', 'tcp', 'filtered', 'msdtc'),
createData('PhUIoDzjgwueSCKTQjtrs','9929', 'tcp', 'open', 'nping-echo'),
createData('PhUIoDzjgwueSCKTQjtrs','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('oNkLNmHqxoUaJlqcypOwn','22', 'tcp', 'open', 'ssh'),
createData('oNkLNmHqxoUaJlqcypOwn','25', 'tcp', 'filtered', 'smtp'),
createData('oNkLNmHqxoUaJlqcypOwn','80', 'tcp', 'open', 'http'),
createData('oNkLNmHqxoUaJlqcypOwn','135', 'tcp', 'filtered', 'msrpc'),
createData('oNkLNmHqxoUaJlqcypOwn','139', 'tcp', 'filtered', 'netbios-ssn'),
createData('oNkLNmHqxoUaJlqcypOwn','445', 'tcp', 'filtered', 'microsoft-ds'),
createData('oNkLNmHqxoUaJlqcypOwn','3372', 'tcp', 'filtered', 'msdtc'),
createData('oNkLNmHqxoUaJlqcypOwn','9929', 'tcp', 'open', 'nping-echo'),
createData('oNkLNmHqxoUaJlqcypOwn','31337', 'tcp', 'open', 'Elite'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: chinmap.xyz ================================
// ===================== END of chinmap.xyz =================================
]