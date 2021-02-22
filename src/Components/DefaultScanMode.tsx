import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { observer } from 'mobx-react-lite'

// Components
import Result from './ScanResults/scanme.nmap.org'
import SettingDialog from './defaultScanModes/defaultModeDialog'

// Mobx
import defaultScanMode from '../Mobx/Models/defaultScanModeStatus'

import scanMode from '../Backend/frontendData/scanModes/default.json'

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
    appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    avatarText: {
        background: "#4A92FF",
        borderRadius: 6,
        color: "#fff",
        padding: "2px 6px",
    }, 
    sectionStyle: {
        marginTop: 35, 
        border: "1px solid #C4C4C4", 
        padding: "10px 10px", 
        borderRadius: 5,
    },
    sectionTitleBg: {
        position: "relative",
        bottom: 22,
        background: "#fff",
        padding: "0 5px",
        width: "auto",
    },
    sectionTitle: {
        color: "#757575",
        fontSize: 13,
    },
  }),
);


export default () => {
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
                        {defaultScanMode.data.map((mode, index) => (
                            <>
                                <Grid item xs={6}>
                                    <Card style={{minHeight: 190}}>
                                        <CardContent style={{whiteSpace: "nowrap", minHeight: 130}}>
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
                                            <SettingDialog index={index}/>
                                        </CardActions>
                                    </Card>
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
