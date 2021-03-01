import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import Tooltip from '@material-ui/core/Tooltip';

import { scanTarget, targetData, targetTime, chosenMode, scanDate } from '../target'

// Backend
import { isScanning } from '../../Backend/frontendData/isScanning'
import { pureOutput } from '../../Backend/frontendData/Result'
import scannedIn from '../../Backend/frontendData/scannedIn.json'
import scannedTarget from '../../Backend/frontendData/scannedTargetForSelect.json'
import { rows } from '../../Backend/frontendData/getPortStatus'

// Mobx Global Status
import storeTarget from '../../Mobx/Models/resultSelectStatus'

const mainStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      backgroundColor: "#fefefe",
      color: "#333333",
    },
    centerGrid: {
        textAlign: "center",
        marginTop: 15,
    },
    btnTabs: {
        textTransform: "capitalize",
    },
    cardRoot: {
        marginTop: 25,
    },
    title: {
        fontSize: 14,
        whiteSpace: "pre-line",
    },
    pos: {
        marginBottom: 12,
    },
    defaultShow: {

    },
    defaultHide: {
        display: "none",
    },
    centering: {
      textAlignLast: "center",
      width: "70%",
      userSelect: "none",
    },
    datepicker: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default () => {
  const classes = mainStyles();

  const handleClick = () => {
    console.log(targetData);
  }

  return (
    <>
        {scannedIn.map((data) => (
          data.id !=  storeTarget.target ||  storeTarget.target === "" || data.target === "" ?
              null
                  :
              <>
              {/* <button onClick={handleClick}>click</button> */}
              <form 
                  className={classes.root} 
                  noValidate 
                  autoComplete="off"
              >
                  <br/>
                  <Grid container justify="center" spacing={2} style={{width: "100%", textAlign: "center"}}>
                    <>
                      <Grid item xs={12} style={{width: "100%", marginBottom: 15,}}>
                        <div style={{textAlign: "left"}}><FormLabel component="legend">Basic Details: </FormLabel></div>
                      </Grid>

                      <Grid item xs={12} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Target" 
                            variant="outlined" 
                            multiline
                            style={{
                              width: "85%",
                            }}
                            value={data.target}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                      </Grid>
                    

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Time" 
                            variant="outlined" 
                            value={data.time}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%"}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Chosen Scan Mode" 
                            variant="outlined" 
                            value={
                              data.scanMode == "" ? "Regular Scan" : data.scanMode
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <Tooltip 
                          arrow 
                          placement="top"
                          title={
                            (parseInt(data.runTime)/60).toFixed(3) + " min; " + (parseInt(data.runTime)/60/60).toFixed(3) + " hr"
                          } 
                        >
                          <TextField
                              className={classes.centering} 
                              id="outlined-basic" 
                              label="Target Scanned In" 
                              variant="outlined" 
                              value={data.runTime}
                              inputProps={{
                                  readOnly: true,
                              }}
                            />
                          </Tooltip>
                      </Grid>
                  
                  
                      <Grid item xs={6} style={{width: "100%"}}>
                        <TextField
                          className={classes.centering} 
                          id="outlined-basic" 
                          label='Scan Date [Y-M-D]' 
                          variant="outlined" 
                          value={data.date}
                          inputProps={{
                              readOnly: true,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Latency" 
                            variant="outlined" 
                            multiline={
                              data.latency.length > 17 ? true : false
                            }
                            value={
                              data.latency == '' ? "Target host is down" 
                              //   :
                              // data.latency.length > 17 ? data.target + ": " + data.latency
                                 :
                              data.latency
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Up Host" 
                            variant="outlined" 
                            value={data.upHost == '' ? "Target host is down" : data.upHost}
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Closed Port Qty." 
                            variant="outlined" 
                            multiline={
                              data.notShown.length > 15 ? true : false
                            }
                            value={data.notShown == '' ? "Target host is down" : data.notShown}
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Nmap Version" 
                            variant="outlined" 
                            multiline
                            value={data.nmapVer}
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                    <Grid item xs={12} style={{width: "100%", marginBottom: 15, marginTop: 25,}}>
                      <Divider /><br/>
                      <div style={{textAlign: "left"}}><FormLabel component="legend">Advanced Details: </FormLabel></div>
                    </Grid>
                      
                      <Grid item xs={12} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Target OS" 
                            variant="outlined" 
                            style={{
                              width: "85%",
                            }}
                            multiline={
                              data.os.length > 5 ? true : false
                            }
                            value={
                              data.os == "" ? "No OS found or target is currently down" : data.os
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Network Distance" 
                            variant="outlined" 
                            multiline={
                              data.hop.length > 5 ? true : false
                            }
                            value={
                              data.hop == "" ? 
                                "Enable -v to discover" 
                                : 
                              data.hop

                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="TCP Sequence Prediction" 
                            variant="outlined" 
                            multiline={
                              data.notShown.length > 15 ? true : false
                            }
                            value={data.difficulty == '' ? "Target host is down" : data.difficulty}
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Device Type" 
                            variant="outlined" 
                            multiline={
                              data.macAddr.length > 17 ? true : false
                            }
                            value={
                              data.deviceType == "" ? "Enable -v to discover" : data.deviceType
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="MAC Address" 
                            variant="outlined" 
                            multiline={
                              data.macAddr.length > 28 ? true : false
                            }
                            value={
                              data.macAddr == "" ? "MAC Address not found" : data.macAddr
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={12} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Up Time" 
                            variant="outlined" 
                            multiline
                            style={{
                              width: "85%",
                            }}
                            value={
                              data.uptime == "" ? "Enable -v to discover" : data.uptime
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Raw Packets Sent" 
                            variant="outlined" 
                            value={
                              data.rawPacket == "" ? "Enable -v to discover" : data.rawPacket
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Raw Packets Received" 
                            variant="outlined" 
                            value={
                              data.rcvd == "" ? "Enable -v to discover" : data.rcvd
                            }
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>


                    <Grid item xs={12} style={{width: "100%", marginBottom: 15, marginTop: 25,}}>
                      <Divider /><br/>
                      <div style={{textAlign: "left"}}><FormLabel component="legend">Scan Settings</FormLabel></div>
                    </Grid>

                        <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                          <TextField
                              className={classes.centering} 
                              id="outlined-basic" 
                              label="Automation" 
                              variant="outlined" 
                              value={
                                data.auto === "true" ? "Enabled" : "Disabled"
                              }
                              inputProps={{
                                  readOnly: true,
                              }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                          <TextField
                              className={classes.centering} 
                              id="outlined-basic" 
                              label="CVE Detection" 
                              variant="outlined" 
                              value={
                                data.cveDetect === "true" ? "Enabled" : "Disabled"
                              }
                              inputProps={{
                                  readOnly: true,
                              }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                          <TextField
                              className={classes.centering} 
                              id="outlined-basic" 
                              label="Scan Range" 
                              variant="outlined" 
                              value={
                                data.setRange == " " ? "Not Specify" : data.setRange
                              }
                              inputProps={{
                                  readOnly: true,
                              }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                          <TextField
                              className={classes.centering} 
                              id="outlined-basic" 
                              label="Set Flags" 
                              variant="outlined" 
                              multiline
                              value={
                                data.flags == " " ? "Null" : data.flags
                              }
                              inputProps={{
                                  readOnly: true,
                              }}
                            />
                        </Grid>
                      </>
                    
                  </Grid>
              </form>
              </>
        ))}
    </>
  );
}
