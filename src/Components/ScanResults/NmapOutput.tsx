import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography'

import { scanTarget, targetData, targetTime } from '../target'

// Backend
import { isScanning } from '../../Backend/frontendData/isScanning'
import { pureOutput } from '../../Backend/frontendData/Result'
import scannedIn from '../../Backend/frontendData/scannedIn.json'
import { rows } from '../../Backend/frontendData/getPortStatus'

// Mobx Global Status
import selectResult from '../../Mobx/Models/resultSelectStatus'

export default () => {

    return(
      <>
          {pureOutput.map((obj) => (
            <>
              {
                obj.id == selectResult.target ?
                  <>
                     <Typography style={{whiteSpace: "pre-line"}}>
                        {obj.output}
                      </Typography>
                  </>
                    :
                  null
              }
            </>
          ))}
        
      </>
    );
}