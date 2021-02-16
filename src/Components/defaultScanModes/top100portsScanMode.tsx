import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switcher from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import ScanModeIcon from '@material-ui/icons/Settings';

import '../../Styles/DefaultScanMode.css'

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
    avatarText: {
        background: "#4A92FF",
        borderRadius: 6,
        color: "#fff",
        padding: "2px 6px",
    },  
    switch: {
        disaply: "inline-block",
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(4);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const [state, setState] = React.useState({
    F: true,
  });

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    <div className={classes.root}>
      <Grid container spacing={5} justify="center" alignItems="center">
       
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    Top 100 Ports Scan Modes
                </Typography>
                    <br/>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Current Command" 
                        defaultValue="nmap -T4 -F + [ Target IP / Domain ] "
                        variant="outlined" 
                        size="small"
                        style={{
                            width: "80%",
                            marginLeft: 85,
                            textAlignLast: "center",
                        }}
                        inputProps={{ 
                            readOnly: true, 
                        }}
                    />
                </div>
                    <br/>
                <div className={classes.root}>
                    
                </div>
            </Paper>
        </Grid>

        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    Scan Frequency
                </Typography>
                    <br/>
                <div>
                     <Slider 
                        value={value} 
                        onChange={handleChange} 
                        max={5}
                        min={0}
                        step={1}
                        valueLabelDisplay="on"
                        style={{
                            width: "70%",
                            marginLeft: 145,
                        }}    
                    />
                </div>
                    <br/>
                <Typography style={{textAlign: "right",marginRight: 35}}>
                    -T&nbsp;
                    <Tooltip 
                        title="[ -T ] --- Specifies the timing (Timing) used in the scanning process, there are always 6 levels (0-5), the level increases, the faster the scanning speed." 
                        placement="top" 
                        arrow
                    >
                        <span className={classes.avatarText}>{value}</span>
                    </Tooltip>
                </Typography>
            </Paper>
        </Grid>

        <Grid item xs={10}>
           <Paper className={classes.paper}>
                <Typography variant="h6">
                    Flags
                </Typography>
                    <br/>
                
                    <div style={{textAlign: "center"}}>
                    <FormControl component="fieldset">
                        <table className="scanModeSettingFlagTable">
                            <tr>
                                <td>
                                    <Tooltip title="Fast port scan (100 ports). THIS MUST BE CHOSEN." placement="top" arrow>
                                        <FormControlLabel
                                            control={
                                                <Switcher
                                                    checked={state.F}
                                                    onChange={handleSwitchChange}
                                                    name="F"
                                                    color="primary"
                                                    disabled={true}
                                                />
                                            }
                                            label="-F"
                                            className={classes.switch}
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                        </table>
                    </FormControl>
                </div>
           </Paper>
        </Grid>

        <Grid item xs={10} style={{position: "absolute", width: 902, bottom: 0}}>
            <Paper className={classes.paper}>
                <Link to="/defaultScanMode">
                    <Button variant="contained">Back</Button>
                </Link>                
                <Button variant="contained" style={{float: 'right'}} onClick={handleClick}>Save</Button>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Settings Save Successfully"
                    action={
                    <React.Fragment>
                         <Link to="/defaultScanMode">
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" style={{color: "#fff"}}/>
                            </IconButton>
                        </Link>
                    </React.Fragment>
                    }
                />
            </Paper>
        </Grid>

      </Grid>
      
    </div>
  );
}
