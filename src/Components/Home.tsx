import React, {useState, useEffect} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Popover from '@material-ui/core/Popover';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import Chip from '@material-ui/core/Chip';
import { observer } from 'mobx-react-lite'
import WhatismyIP from './Whatismyip'

import AutomationIcon from '@material-ui/icons/BrightnessAuto';
import ScanRangeDisplay from './HomeSettings/ScanRangeDisplay'

import Settings from './HomeSettings/HomeSettings'

import { scanTarget, targetData, targetTime, chosenMode, scanDate } from './target'

// Backend
import { isScanning } from '../Backend/frontendData/isScanning'
import scanModeData from '../Backend/frontendData/scanModes/default.json'

// Mobx
import homeSettingsStatus from '../Mobx/Models/homeSettingsStatus'
import customised from '../Backend/frontendData/customisedScanModeStatus'
// import homeSettingsFlagsStatus from '../Mobx/Models/homeSettingsFlagStatus'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      backgroundColor: "#fefefe",
      color: "#333333",
      minHeight: 115,
    },
    centerGrid: {
        textAlign: "center",
        marginTop: 15,
    },
    typography: {
      padding: theme.spacing(2),
      width: 350,
    },
  }),
);

const ScanOnProgress = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {isScanning.map((status) => (
          status === true ?
              <>
                  <Snackbar
                      anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                      }}
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Scanning is progressing..."
                      action={
                          <React.Fragment>
                          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                              <CloseIcon fontSize="small" />
                          </IconButton>
                          </React.Fragment>
                      }
                      />
              </>
          :
              null
      ))}
    </div>
  );
}

export default observer (() => {
  const classes = useStyles();
  const [scanMode, setScanMode] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setScanMode(event.target.value as string);
  };

  const [target, setTarget] = useState("");
  const handleScanTarget = (event: React.ChangeEvent<{ value: unknown }>) => {
    homeSettingsStatus.setTarget(event.target.value as string)
    homeSettingsStatus.target.length < 1 || scanMode == "" ? setIsEmpty(true) : setIsEmpty(false);
    homeSettingsStatus.setRange('');
    homeSettingsStatus.setRangeTarget('');
    setTargetVal(event.target.value as string)
  }

  const [reset, setReset] = useState(false);
  const handleReset = () => {
    homeSettingsStatus.setAuto(false);
    homeSettingsStatus.setCve(false);
    homeSettingsStatus.setPn(false);
    homeSettingsStatus.setWhoIs(false);
    homeSettingsStatus.setRange('');
    homeSettingsStatus.setTarget('');
    homeSettingsStatus.setRangeTarget('');
    setTargetVal('');
  }

  const [targetVal, setTargetVal] = useState('');


  return (
    <div className={classes.root}>
      <form method='post' action="http://localhost:5000/runAPI">
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    Scan Information
                </Typography>
                <br/>
                <div style={{marginTop: 25, textAlign: "center"}}>
                  <Tooltip title="Example: scanme.nmap.org, 209.168.29.115, 192.168.1.0/24" aria-label="add" arrow placement="top">
                      <TextField 
                          id="homeTargetField"
                          label="Target IP or Domain"
                          variant="outlined" 
                          size="small"
                          name="target"
                          style={{
                              width: "70%",
                              textAlignLast: "center",
                          }}
                          onChange={handleScanTarget}
                          value={homeSettingsStatus.target}
                      />
                  </Tooltip>
                </div>
                <Grid container spacing={3}>
                  <Grid item xs={12} className={classes.centerGrid}>
                      <Settings />
                  </Grid>
                  <Grid item xs={12}>
                    <table style={{width: "100%",textAlign: "center"}}>
                      <tbody>
                        <tr>
                          <td style={{width: "25%"}}>
                            <Button 
                              variant="outlined" 
                              style={{
                                width: "100%", 
                                whiteSpace: "nowrap",
                                cursor: 'default',
                              }}
                              size="small"
                              color="primary"
                              disabled={homeSettingsStatus.automation === true ? false : true}
                            >
                              Automation
                            </Button>
                          </td>
                          <td style={{width: "25%"}}>
                            <Button 
                              variant="outlined" 
                              style={{
                                width: "100%", 
                                whiteSpace: "nowrap",
                                cursor: 'default',
                              }}
                              size="small"
                              color="primary"
                              disabled={homeSettingsStatus.cve === true ? false : true}
                            >
                              CVE Detection
                            </Button>
                          </td>
                          <td style={{width: "25%"}}>
                            <Button 
                              variant="outlined" 
                              style={{
                                width: "100%", 
                                whiteSpace: "nowrap",
                                cursor: 'default',
                              }}
                              size="small"
                              color="primary"
                              disabled={homeSettingsStatus.pn === true ? false : true}
                            >
                              Ping Block Bypass
                            </Button>
                          </td>
                          <td style={{width: "25%"}}>
                            <Button 
                              variant="outlined" 
                              style={{
                                width: "100%", 
                                whiteSpace: "nowrap",
                                cursor: 'default',
                              }}
                              size="small"
                              color="primary"
                              disabled={homeSettingsStatus.whoIs === true ? false : true}
                            >
                              WhoIs
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <ScanRangeDisplay />
                          </td>
                          <td colSpan={3}>
                            <Button 
                              variant="outlined" 
                              style={{
                                width: "100%", 
                                whiteSpace: "nowrap",
                                cursor: 'default',
                                textTransform: "capitalize",
                              }}
                              size="small"
                              color="primary"
                              disabled={homeSettingsStatus.flag === '' ? false : true}
                            >
                              Flags: &nbsp;
                              
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}>
                            <WhatismyIP />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid>
                </Grid>
            </Paper>
          </Grid>

          <Grid item xs={10}>
              <Paper className={classes.paper}>
                  <Typography variant="h6">
                      Scan Mode
                  </Typography>
                  <div style={{textAlign: "center",marginTop: 15,marginLeft: 70}}>
                      <FormControl variant="outlined" style={{width: "100%"}}>
                          <InputLabel id="demo-simple-select-outlined-label">Scan Mode</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={scanMode}
                                onChange={handleChange}
                                label="Scan Mode"
                                style={{
                                    width: "85%",
                                    textAlign: "center",
                                }}
                            >
                                <ListSubheader>Default Scan Modes</ListSubheader>
                                {scanModeData.map((data, index) => (
                                  data.cardInfo.map((data, index) => (
                                    <MenuItem value={data.name} key={index} className="default">{data.name}</MenuItem>
                                  ))
                                ))}
                                
                                <ListSubheader>Customised Scan Modes</ListSubheader>
                                {customised.rows.map((modes, index) => (
                                  modes.profile.map((data, index) => (
                                    data.modeID === '' ? null :
                                    <MenuItem value={data.modeID} className="customised">{data.name}</MenuItem>
                                  ))
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Paper>
            </Grid>
            
          
          {/* Scan data temporary storing */}
    
          <div style={{position: 'fixed', width: 865, bottom: 10}}>
          <div style={{display: "none"}}>
            <input type="text" readOnly name="nm" value={homeSettingsStatus.rangeTarget === '' ? targetVal : homeSettingsStatus.rangeTarget} />
            <input type="text" readOnly name="auto" value={homeSettingsStatus.automation === true ? "true" : "false"} />
            <input type="text" readOnly name="cve" value={homeSettingsStatus.cve === true ? "true" : "false"} />
            <input type="text" readOnly name="pbb" value={homeSettingsStatus.pn === true ? "true" : "false"} />
            <input type="text" readOnly name="whois" value={homeSettingsStatus.whoIs === true ? "true" : "false"} />
            <input type="text" readOnly name="scanMode" value={scanMode}/>
            <input type="text" readOnly name="scanRange" value={homeSettingsStatus.range}/>
          </div>

            <Paper className={classes.paper} style={{minHeight: 0,}}>
                  <Button 
                    color="primary"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                  {isScanning.map((isScanning) => (
                    isScanning === true ?
                      <>
                        <Tooltip title="Previous scan is progressing, please wait..." arrow placement="top">
                          <Typography 
                            style={{
                              display: "inline-block",
                              position: "relative",
                              top: 6,
                              right: 5,
                              color: "lightgrey",
                              float: "right",
                              cursor: "default",
                              userSelect: "none",
                              textTransform: "uppercase",
                            }}
                          >
                            Scan
                          </Typography>
                        </Tooltip>
                      </>
                      :
                      homeSettingsStatus.target === "" ?
                      <>
                        <Tooltip title="Please Enter the Target." arrow placement="top">
                          <span 
                            color="primary" 
                            style={{
                              float: "right",
                            }}
                            id="scanBtnDisabled"
                          >
                            Scan
                          </span>
                        </Tooltip>
                      </>
                      :
                      <>
                        <input 
                          color="primary" 
                          style={{
                            float: "right",
                          }}
                          type="submit"
                          value="Scan"
                          id="scanBtn"
                        />
                      </> 
                  ))}
              </Paper>
              {isScanning.map((isScanning) => (
                  isScanning === true ?
                    <>
                      <Tooltip title="Previous scan is progressing, please wait..." arrow placement="top">
                        <LinearProgress style={{height: 5, position:"relative",bottom:4}}/>
                      </Tooltip>
                    </>
                      :
                    null
              ))}
          </div>
        </Grid>
      </form>
    </div>
  );
})