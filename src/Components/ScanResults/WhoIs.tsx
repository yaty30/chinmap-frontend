import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'

// Mobx
import storeTarget from '../../Mobx/Models/resultSelectStatus'

// Backend
import { whoisScanOutput } from '../../Backend/frontendData/whoisScan'
import store from '../../Mobx/Models/homeSettingsStatus'

export default () => {
    return(
        <>
            {whoisScanOutput.map((data, index) => 
            
               storeTarget.target === data.scanId ?
                <>
                    <Typography key={data.scanId} style={{whiteSpace: "pre-line"}}>
                        {data.output}
                    </Typography>
                </> : null
            )}
        </>
    )
}