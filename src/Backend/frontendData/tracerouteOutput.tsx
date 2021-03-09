interface Data {scanId: string, rtt: string, addr: string,}

function createData(scanId: string, rtt: string, addr: string): Data {return {scanId, rtt, addr};}

export const traceroute = [
createData('','','',),

// ===================== Target: scanme.nmap.org ================================
createData('JmGDWcOuhrHObTDfnPxJA', '6.21 ms', '  192.168.1.1'),
createData('JmGDWcOuhrHObTDfnPxJA', '7.92 ms', '  203185042001.res.dyn.ctinets.com (203.185.42.1)'),
createData('JmGDWcOuhrHObTDfnPxJA', '7.92 ms', '  10.239.77.5'),
createData('JmGDWcOuhrHObTDfnPxJA', '8.15 ms', '  014199254133.ctinets.com (14.199.254.133)'),
createData('JmGDWcOuhrHObTDfnPxJA', '8.16 ms', '  061244225101.ctinets.com (61.244.225.101)'),
createData('JmGDWcOuhrHObTDfnPxJA', '8.02 ms', '  hnk-b2-link.ip.twelve99.net (62.115.146.52)'),
createData('JmGDWcOuhrHObTDfnPxJA', '57.65 ms', ' tky-b1-link.ip.twelve99.net (62.115.143.61)'),
createData('JmGDWcOuhrHObTDfnPxJA', '174.55 ms', 'sjo-b21-link.ip.twelve99.net (62.115.123.140)'),
createData('JmGDWcOuhrHObTDfnPxJA', '174.56 ms', 'linode-ic342731-sjo-b21.ip.twelve99-cust.net (62.115.172.133)'),
createData('JmGDWcOuhrHObTDfnPxJA', '174.62 ms', '173.230.159.69'),
createData('JmGDWcOuhrHObTDfnPxJA', '156.12 ms', 'scanme.nmap.org (45.33.32.156)'),
// ===================== END of scanme.nmap.org =================================

// ===================== Target: scanme.nmap.org ================================
createData('NgRnqdJZBsIWLBEvWoxKf', '2.71 ms', '  192.168.1.1'),
createData('NgRnqdJZBsIWLBEvWoxKf', '5.13 ms', '  203185042001.res.dyn.ctinets.com (203.185.42.1)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '5.13 ms', '  10.239.77.5'),
createData('NgRnqdJZBsIWLBEvWoxKf', '6.70 ms', '  014199254133.ctinets.com (14.199.254.133)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '6.71 ms', '  061244225101.ctinets.com (61.244.225.101)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '6.72 ms', '  hnk-b2-link.ip.twelve99.net (62.115.146.52)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '54.21 ms', ' tky-b1-link.ip.twelve99.net (62.115.143.61)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '160.69 ms', 'sjo-b21-link.ip.twelve99.net (62.115.123.140)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '156.21 ms', 'linode-ic342731-sjo-b21.ip.twelve99-cust.net (62.115.172.133)'),
createData('NgRnqdJZBsIWLBEvWoxKf', '156.25 ms', '173.230.159.69'),
createData('NgRnqdJZBsIWLBEvWoxKf', '159.82 ms', 'scanme.nmap.org (45.33.32.156)'),
// ===================== END of scanme.nmap.org =================================
]