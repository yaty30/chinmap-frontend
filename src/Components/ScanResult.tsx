import React from 'react';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switcher from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import FormLabel from '@material-ui/core/FormLabel';
import HelpIcon from '@material-ui/icons/Help';
import CsvDownloader from 'react-csv-downloader';
import CsvLink from 'react-csv-export';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import LinearProgress from '@material-ui/core/LinearProgress';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import PortOpened from '@material-ui/icons/Visibility';
import PortFiltered from '@material-ui/icons/VisibilityOff';
import { targetData, chosenMode, scanTarget } from './target'


// Backend
import { isScanning } from '../Backend/frontendData/isScanning'
import { pureOutput } from '../Backend/frontendData/Result'
import scannedIn from '../Backend/frontendData/scannedIn.json'
import scannedTarget from '../Backend/frontendData/scannedTargetForSelect.json'
import { rows } from '../Backend/frontendData/getPortStatus'

// Mobx Global Status
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
  
  function TabPanel(props: TabPanelProps) {
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
  
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default () => {
  const classes = mainStyles();
  const [target, setTarget] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTarget(event.target.value as any);
    // setTarget(storeTarget.target)
  };

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClickJO = () => {
    console.log(scannedIn)
    alert(target)
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
  
  function NmapOutput() {
    return(
      <>
        
          {pureOutput.map((obj) => (
            <>
              {
                obj.id == target ?
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

  function HostsAndPorts() {
  
    return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">PORT</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center">SERVICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <>
                {
                  row.scanId == target ?
                    <>
                      <TableRow key={row.scanId + "_" + row.portno}>
                        <TableCell align="center">
                          {row.portno}/{row.port}
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={row.status}
                            style={{
                              textTransform: "uppercase",
                              // fontWeight: "bold",
                              color: row.status == 'open' ? '#198BF7' : '#BA3B28',
                              minWidth: 120,
                            }}
                            icon={
                              row.status == 'open' ? <PortOpened style={{color: '#198BF7'}}/> : <PortFiltered style={{color: '#BA3B28'}}/>
                            }
                            clickable
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell align="center">{row.service}</TableCell>
                      </TableRow>
                    </>
                      : null
                }
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  function ScanDetails() {
    const classes = mainStyles();
  
    const handleClick = () => {
      console.log(targetData);
    }

    return (
      <>
          {scannedIn.map((data) => (
            data.id != target || target === "" || data.target === "" ?
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
                                  data.auto == "True" ? "Enabled" : "Disabled"
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
                                  data.cveDetect == "True" ? "Enabled" : "Disabled"
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

  function ExportResult() {
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
              obj.id != target || target === "" || obj.target === "" ?
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
                                value={target}
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
                        target === "" ?
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
                                        CVE
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
