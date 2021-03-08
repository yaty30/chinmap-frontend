import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PortOpened from '@material-ui/icons/Visibility';
import PortFiltered from '@material-ui/icons/VisibilityOff';

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
    portPaper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      backgroundColor: "#fefefe",
      color: "#333333",
      minHeight: 170,
    },
    portChip: {
      textAlign: 'left',
      margin: 5,
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
    portList: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      height: 320,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
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
    setTimestampOne('');
    setTimestampTwo('');
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

  const [scanModeC1, setScanModeC1] = useState('');
  const [scanModeC2, setScanModeC2] = useState('');
  const [dateC1, setDateC1] = useState('');
  const [dateC2, setDateC2] = useState('');
  const [timeC1, settimeC1] = useState('');
  const [timeC2, settimeC2] = useState('');
  const [latencyC1, setlatencyC1] = useState('');
  const [latencyC2, setlatencyC2] = useState('');
  const [notShownC1, setnotShownC1] = useState('');
  const [notShownC2, setnotShownC2] = useState('');
  const [rawSentC1, setrawSentC1] = useState('');
  const [rawSentC2, setrawSentC2] = useState('');
  const [rawRcvtC1, setrawRcvtC1] = useState('');
  const [rawRcvtC2, setrawRcvtC2] = useState('');
  const [autoC1, setautoC1] = useState('');
  const [autoC2, setautoC2] = useState('');
  const [cveDetectC1, setcveDetectC1] = useState('');
  const [cveDetectC2, setcveDetectC2] = useState('');
  const [whoisC1, setwhoisC1] = useState('');
  const [whoisC2, setwhoisC2] = useState('');
  const [pbbC1, setpbbC1] = useState('');
  const [pbbC2, setpbbC2] = useState('');

  const ShowSame = () => {
    return(
        <Grid container justify="center">
            <Grid item xs={12} className={classes.cardGrid}>
                <TableContainer style={{width: '100%', marginLeft: 15,}}>
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
                            <TableRow style={{background: scanModeC1 === scanModeC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Scan Mode
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setScanModeC1(output.scanMode)}
                                        <TableCell align="left" key={index}>{output.scanMode}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setScanModeC2(output.scanMode)}
                                        <TableCell align="left" key={index}>{output.scanMode}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: dateC1 === dateC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Date
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setDateC1(output.date)}
                                        <TableCell align="left" key={index}>{output.date}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setDateC2(output.date)}
                                        <TableCell align="left" key={index}>{output.date}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: timeC1 === timeC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Time
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {settimeC1(output.time)}
                                        <TableCell align="left" key={index}>{output.time}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {settimeC2(output.time)}
                                        <TableCell align="left" key={index}>{output.time}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: latencyC1 === latencyC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Latency
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setlatencyC1(output.latency)}
                                        <TableCell align="left" key={index}>{output.latency}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setlatencyC2(output.latency)}
                                        <TableCell align="left" key={index}>{output.latency}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: notShownC1 === notShownC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Not Shown Ports
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setnotShownC1(output.notShown)}
                                        <TableCell align="left" key={index}>{output.notShown}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setnotShownC2(output.notShown)}
                                        <TableCell align="left" key={index}>{output.notShown}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: rawSentC1 === rawSentC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Raw Packets Sent
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setrawSentC1(output.rawPacket)}
                                        <TableCell align="left" key={index}>{output.rawPacket}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setrawSentC2(output.rawPacket)}
                                        <TableCell align="left" key={index}>{output.rawPacket}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: rawRcvtC1 === rawRcvtC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Raw Packets Received
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setrawRcvtC1(output.rcvd)}
                                        <TableCell align="left" key={index}>{output.rcvd}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setrawRcvtC2(output.rcvd)}
                                        <TableCell align="left" key={index}>{output.rcvd}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>
                            
                            <TableRow style={{background: autoC1 === autoC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Automation
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setautoC1(output.auto)}
                                        <TableCell align="left" key={index}>{output.auto === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setautoC2(output.auto)}
                                        <TableCell align="left" key={index}>{output.auto === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: cveDetectC1 === cveDetectC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    CVE Detection
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setcveDetectC1(output.cveDetect)}
                                        <TableCell align="left" key={index}>{output.cveDetect === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setcveDetectC2(output.cveDetect)}
                                        <TableCell align="left" key={index}>{output.cveDetect === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>
                            
                            <TableRow style={{background: whoisC1 === whoisC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    WhoIs
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setwhoisC1(output.whois)}
                                        <TableCell align="left" key={index}>{output.whois === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setwhoisC2(output.whois)}
                                        <TableCell align="left" key={index}>{output.whois === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: pbbC1 === pbbC2 ? '#F0FBF8' : 'transparent'}}>
                                <TableCell align="left">
                                    Ping Probes Blocking Bypass
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setpbbC1(output.pbb)}
                                        <TableCell align="left" key={index}>{output.pbb === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setpbbC2(output.pbb)}
                                        <TableCell align="left" key={index}>{output.pbb === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>
                        
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )  
  }

  const ShowDiff = () => {
    return(
        <Grid container justify="center">
            <Grid item xs={12} className={classes.cardGrid}>
                <TableContainer style={{width: '100%', marginLeft: 15,}}>
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
                            <TableRow style={{background: scanModeC1 != scanModeC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Scan Mode
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setScanModeC1(output.scanMode)}
                                        <TableCell align="left" key={index}>{output.scanMode}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setScanModeC2(output.scanMode)}
                                        <TableCell align="left" key={index}>{output.scanMode}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: dateC1 != dateC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Date
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setDateC1(output.date)}
                                        <TableCell align="left" key={index}>{output.date}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setDateC2(output.date)}
                                        <TableCell align="left" key={index}>{output.date}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: timeC1 != timeC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Time
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {settimeC1(output.time)}
                                        <TableCell align="left" key={index}>{output.time}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {settimeC2(output.time)}
                                        <TableCell align="left" key={index}>{output.time}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: latencyC1 != latencyC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Latency
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setlatencyC1(output.latency)}
                                        <TableCell align="left" key={index}>{output.latency}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setlatencyC2(output.latency)}
                                        <TableCell align="left" key={index}>{output.latency}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: notShownC1 != notShownC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Not Shown Ports
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setnotShownC1(output.notShown)}
                                        <TableCell align="left" key={index}>{output.notShown}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setnotShownC2(output.notShown)}
                                        <TableCell align="left" key={index}>{output.notShown}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: rawSentC1 != rawSentC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Raw Packets Sent
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setrawSentC1(output.rawPacket)}
                                        <TableCell align="left" key={index}>{output.rawPacket}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setrawSentC2(output.rawPacket)}
                                        <TableCell align="left" key={index}>{output.rawPacket}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: rawRcvtC1 != rawRcvtC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Raw Packets Received
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setrawRcvtC1(output.rcvd)}
                                        <TableCell align="left" key={index}>{output.rcvd}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setrawRcvtC2(output.rcvd)}
                                        <TableCell align="left" key={index}>{output.rcvd}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>
                            
                            <TableRow style={{background: autoC1 != autoC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Automation
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setautoC1(output.auto)}
                                        <TableCell align="left" key={index}>{output.auto === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setautoC2(output.auto)}
                                        <TableCell align="left" key={index}>{output.auto === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: cveDetectC1 != cveDetectC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    CVE Detection
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setcveDetectC1(output.cveDetect)}
                                        <TableCell align="left" key={index}>{output.cveDetect === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setcveDetectC2(output.cveDetect)}
                                        <TableCell align="left" key={index}>{output.cveDetect === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>
                            
                            <TableRow style={{background: whoisC1 != whoisC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    WhoIs
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setwhoisC1(output.whois)}
                                        <TableCell align="left" key={index}>{output.whois === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setwhoisC2(output.whois)}
                                        <TableCell align="left" key={index}>{output.whois === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>

                            <TableRow style={{background: pbbC1 != pbbC2 ? '#FFF1F1' : 'transparent'}}>
                                <TableCell align="left">
                                    Ping Probes Blocking Bypass
                                </TableCell>
                                <TableCell />
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampOne ?
                                    <>
                                        {setpbbC1(output.pbb)}
                                        <TableCell align="left" key={index}>{output.pbb === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                                {scannedIn.map((output, index) => (
                                    output.runTime == timestampTwo ? 
                                    <>
                                        {setpbbC2(output.pbb)}
                                        <TableCell align="left" key={index}>{output.pbb === 'false' ? 'Disabled' : 'Enabled'}</TableCell> 
                                    </> : null
                                ))}
                            </TableRow>
                        
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )  
  }

  const PortComparison = () => {
      
    return(
        <Grid container spacing={3} justify='center' style={{marginTop: 15,}}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography>
                        Date:
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper className={classes.portPaper}>
                    <List className={classes.portList} subheader={<li />}>
                        <li key="TCP" className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>TCP</ListSubheader>
                                {rows.map((output, index) => (
                                    output.target != targetToCompare ? null :
                                    output.timestamp != timestampOne ? null :
                                    output.port === 'tcp' ?
                                    <>
                                        <Tooltip title={`Port: ${output.portno}/${output.port} | Status: ${output.status} | Service: ${output.service}`} arrow placement='top-end'>
                                            <ListItem key={output.port} button style={{cursor: 'default'}}>
                                                <ListItemIcon>
                                                    {/* <StatusIcon style={{color: output.status === 'open' ? '#198BF7' : '#BA3B28'}} /> */}
                                                    {output.status === 'open' ? <PortOpened style={{color: '#198BF7'}}/> : <PortFiltered style={{color: '#BA3B28'}}/>}
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={`${output.portno}/${output.port}`} 
                                                    secondary={output.service}
                                                />
                                            </ListItem>
                                        </Tooltip>
                                    </>  : null
                                ))}
                            </ul>
                        </li>
                        <li key="UDP" className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>UDP</ListSubheader>
                                {rows.map((output, index) => (
                                    output.target != targetToCompare ? null :
                                    output.timestamp != timestampOne ? null :
                                    output.port === 'udp' ?
                                    <>
                                        <Tooltip title={`Port: ${output.portno}/${output.port} | Status: ${output.status} | Service: ${output.service}`} arrow placement='top-end'>
                                            <ListItem key={output.port} button style={{cursor: 'default'}}>
                                                <ListItemIcon>
                                                    {/* <StatusIcon style={{color: output.status === 'open' ? '#198BF7' : '#BA3B28'}} /> */}
                                                    {output.status === 'open' ? <PortOpened style={{color: '#198BF7'}}/> : <PortFiltered style={{color: '#BA3B28'}}/>}
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={`${output.portno}/${output.port}`} 
                                                    secondary={output.service}
                                                />
                                            </ListItem>
                                        </Tooltip>
                                    </>  : null
                                ))}
                            </ul>
                        </li>
                    </List>
                 </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.portPaper}>
                    <List className={classes.portList} subheader={<li />}>
                        <li key="TCP" className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>TCP</ListSubheader>
                                {rows.map((output, index) => (
                                    output.target != targetToCompare ? null :
                                    output.timestamp != timestampTwo ? null :
                                    output.port === 'tcp' ?
                                    <>
                                        <Tooltip title={`Port: ${output.portno}/${output.port} | Status: ${output.status} | Service: ${output.service}`} arrow placement='top-end'>
                                            <ListItem key={output.port} button style={{cursor: 'default'}}>
                                                <ListItemIcon>
                                                    {/* <StatusIcon style={{color: output.status === 'open' ? '#198BF7' : '#BA3B28'}} /> */}
                                                    {output.status === 'open' ? <PortOpened style={{color: '#198BF7'}}/> : <PortFiltered style={{color: '#BA3B28'}}/>}
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={`${output.portno}/${output.port}`} 
                                                    secondary={output.service}
                                                />
                                            </ListItem>
                                        </Tooltip>
                                    </> : null
                                ))}
                            </ul>
                        </li>
                        <li key="UDP" className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>UDP</ListSubheader>
                                {rows.map((output, index) => (
                                    output.target != targetToCompare ? null :
                                    output.timestamp != timestampTwo ? null :
                                    output.port === 'udp' ?
                                    <>
                                        <Tooltip title={`Port: ${output.portno}/${output.port} | Status: ${output.status} | Service: ${output.service}`} arrow placement='top-end'>
                                            <ListItem key={output.port} button style={{cursor: 'default'}}>
                                                <ListItemIcon>
                                                    {/* <StatusIcon style={{color: output.status === 'open' ? '#198BF7' : '#BA3B28'}} /> */}
                                                    {output.status === 'open' ? <PortOpened style={{color: '#198BF7'}}/> : <PortFiltered style={{color: '#BA3B28'}}/>}
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={`${output.portno}/${output.port}`} 
                                                    secondary={output.service}
                                                />
                                            </ListItem>
                                        </Tooltip>
                                    </>  : null
                                ))}
                            </ul>
                        </li>
                    </List>
                 </Paper>
            </Grid>
        </Grid>
    )
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
                               target.target === '' ? null :
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
                                        value={`${target.runTime}_${target.id}`} 
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
                                <Tab label="Show Same" {...a11yProps(0)} style={{textTransform: "capitalize"}} disabled={isDisabled}/>
                                <Tab label="Show Different" {...a11yProps(1)} style={{textTransform: "capitalize"}} disabled={isDisabled}/>
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
                                    <ShowSame /><PortComparison />
                                </TabPanel>    
                                <TabPanel value={value} index={1}>
                                    <ShowDiff /><PortComparison />
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
