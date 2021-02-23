import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { scanTarget, targetData, targetTime } from './target'

// Backend
import { isScanning } from '../Backend/frontendData/isScanning'
import { pureOutput } from '../Backend/frontendData/Result'
import scannedIn from '../Backend/frontendData/scannedIn.json'
import { rows } from '../Backend/frontendData/getPortStatus'

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
    showBtn: {
        marginTop: 15,
        textTransform: "capitalize",
    },
    cardGrid: {
        marginRight: 30,
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

export default () => {
  const classes = useStyles();
  const [targetToCompare, setTarget] = useState('');
  const [timestampOne, setTimestampOne] = useState('');
  const [timestampTwo, setTimestampTwo] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTarget(event.target.value as string);
    targetToCompare == " " ? setIsDisabled(true) : setIsDisabled(false) ;
  };

  const handleTimestampOneChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimestampOne(event.target.value as string);
  };

  const handleTimestampTwoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimestampTwo(event.target.value as string);
  };

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
                  <LinearProgress style={{width: "83%",marginLeft:90, height: 4}} />
                </Tooltip>
              </div>
            </>
            :
            null
        ))}
      <Grid container spacing={5} justify="center" alignItems="center">
       
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    Scan Comparison
                </Typography>
                <div style={{textAlign: "center",marginTop: 15,marginLeft: 120}}>
                    <FormControl variant="outlined" style={{width: "100%"}}>
                        <InputLabel id="select-outlined-label">
                            Choose a target IP or Domain
                        </InputLabel>
                        <Select
                            labelId="select-outlined-label"
                            id="select-outlined"
                            value={targetToCompare}
                            onChange={handleChange}
                            label="Choose a target IP or Domain"
                            style={{
                                width: "83%",
                                textAlign: "center",
                            }}
                        >
                            
                            {scannedIn.map((target, index) => (
                                <MenuItem 
                                    value={target.target} 
                                    key={index}
                                >
                                    {target.targetForSelect}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                    <br/><Divider variant="middle" />
                <Grid container justify="center" alignItems="center" className={classes.centerGrid}>
                    <Grid item xs={5}>
                        <Typography>Scan Result 1</Typography>
                            <br/>
                        <FormControl variant="outlined" style={{width: "100%", marginLeft: 85}}>
                            <InputLabel id="select-outlined-label">
                                Timestamp 1
                            </InputLabel>
                            <Select
                                labelId="select-outlined-label"
                                id="select-outlined"
                                value={timestampOne}
                                onChange={handleTimestampOneChange}
                                label="Timestamp 1"
                                style={{
                                    width: "50%",
                                    textAlign: "center",
                                }}
                                disabled={isDisabled}
                            >
                                {scannedIn.map((target) => (
                                    <MenuItem 
                                        value={target.runTime} 
                                        key={target.runTime}
                                        className={
                                            target.runTime == timestampTwo || target.target != targetToCompare ? classes.defaultHide : classes.defaultShow
                                        }
                                    >
                                        {target.runTime}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography>Scan Result 2</Typography>
                            <br/>
                        <FormControl variant="outlined" style={{width: "100%", marginLeft: 85}}>
                            <InputLabel id="select-outlined-label">
                                Timestamp 2
                            </InputLabel>
                            <Select
                                labelId="select-outlined-label"
                                id="select-outlined"
                                value={timestampTwo}
                                onChange={handleTimestampTwoChange}
                                label="Timestamp 2"
                                style={{
                                    width: "50%",
                                    textAlign: "center",
                                }}
                                disabled={isDisabled}
                            >
                                {scannedIn.map((target) => (
                                    <MenuItem 
                                        value={target.runTime} 
                                        key={target.runTime}
                                        className={
                                            target.runTime == timestampOne || target.target != targetToCompare ? classes.defaultHide : classes.defaultShow
                                        }
                                    >
                                        {target.runTime}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

            <Grid item xs={10}>
                <Paper className={classes.paper}>
                    <Grid item xs={12}>
                        <div id="scanComparisonTab">
                            <AppBar position="static">
                                <Tabs 
                                    value={value} 
                                    onChange={handleTabChange} 
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered>
                                    <Tab label="Show Same" {...a11yProps(0)} style={{textTransform: "capitalize"}} />
                                    <Tab label="Show Different" {...a11yProps(1)} style={{textTransform: "capitalize"}} />
                                </Tabs>
                            </AppBar>
                                <Divider variant="middle" />
                                <br/>
                            {
                                timestampOne == "" || timestampTwo == "" ?
                                null
                                    :
                                <>
                                    <Typography style={{textAlign: "center"}} color="textSecondary">Scan Result of [{targetToCompare}]</Typography>
                                    <TabPanel value={value} index={0}>
                                        <Grid container justify="center">
                                            <Grid item xs={12} className={classes.cardGrid}>
                                                <TableContainer>
                                                    <Table aria-label="simple table">
                                                        <TableHead>
                                                        <TableRow>
                                                            <TableCell align="left">Output</TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left">Scan A</TableCell>
                                                            <TableCell align="left">Scan B</TableCell>
                                                        </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Scan Mode
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.scanMode}</TableCell> : null
                                                                ))}
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Date
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.date}</TableCell> : null
                                                                ))}
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Time
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.time}</TableCell> : null
                                                                ))}
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Latency
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.latency}</TableCell> : null
                                                                ))}
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Not Shown Ports
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.notShown}</TableCell> : null
                                                                ))}
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Raw Packets Sent
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.rawPacket}</TableCell> : null
                                                                ))}
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell align="left">
                                                                    Raw Packets Received
                                                                </TableCell>
                                                                <TableCell />
                                                                {scannedIn.map((output, index) => (
                                                                    output.runTime == timestampOne || output.runTime == timestampTwo ? 
                                                                    <TableCell align="left" key={index}>{output.rcvd}</TableCell> : null
                                                                ))}
                                                            </TableRow>
                                                            
                                                            
                                                            
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>    
                                </>
                            }
                        </div>
                    </Grid>
                </Paper>
            </Grid>
      </Grid>
      <br/><br/>
    </div>
  );
}
