import React, {useState} from 'react';
import { makeStyles, createStyles, Theme, lighten } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';

// Backend
import { isScanning } from '../Backend/frontendData/isScanning'
import { pureOutput } from '../Backend/frontendData/Result'
import scannedIn from '../Backend/frontendData/scannedIn.json'
import scannedTarget from '../Backend/frontendData/scannedTargetForSelect.json'
import { rows } from '../Backend/frontendData/getPortStatus'
import { toDel } from '../Backend/frontendData/toDelete'

// Components
import NmapOutput from './ScanResults/NmapOutput'
import HostsAndPorts from './ScanResults/HostsAndPorts'
import ScanDetails from './ScanResults/ScanDetails'
import CVEResult from './ScanResults/CVEResult'
import ExploitCVE from './ScanResults/ExploitCVE'
import Firewalk from './ScanResults/Firewalk'
import WhoIs from './ScanResults/WhoIs'
import ExportResult from './ScanResults/ExportResult'

// Mobx Global Status
import { observer } from 'mobx-react-lite'
import storeTarget from '../Mobx/Models/resultSelectStatus'
import store from '../Mobx/Models/advancedModeStatus';

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

const DeleteSnackbar = () => {
  const [open, setOpen] = React.useState(false);

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
      <Button
        style={{
          width: "100%",
          marginTop: 15,
        }}
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        Delete Result
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        color="primary"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Are you sure you want to delete the result ? &nbsp;This action cannot be undone"
        action={
          <React.Fragment>
            <Button size="small" aria-label="close" color="inherit" onClick={handleClose} style={{position: 'absolute', left: 9,}}>
              Cancel
            </Button>
            <Button size="small" aria-label="close" color="inherit" type="submit" onClick={handleClose}>
              Yes, I'm sure
            </Button>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default observer (() => {
  const classes = mainStyles();

  const [forToDel, setForToDel] = useState(9999999);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // setTarget(event.target.value as any);
    storeTarget.setTarget(event.target.value as any)
    setForToDel(event.target.value as any)
  };

  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
       {isScanning.map((status) => (
           status === true ?
            <>
              <div style={{textAlign: "center"}}>
                <Tooltip title="Previous scan is progressing, please wait..." arrow placement="top">
                  <LinearProgress style={{width: "100%",marginLeft:0, height: 5, color: "#333"}} />
                </Tooltip>
              </div>
            </>
            :
            null
        ))}
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={12}>
          {/* <button onClick={handleClickJO}>click</button> */}
                <Paper className={classes.paper}>
                     <>
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
                                  {scannedTarget.map((target, index) => (
                                    target.id === "" || toDel.indexOf(target.id) > -1 ? null :
                                    <MenuItem 
                                      key={target.id}
                                      value={target.id}
                                    >
                                      {target.target.replace('sn\=', '\/')} - {target.runTime}
                                    </MenuItem>
                                  ))}
                              </Select>
                          </FormControl>
                      </div>
                      {storeTarget.target === "" ?
                          null
                              :
                          <>
                              <br/>
                              <div id="scanResultTab">
                                  <AppBar position="static" color="default">
                                      <Tabs 
                                          value={value} 
                                          onChange={handleTabChange} 
                                          indicatorColor="primary"
                                          textColor="primary"
                                          variant="scrollable"
                                          scrollButtons="on"
                                          centered>
                                        <Tab label="Nmap Output" {...a11yProps(0)} style={{textTransform: "capitalize"}} />
                                        <Tab label="Hosts and Ports" {...a11yProps(1)} style={{textTransform: "capitalize"}} />
                                        <Tab label="Scan Details" {...a11yProps(2)} style={{textTransform: "capitalize"}} />
                                        <Tab label="CVE" {...a11yProps(3)} style={{textTransform: "capitalize"}} />
                                        <Tab label="Exploit" {...a11yProps(4)} style={{textTransform: "capitalize"}} />
                                        <Tab label="Firewalk" {...a11yProps(5)} style={{textTransform: "capitalize"}} />
                                        <Tab label="WhoIs" {...a11yProps(6)} style={{textTransform: "capitalize"}} />
                                        <Tab label="Export Results" {...a11yProps(7)} style={{textTransform: "capitalize"}} />
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
                                          <ScanDetails />
                                      </TabPanel>
                                      <TabPanel value={value} index={3}>
                                          <CVEResult />
                                      </TabPanel>
                                      <TabPanel value={value} index={4}>
                                          <ExploitCVE />
                                      </TabPanel>
                                      <TabPanel value={value} index={5}>
                                          <Firewalk />
                                      </TabPanel>
                                      <TabPanel value={value} index={6}>
                                          <WhoIs />
                                      </TabPanel>
                                      <TabPanel value={value} index={7}>
                                          <ExportResult />
                                      </TabPanel>
                                  </Paper>
                                  <form method='post' action="http://localhost:5000/deleteResult">
                                    <input type='text' name='scanID' readOnly value={forToDel} style={{display: 'none'}}/>
                                    <DeleteSnackbar />
                                  </form>
                              </div>
                          </>
                        }

                     </>
                </Paper>
            </Grid>

      </Grid>
      
    </div>
  );
}
)