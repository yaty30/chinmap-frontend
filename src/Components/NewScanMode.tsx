import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


import { TCPoptions } from './TCPoptions'
import { nonTCPoptions } from './nonTCPoptions'

// Options 
import Ping from './NewScanModeTab/Ping'
import NSE from './NewScanModeTab/NSE'
import Target from './NewScanModeTab/Target'
import Source from './NewScanModeTab/Source'
import Timing from './NewScanModeTab/Timing'
import Others from './NewScanModeTab/Others'

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avatarText: {
    background: "#4A92FF",
    borderRadius: 6,
    color: "#fff",
    padding: "2px 6px",
  },  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  fullDes: {
    color: "red",
  },
  des: {

  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modeName, setModeName] = useState("");
  const [modeDes, setModeDes] = useState("");
  const [value, setValue] = useState(0);
  const [frequency, setFrequency] = useState<number>(4);
  const [TCP, setTCP] = useState('');
  const [nonTCP, setNonTCP] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTCP = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTCP(event.target.value as string);
  };

  const handleNonTCP = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNonTCP(event.target.value as string);
  };

  const handleScanFrequency = (event: any, newValue: number | number[]) => {
    setFrequency(newValue as number);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModeName(event.target.value as string)
  }

  const handleModeDes = (event: React.ChangeEvent<{ value: unknown }>) => {
    setModeDes(event.target.value as string)
  }

  // Push to array
  const handleCreate = () => {
    //setTheArray(theArray => [ ...theArray, {name: modeName, link: "!@3", value: "dsad", des: modeDes} ]);
    //console.log(theArray);
    
   
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{width: "100%", backgroundColor: "#ffffff", color: "#333333"}}>
        Add New Scan Mode
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="sm">
          <DialogTitle id="form-dialog-title">Add New Scan Mode</DialogTitle>
          <DialogContent>
              <Divider /><br/>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable">
                  <Tab label="Profile" {...a11yProps(0)} />
                  <Tab label="Ping" {...a11yProps(1)} />
                  <Tab label="NSE" {...a11yProps(2)} />
                  <Tab label="Target" {...a11yProps(3)} />
                  <Tab label="Source" {...a11yProps(4)} />
                  <Tab label="Timing" {...a11yProps(5)} />
                  <Tab label="Others" {...a11yProps(6)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Grid container spacing={3} justify="center">
                    <div style={{textAlign: "center", width: "100%"}}>
                      <Grid item xs={12}>
                          <TextField 
                            value={modeName} 
                            onChange={handleModeName} 
                            label="Mode Name" 
                            margin="dense" 
                            size="small"
                            variant="outlined"
                            style={{
                              width: "80%",
                            }}
                          />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField 
                            value={modeDes}
                            onChange={handleModeDes}
                            label="Mode Description (Optional)" 
                            margin="dense" 
                            multiline
                            rows={3}
                            size="small"
                            variant="outlined"
                            inputProps={{ 
                              maxLength: 100
                            }}
                            style={{
                              width: "80%",
                              textAlignLast: "left",
                            }}
                        />
                        <Typography style={{textAlign: "right", color: "lightgrey", fontSize: 10, marginRight: 55}}>
                          <span className={modeDes.length == 100 ? classes.fullDes : classes.des}>{modeDes.length}</span> / 100
                        </Typography>
                      </Grid>
                      <br/><Divider variant="middle" /><br/>
                      <Grid item xs={12}>
                          <Typography style={{textAlign: "left"}}>Scan Frequency</Typography>
                          <Slider 
                            value={frequency} 
                            onChange={handleScanFrequency}  
                            min={0}
                            max={5}
                            step={1}
                            valueLabelDisplay="auto"
                            aria-labelledby="continuous-slider" 
                            style={{
                              width: "50%",
                            }}
                          />

                          <Tooltip 
                              title="[ -T ] --- Specifies the timing (Timing) used in the scanning process, there are always 6 levels (0-5), the level increases, the faster the scanning speed." 
                              placement="top" 
                              arrow
                          >
                            <Typography style={{textAlign: "center"}}>-T <span className={classes.avatarText}>{frequency}</span></Typography>
                          </Tooltip>
                      </Grid>
                      <br/><Divider variant="middle" /><br/>
                      <Grid item xs={12}>
                        <Tooltip 
                          arrow 
                          placement="left"
                          title="TCP connect scan is the default TCP scan type when SYN scan is not an option."
                        >
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">TCP Scans</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={TCP}
                              onChange={handleTCP}
                              style={{
                                width: 250,
                              }}
                            >
                              <MenuItem>None</MenuItem>
                              {TCPoptions.map((option) => (
                                <MenuItem value={option.value}>{option.flag}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Tooltip>
                      </Grid>
                      <br/><Divider variant="middle" /><br/>
                      <Grid item xs={12}>
                          <Tooltip 
                            arrow 
                            placement="left"
                            title="Non-TCP connect scan is the default non-TCP scan type when SYN scan is not an option."
                          >
                            <FormControl className={classes.formControl}>
                              <InputLabel id="demo-simple-select-label">Non-TCP Scans</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={nonTCP}
                                onChange={handleNonTCP}
                                style={{
                                  width: 250,
                                }}
                              >
                                <MenuItem>None</MenuItem>
                                {nonTCPoptions.map((option) => (
                                  <MenuItem value={option.value}>{option.flag}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Tooltip>
                      </Grid>
                    </div>
                </Grid>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Ping />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <NSE />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Target />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Source />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Timing />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Others />
              </TabPanel>
              
          </DialogContent>
              <Divider variant="middle" style={{display: loading === true ? 'none' : 'block'}}/>
              <LinearProgress style={{display: loading === true ? 'block' : 'none'}}/>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <form method='post' action="http://localhost:5000/addMode">
              <div style={{display: 'none'}}>
                <input type='text' name='name' value={modeName} />
                <input type='text' name='des' value={modeDes} />
                <input type='text' name='freq' value={frequency} />
                <input type='text' name='tcp' value={TCP} />
                <input type='text' name='nontcp' value={nonTCP} />
              </div>
              <input 
              color="primary" 
              style={{
                float: "right",
                position: 'relative',
                bottom: 2,
                borderRadius: 4,
                fontSize: 14,
              }}
              onClick={()=>setLoading(true)}
              type="submit"
              value="Create"
              id="scanBtn"
            />
            </form>
            
          </DialogActions>
        </Dialog>
    </div>
  );
}
