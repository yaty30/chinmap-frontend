import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { observer } from 'mobx-react-lite'
import HelpIcon from '@material-ui/icons/Help';

import { scanTarget, targetData, targetTime } from '../target'

// Backend
import { isScanning } from '../../Backend/frontendData/isScanning'
import { pureOutput } from '../../Backend/frontendData/Result'
import scannedIn from '../../Backend/frontendData/scannedIn.json'
import scannedTarget from '../../Backend/frontendData/scannedTargetForSelect.json'
import { rows } from '../../Backend/frontendData/getPortStatus'

// Mobx Global Status
import storeTarget from '../../Mobx/Models/resultSelectStatus'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default () => {
    const datas = [{
      first: 'foo',
      second: 'bar'
    }, {
      first: 'foobar',
      second: 'foobar'
    }];

    return (
      <>
          {scannedIn.map((obj) => (
              obj.id !=  storeTarget.target ||  storeTarget.target === "" || obj.target === "" ?
                  null
                      :
                  <>
                      <Grid container justify="center" spacing={4}>
                          <Grid item xs={12} style={{textAlign: "center"}}>
                              <form 
                                  noValidate 
                                  autoComplete="off"
                              >
                                  <TextField 
                                      id="outlined-basic" 
                                      label="Current Target" 
                                      variant="outlined" 
                                      value={obj.targetForSelect}
                                      inputProps={{
                                          readOnly: true,
                                      }}
                                      style={{
                                          textAlignLast: "center",
                                          width: "60%",
                                      }}
                                  />
                                  
                              </form>
                          </Grid>
                          <Grid item xs={6} style={{textAlign: "center"}}>
                              <form 
                                  noValidate 
                                  autoComplete="off"
                              >
                                  <TextField 
                                      id="outlined-basic" 
                                      label="Target Scan Date [D/M/Y]" 
                                      variant="outlined" 
                                      value={obj.date}
                                      inputProps={{
                                          readOnly: true,
                                      }}
                                      style={{
                                          textAlignLast: "center",
                                          width: "60%",
                                      }}
                                  />
                                  
                              </form>
                          </Grid>
                          <Grid item xs={6} style={{textAlign: "center"}}>
                          <Tooltip title="" arrow placement="top">
                              <form 
                                  noValidate 
                                  autoComplete="off"
                              >
                                  
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Target Scan Time" 
                                        variant="outlined" 
                                        value={obj.time}
                                        inputProps={{
                                            readOnly: true,
                                        }}
                                        style={{
                                            textAlignLast: "center",
                                            width: "60%",
                                        }}
                                    />
                              </form>
                              </Tooltip>
                          </Grid>
  
                            <Grid item xs={12} style={{textAlign: "center", position: "relative", left: 12,}}>
                                <ButtonGroup 
                                    size="large" 
                                    color="primary" 
                                >
                                    <Button 
                                      style={{width: "50%"}}
                                    >
                                        CSV
                                    </Button>
                                    
                                    <Button style={{width: "50%"}}>
                                        PDF
                                    </Button>
                                </ButtonGroup>
                                <Tooltip title="By clicking the button, the scan result will be exported to a file in the format of CSV or Excel." arrow placement="top">
                                    <span style={{position:"relative", top: 5, left: 15, color: "lightgrey", cursor: "pointer"}}>
                                        <HelpIcon style={{fontSize: 20}}/>
                                    </span>
                                </Tooltip>
                            </Grid>
                      </Grid>
                      
                  </>
          ))}
      </>
    );
  }
