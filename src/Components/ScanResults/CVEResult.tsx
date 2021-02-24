import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'

// Mobx
import storeTarget from '../../Mobx/Models/resultSelectStatus'

// Backend
import { cveScanOutput } from '../../Backend/frontendData/cveScanOutput'
import store from '../../Mobx/Models/homeSettingsStatus'

export default () => {
    return(
        <>
            {cveScanOutput.map((data, index) => 
            
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