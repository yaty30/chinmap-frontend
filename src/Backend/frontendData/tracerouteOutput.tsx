interface Data {scanId: string, rtt: string, addr: string,}

function createData(scanId: string, rtt: string, addr: string): Data {return {scanId, rtt, addr};}

export const traceroute = [
createData('','','',),



// ===================== Target: 192.168.1.1 ================================
// ===================== END of 192.168.1.1 =================================

// ===================== Target: scanme.nmap.org ================================
createData('AKzWlggrLgUUrjEfnERVC', '2.29 ms', '  192.168.86.1'),
createData('AKzWlggrLgUUrjEfnERVC', '12.05 ms', ' cm125-59-20-1.hkcable.com.hk (125.59.20.1)'),
createData('AKzWlggrLgUUrjEfnERVC', '12.05 ms', ' 192.168.71.49'),
createData('AKzWlggrLgUUrjEfnERVC', '13.78 ms', ' 192.168.66.5'),
createData('AKzWlggrLgUUrjEfnERVC', '7.01 ms', '  192.168.64.21'),
createData('AKzWlggrLgUUrjEfnERVC', '7.51 ms', '  cm61-10-0-241.hkcable.com.hk (61.10.0.241)'),
createData('AKzWlggrLgUUrjEfnERVC', '160.34 ms', 'if-ae-38-2.tcore1.hk2-hongkong.as6453.net (116.0.67.86)'),
createData('AKzWlggrLgUUrjEfnERVC', '70.12 ms', ' if-et-16-2.hcore1.kv8-chiba.as6453.net (116.0.67.34)'),
createData('AKzWlggrLgUUrjEfnERVC', '172.04 ms', 'if-ae-5-2.tcore2.sv1-santaclara.as6453.net (209.58.86.142)'),
createData('AKzWlggrLgUUrjEfnERVC', '162.71 ms', 'if-ae-38-2.tcore1.sqn-sanjose.as6453.net (63.243.205.74)'),
createData('AKzWlggrLgUUrjEfnERVC', '169.64 ms', '216.6.33.114'),
createData('AKzWlggrLgUUrjEfnERVC', '163.32 ms', '173.230.159.71'),
createData('AKzWlggrLgUUrjEfnERVC', '158.44 ms', 'scanme.nmap.org (45.33.32.156)'),
// ===================== END of scanme.nmap.org =================================
]