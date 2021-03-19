import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { observer } from 'mobx-react-lite'
import HelpIcon from '@material-ui/icons/Help';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { CSVLink } from "react-csv";

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
    const [state, setState] = React.useState({
        cve: false,
        whois: false,
        traceroute: false,
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    const resultTarget = scannedIn.map((data) => data.id === storeTarget.target ? data.target : null)
    const resultDate = scannedIn.map((data) => data.id === storeTarget.target ? data.date : null)
    const resultTime = scannedIn.map((data) => data.id === storeTarget.target ? data.time : null)
    const mapResult = pureOutput.map((data) => data.id === storeTarget.target ? data.output : null)

    const data = [
        { colOne: 'Target', colTwo: 'Date', colThree: 'Time', colFour: 'Result' },
        { colOne: resultTarget, colTwo: resultDate, colThree: resultTime, colFour: mapResult },
        { colOne: 'CVE', colTwo: 'CVE Info' }
    ]
    
    console.log(data)

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
                                          width: "100%",
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
                                          width: "100%",
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
                                            width: "100%",
                                        }}
                                    />
                              </form>
                              </Tooltip>
                          </Grid>

                          <Grid item xs={6} style={{textAlign: "center"}}>
                              <table style={{width: '100%'}}>
                                  <tr>
                                      <td style={{width: '33.3%'}}>
                                            <FormControlLabel
                                                control={<Checkbox checked={state.cve} color="primary" onChange={handleChange} name="cve" />}
                                                label="CVE"
                                            /> 
                                      </td>
                                      <td style={{width: '33.3%'}}>
                                            <FormControlLabel
                                                control={<Checkbox checked={state.whois} color="primary" onChange={handleChange} name="whois" />}
                                                label="WhoIS"
                                            />
                                      </td>
                                      <td style={{width: '33.3%'}}>
                                            <FormControlLabel
                                                control={<Checkbox checked={state.traceroute} color="primary" onChange={handleChange} name="traceroute" />}
                                                label="Traceroute"
                                            />
                                      </td>
                                  </tr>
                              </table>
                          </Grid>
  
                            <Grid item xs={12} style={{textAlign: "center", position: "relative", left: 12,}}>
                                <ButtonGroup 
                                    size="large" 
                                    color="primary" 
                                >
                                    <Button 
                                      style={{width: "50%"}}
                                    >
                                        <CSVLink data={data} filename='scanResult.csv' style={{color: '#4050B5'}}>
                                            CSV
                                        </CSVLink>
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
