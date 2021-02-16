import React from 'react'
import { Typography } from '@material-ui/core'

import { nmapoutput } from './nmapResult'

export default function NmapOutput() {
    return(
        <>
            <Typography style={{whiteSpace: "pre-line"}}>
                {nmapoutput}
            </Typography>
        </>
    )
}