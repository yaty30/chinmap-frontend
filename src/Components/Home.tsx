import React, {useState} from 'react';
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

import AutomationIcon from '@material-ui/icons/BrightnessAuto';

import Settings from './HomeSettings/HomeSettings'
import { customisedScanModes } from './NewScanModeArray'

import { scanTarget, targetData, targetTime, chosenMode, scanDate } from './target'

// Backend
import { isScanning } from '../Backend/frontendData/isScanning'
import scanModeData from '../Backend/frontendData/scanModes/default.json'

// Mobx
import homeSettingsStatus from '../Mobx/Models/homeSettingsStatus'

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
      minHeight: 155,
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
  const [open, setOpen] = React.useState(true);

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
  const [scanMode, setScanMode] = React.useState('');
  const [isEmpty, setIsEmpty] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setScanMode(event.target.value as string);
  };

  const [target, setTarget] = React.useState("");
  const handleScanTarget = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTarget(event.target.value as string)
    target.length < 1 || scanMode == "" ? setIsEmpty(true) : setIsEmpty(false);
  }

  const CurrentTime = () => {
    var scanTime: any;
    var date = new Date();

    var hours = date.getHours();
    var min = date.getMinutes();

    var hourAddZero = hours < 10 ? '0' + hours : hours;
    var minAddZero = min < 10 ? '0' + min : min;

    return scanTime = hourAddZero + ":" + minAddZero;
  }

  const CurrentDate = () => {
    var today = new Date();
    var currentDate: any;

    var date = today.getDate();
    var month = today.getMonth();

    var dateAddZero = date < 10 ? '0' + date : date;
    var mthAddZerp = month < 10 ? '0' + month : month;
    
    return currentDate = dateAddZero + "/" + mthAddZerp + "/" + today.getFullYear();
  }

  const Cap = (scanMode: string) => {
    return scanMode.charAt(0).toUpperCase() + scanMode.slice(1);
  }

  const AddSpaces = (obj: string) => {
    return obj.replace(/([A-Z])/g, ' $1').trim();
  }

  const ScanIdentifier = (length: any) => {
    var result           = 'scanID';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  const [reset, setReset] = React.useState(false);
  const handleReset = () => (
    setTarget("")
  )

  return (
    <div className={classes.root}>

      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={10}>
          <Paper className={classes.paper}>
              <Typography variant="h6">
                  Scan Information
              </Typography>
              <div style={{marginTop: 25, textAlign: "center"}}>
                <Tooltip title="Example: scanme.nmap.org, 209.168.29.115, 192.168.1.0/24" aria-label="add" arrow placement="top">
                    <TextField 
                        id="homeTargetField" 
                        label="Target IP or Domain" 
                        variant="outlined" 
                        size="small"
                        style={{
                            width: "70%",
                        }}
                        onChange={handleScanTarget}
                        value={target}
                    />
                </Tooltip>
              </div>
              <Grid container spacing={3}>
                <Grid item xs={12} className={classes.centerGrid}>
                    <Settings />
                </Grid>
                <Grid item xs={6}>
                  {
                     homeSettingsStatus.automation === true ?
                      <Chip label="Automation" clickable variant="outlined" deleteIcon={<AutomationIcon />}/> : null
                  }
                  {
                    homeSettingsStatus.cve === true ? 
                      <Chip label="CVE Detection" clickable variant="outlined" deleteIcon={<AutomationIcon />}/> : null
                  }
                  {
                    homeSettingsStatus.pn === true ? 
                      <Chip label="Ping Block Bypass" clickable variant="outlined" deleteIcon={<AutomationIcon />}/> : null
                  }
                  {
                    homeSettingsStatus.whoIs === true ? 
                      <Chip label="WhoIs" clickable variant="outlined" deleteIcon={<AutomationIcon />}/> : null
                  }
                  <span>{homeSettingsStatus.range}</span>
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
                              
                              {/* <ListSubheader>Customised Scan Modes</ListSubheader>
                              {customisedScanModes.map((modes) => (
                                <MenuItem value={modes.value} className="customised">{modes.name}</MenuItem>
                              ))} */}
                          </Select>
                      </FormControl>
                  </div>
              </Paper>
          </Grid>
          
          <Grid item xs={10} style={{marginTop: 55}}>
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
                  target == "" ?
                    <>
                      <Tooltip title="Please Enter the Target." arrow placement="top">
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
                    <>
                      <Link to='/scanResult'>
                        <Button 
                          color="primary" 
                          style={{
                            float: "right",
                          }}
                        >
                          Scan
                        </Button>
                      </Link>
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
        </Grid>
      </Grid>
      
    </div>
  );
})