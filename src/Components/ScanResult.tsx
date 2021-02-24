import React, {useState} from 'react';
import { makeStyles, createStyles, Theme, lighten } from '@material-ui/core/styles';
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
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import Chip from '@material-ui/core/Chip';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import LinearProgress from '@material-ui/core/LinearProgress';

// Backend
import { isScanning } from '../Backend/frontendData/isScanning'
import { pureOutput } from '../Backend/frontendData/Result'
import scannedIn from '../Backend/frontendData/scannedIn.json'
import scannedTarget from '../Backend/frontendData/scannedTargetForSelect.json'
import { rows } from '../Backend/frontendData/getPortStatus'

// Components
import NmapOutput from './ScanResults/NmapOutput'
import HostsAndPorts from './ScanResults/HostsAndPorts'
import CVEResult from './ScanResults/CVEResult'
import ScanDetails from './ScanResults/ScanDetails'
import ExportResult from './ScanResults/ExportResult'

// Mobx Global Status
import { observer } from 'mobx-react-lite'
import storeTarget from '../Mobx/Models/resultSelectStatus'

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

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default observer (() => {
  const classes = mainStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // setTarget(event.target.value as any);
    storeTarget.setTarget(event.target.value as any)
  };

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClickJO = () => {
    console.log(scannedIn)
  }

  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setChecked((prev) => !prev);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  function FadeOutTime() {
    var min = 1500;
    var max = 4000;
    
    return Math.random() * (max - min) + min;
  }

  return (
    <div className={classes.root}>
       {isScanning.map((status) => (
           status === true ?
            <>
              <div style={{textAlign: "center"}}>
                <Tooltip title="Previous scan is progressing, please wait..." arrow placement="top">
                  <LinearProgress style={{width: "83%",marginLeft:90, height: 4}} />
                </Tooltip>
              </div>
            </>
            :
            null
        ))}
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={10}>
          {/* <button onClick={handleClickJO}>click</button> */}
                <Paper className={classes.paper}>
                    <table style={{width: "100%"}}>
                      <tr>
                        <td style={{width: "20%"}}>
                            <Typography variant="h6">
                              Scan Result
                            </Typography>
                        </td>
                        <td style={{textAlign: "right"}}>
                            <span style={{marginRight: 120, position: "relative", top: 5,}}>
                              
                            </span>
                        </td>
                      </tr>
                    </table>

                    
                    <div style={{textAlign: "center",marginTop: 15,marginLeft: 120}}>
                        <FormControl variant="outlined" style={{width: "100%"}}>
                            <InputLabel id="demo-simple-select-outlined-label">
                                Choose a target IP or Domain
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={storeTarget.target}
                                onChange={handleChange}
                                label="Choose a target IP or Domain"
                                style={{
                                    width: "83%",
                                    textAlign: "center",
                                }}
                            >
                              {scannedTarget.map((target) => (
                                  <MenuItem 
                                    key={target.id}
                                    value={target.id}
                                  >
                                    {target.target} - {target.runTime}
                                  </MenuItem>
                              ))}
                            </Select>
                        </FormControl>
                    </div>
                    { 
                        storeTarget.target === "" ?
                        null
                            :
                        <>
                            <br/><Divider variant="middle" />
                            <div id="scanResultTab">
                                <AppBar position="static">
                                    <Tabs 
                                        value={value} 
                                        onChange={handleTabChange} 
                                        indicatorColor="primary"
                                        textColor="primary"
                                        centered>
                                      <Tab label="Nmap Output" {...a11yProps(0)} style={{textTransform: "capitalize"}} />
                                      <Tab label="Hosts and Ports" {...a11yProps(1)} style={{textTransform: "capitalize"}} />
                                      <Tab label="CVE" {...a11yProps(2)} style={{textTransform: "capitalize"}} />
                                      <Tab label="Scan Details" {...a11yProps(3)} style={{textTransform: "capitalize"}} />
                                      <Tab label="Export Results" {...a11yProps(4)} style={{textTransform: "capitalize"}} />
                                    </Tabs>
                                </AppBar>
                                <Paper className={classes.paper}>
                                    <TabPanel value={value} index={0}>
                                        <NmapOutput />
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                      <div style={{whiteSpace: "normal"}}>
                                        <HostsAndPorts />
                                      </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <CVEResult />
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <ScanDetails />
                                    </TabPanel>
                                    <TabPanel value={value} index={4}>
                                        <ExportResult />
                                    </TabPanel>
                                </Paper>
                                <Button
                                  style={{
                                    width: "100%",
                                    marginTop: 15,
                                  }}
                                  variant="outlined"
                                  color="secondary"
                                >
                                  Delete Result
                                </Button>
                            </div>
                        </>
                    }
                    
                </Paper>
            </Grid>

      </Grid>
      
    </div>
  );
}
)