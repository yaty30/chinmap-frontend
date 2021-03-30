interface Data {scanId: string, hook: string, subdomain: string}

function createData(scanId: string, hook: string, subdomain: string): Data {return {scanId, hook, subdomain};}

export const cleverTrickery = [
    createData('','',''),

]