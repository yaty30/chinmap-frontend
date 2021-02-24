interface Data {scanId: string, portno: string, port: string, status: string, service: string,}



function createData(scanId: string, portno: string, port: string, status: string, service: string, ): Data {return { scanId, portno, port, status, service };}



export const rows = [

createData('','','','','',),
]