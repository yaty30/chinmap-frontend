import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';

// Components
// import { others } from './homeSettingsData'

import SetFlags from './SetFlags'
import { automation, cveDetection } from './homeSettingsData'
import { targetData } from '../target'

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      color: "#fff",
      flex: 1,
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabs: {
      textTransform: "capitalize",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const cardStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  on: {
    borderColor: "red",
    minWidth: 275,
    minHeight: 270,
  },
  off: {
    minWidth: 275,
    minHeight: 270,
  },
  centeredGrid: {
    textAlign: "center",
    marginTop: 25,
  },
  radioBtn: {
    minWidth: 200,
  },  
});

export var scanRange = "";

export var autoVal = false;
export var cveVal = false;

function SettingsTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
  };

  const [setRangeBtnState, setSetRangeBtnState] = React.useState({
    option: false,
  })

  const [auto, setAuto] = React.useState(autoVal);
  const [cveDetect, setCveDetect] = React.useState(cveVal);

  const handleAuto = () => {
    setAuto(!auto);
  };

  const handleCve = () => {
    setCveDetect(!cveDetect);
  };


  function SetRange(): JSX.Element {
    const classes = useStyles();
    const cardStyling = cardStyles();

    const [setRangeBtnState, setSetRangeBtnState] = React.useState({
      option: false,
    })

    const handleSetRangeBtnStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSetRangeBtnState({ ...setRangeBtnState, [event.target.name]: event.target.checked });
    };

    const [setRangeBtnOpt, setSetRangeBtnOpt] = React.useState("");

    const handleOddNo = () => {
      setSetRangeBtnOpt("Odd Number")
      scanRange = "Odd Number";
    }

    const handleEvenNo = () => {
      setSetRangeBtnOpt("Even Number")
      scanRange = "Even Number";
    }

    const handleEveryFive = () => {
      setSetRangeBtnOpt("Every 5 hosts")
      scanRange = "Every 5 hosts";
    }

    const handleEveryTen = () => {
      setSetRangeBtnOpt("Every 10 hosts")
      scanRange = "Every 10 hosts";
    }

    const handleEveryFifteen = () => {
      setSetRangeBtnOpt("Every 15 hosts")
      scanRange = "Every 15 hosts";
    }

    const handleEveryTwenty = () => {
      setSetRangeBtnOpt("Every 20 hosts")
      scanRange = "Every 20 hosts";
    }

    /*const count = useSelector((state: storeTypes) => state.countReducer)*/
    /*const [count, setCount] = React.useState(0);*/

    return (
      <div className={classes.root}>
          {/*<h1>{`Click: ${count} times`}</h1>
          <button type="button" onClick={(): void => setCount( count + 1 )}>Click</button>*/}
          <Grid container justify="center" spacing={3} style={{padding: "25px 55px"}}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Scan host with: <span>{setRangeBtnOpt}</span>
              </FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  <Grid item xs={6} className={cardStyling.centeredGrid}>
                    <FormControlLabel
                      value="oddNum"
                      control={
                        <Radio 
                          color="primary"
                          name="oddNo" 
                          checked={setRangeBtnState.option}
                          onClick={handleOddNo} 
                          onChange={handleSetRangeBtnStateChange}
                        />
                      }
                      label="Odd Numbers Only"
                      labelPlacement="end"
                      className={cardStyling.radioBtn}
                    />
                  </Grid>
                  <Grid item xs={6} className={cardStyling.centeredGrid}>
                    <FormControlLabel
                      value="evenNum"
                      control={
                        <Radio 
                          color="primary"
                          name="evenNo" 
                          checked={setRangeBtnState.option}
                          onClick={handleEvenNo} 
                          onChange={handleSetRangeBtnStateChange}
                        />
                      }
                      label="Even Numbers Only"
                      labelPlacement="end"
                      className={cardStyling.radioBtn}
                    />
                  </Grid>
                      
                  <Grid item xs={6} className={cardStyling.centeredGrid}>
                    <FormControlLabel
                      value="everyFive"
                      control={
                        <Radio 
                          color="primary"
                          name="everyFive" 
                          checked={setRangeBtnState.option}
                          onClick={handleEveryFive} 
                          onChange={handleSetRangeBtnStateChange}
                        />
                      }
                      label="Every 5 hosts"
                      labelPlacement="end"
                      className={cardStyling.radioBtn}
                    />
                  </Grid>
                  <Grid item xs={6} className={cardStyling.centeredGrid}>
                    <FormControlLabel
                      value="everyTen"
                      control={
                        <Radio 
                          color="primary"
                          name="everyTen" 
                          checked={setRangeBtnState.option}
                          onClick={handleEveryTen} 
                          onChange={handleSetRangeBtnStateChange}
                        />
                      }
                      label="Every 10 hosts"
                      labelPlacement="end"
                      className={cardStyling.radioBtn}
                    />
                  </Grid>

                  <Grid item xs={6} className={cardStyling.centeredGrid}>
                    <FormControlLabel
                      value="everyFifteen"
                      control={
                        <Radio 
                          color="primary"
                          name="everyFifteen" 
                          checked={setRangeBtnState.option}
                          onClick={handleEveryFifteen} 
                          onChange={handleSetRangeBtnStateChange}
                        />
                      }
                      label="Every 15 hosts"
                      labelPlacement="end"
                      className={cardStyling.radioBtn}
                    />
                  </Grid>
                  <Grid item xs={6} className={cardStyling.centeredGrid}>
                    <FormControlLabel
                      value="everyTwenty"
                      control={
                        <Radio 
                          color="primary"
                          name="everyTwenty"
                          checked={setRangeBtnState.option}
                          onClick={handleEveryTwenty} 
                          onChange={handleSetRangeBtnStateChange}
                        />
                      }
                      label="Every 20 hosts"
                      labelPlacement="end"
                      className={cardStyling.radioBtn}
                    />
                  </Grid>
                  
                </RadioGroup>
            </FormControl>
          </Grid>
      </div>
    );
  }

  function Others() {
    const classes = useStyles();
    const cardStyling = cardStyles();
    
    const [auto, setAuto] = React.useState(false);
    const [cveDetect, setCveDetect] = React.useState(false);

    const handleAuto = () => {
      setAuto(!auto);
      if( auto === true ){
        autoVal = false;
        console.log(autoVal);
      } else{
        autoVal = true;
        console.log(autoVal);
      }
    };

    const handleCve = () => {
      setCveDetect(!cveDetect);
      if( cveDetect === true ){
        cveVal = false;
        console.log(cveVal);
      } else{
        cveVal = true;
        console.log(cveVal);
      }
    };

    const [state, setState] = React.useState({
      autoState: false,
      cveState: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    const autoArray = automation.length;

    return (
      <>
        <Card className={auto === true ? cardStyling.on : cardStyling.off} variant="outlined" >
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                  <Card className={auto === true ? cardStyling.on : cardStyling.off} variant="outlined" >
                      <CardContent>
                      <Typography className={cardStyling.title} style={{fontSize: 25}} color="textSecondary" gutterBottom>
                          Automation
                      </Typography>
                      <Typography variant="h5" component="h2">
                      </Typography>
                          <Divider style={{marginTop: 15, marginBottom: 15,}}/>
                      <Typography variant="body2" component="p">
                          When the system scan find out the result output as no host is alive, automation will allow the scan run again until there is at least one host is alive or all the hosts in desinated range is scanned.
                      </Typography>
                      </CardContent>
                      <CardActions>
                      <div style={{position:"relative", top: 35, left: 10,}}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={auto}
                              onChange={handleAuto}
                              name="auto"
                              color="primary"
                            />
                          }
                          label="Primary"
                        />
                      </div>
                      </CardActions>
                  </Card>
              </Grid>

              <Grid item xs={6}>
                  <Card className={cveDetect === true ? cardStyling.on : cardStyling.off} variant="outlined" >
                      <CardContent>
                      <Typography className={cardStyling.title} style={{fontSize: 25}} color="textSecondary" gutterBottom>
                          CVE Detect
                      </Typography>
                      <Typography variant="h5" component="h2">
                      </Typography>
                          <Divider style={{marginTop: 15, marginBottom: 15,}}/>
                      <Typography variant="body2" component="p">
                          When the system scan find out the result output as no host is alive, automation will allow the scan run again until there is at least one host is alive or all the hosts in desinated range is scanned.
                      </Typography>
                      </CardContent>
                      <CardActions>
                      <div style={{position:"relative", top: 35, left: 10,}}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={cveDetect}
                                onChange={handleCve}
                                name="cveDetect"
                                color="primary"
                              />
                            }
                            label="Primary"
                          />
                      </div>
                      </CardActions>
                  </Card>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
              <Button style={{float: "right"}}>Save</Button>
          </CardActions>
        </Card>
          </>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#333"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Set Range" {...a11yProps(0)} className={classes.tabs} style={{display: "none"}}/>
          <Tab label="Set Range Button" {...a11yProps(1)} className={classes.tabs}/>
          <Tab label="Set Flags" {...a11yProps(2)} className={classes.tabs}/>
          <Tab label="Others" {...a11yProps(3)} className={classes.tabs}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SetRange />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SetFlags /><span></span>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container justify="center" spacing={8} style={{padding: "25px 75px"}}>
          <br/><br/>
          <Others />
        </Grid>
      </TabPanel>
    </div>
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" size="small" style={{textTransform: "capitalize"}} onClick={handleClickOpen}>
        Settings
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Toolbar style={{backgroundColor: "#333"}}>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon style={{color:"#fff"}} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Settings
          </Typography>
        </Toolbar>
        <SettingsTab />
      </Dialog>
    </div>
  );
}
