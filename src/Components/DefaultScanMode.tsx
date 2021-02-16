import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import ScanModeIcon from '@material-ui/icons/Settings';
import DeleteMode from '@material-ui/icons/DeleteForever';

import Result from './ScanResults/scanme.nmap.org'



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
    listGrid: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const defaultScanModes = [
    {
        name: "Ping Scan Mode",
        link: "/pingScanMode",
        value: "pingScanMode",
        des: "This mode will not do a port scan after host discovery, and only print out the available hosts that responded to the host discovery probes.",
    },
    {
        name: "Lightning Scan Mode",
        link: "/lightningScanMode",
        value: "lightningScanMode",
        des: "Lightning scan mode able to check specific ports in a rapid way that user can see if the target is scannable or not.",
    },
    {
        name: "Intense Scan Mode",
        link: "/intenseScanMode",
        value: "intenseScanMode",
        des: "Intense scan mode is capable of getting the information of the target's OS, services version and tracing the target router in one command.",
    },
    {
        name: "Non-Ping Scan Mode",
        link: "/nonPingScanMode",
        value: "nonPingScanMode",
        des: "Non-Ping scan mode is specifically aim for checking the target is alive or down.",
    },
    {
        name: "Top 100 Ports Scan Mode",
        link: "/top100PortsScanMode",
        value: "topOneHundredScanMode",
        des: "Top 100 Ports scan mode will show the top 100 poplar ports, such as DNS, SMTP or HTTP. This mode can dramatically speed up scanning while still representing the majority of commonly used ports.",
    },
    {
        name: "Full Ports Scan Mode",
        link: "/fullPortsScanMode",
        value: "fullPortsScanMode",
        des: "This mode is able to check every single port of a pc, however, it requires a while of time.",
    },
]

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5} justify="center" alignItems="center">
       
        <Grid item xs={10}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">
                        Default Scan Modes
                    </Typography>
                        <br/>
                    <Grid container justify="center" spacing={5}>
                        {defaultScanModes.map((mode) => (
                            <>
                                <Grid item xs={6}>
                                    <Link to={mode.link}>
                                        <Card>
                                            <CardContent style={{whiteSpace: "nowrap"}}>
                                                <Typography color="textSecondary" style={{fontWeight: "bold", fontSize: 18}} gutterBottom>
                                                    {mode.name}
                                                </Typography>
                                                <Divider /><br/>
                                                <div style={{whiteSpace: "normal"}}>
                                                    <Typography color="textSecondary">{mode.des}</Typography>
                                                </div>
                                            </CardContent>
                                                <Divider variant="middle" />
                                            <CardActions style={{textAlign: "center"}}>
                                            <Link to={mode.link}>
                                                <Button 
                                                    color="primary" 
                                                    style={{
                                                        textTransform: "capitalize",
                                                    }}>
                                                    Setting<ScanModeIcon style={{fontSize: 20}}/>
                                                </Button>
                                            </Link>
                                            </CardActions>
                                        </Card>
                                    </Link>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Paper>
            </Grid>

      </Grid>
      
    </div>
  );
}
