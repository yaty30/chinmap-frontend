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
import NewScanMode from './NewScanMode'

import { customisedScanModes } from './NewScanModeArray'

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

export default function CenteredGrid() {
  const classes = useStyles();

  const handleDeleteMode = () => {
    customisedScanModes.splice(0, 1); 
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={5} justify="center" alignItems="center">
       
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    Customised Scan Modes
                </Typography>
                    <br/><br/>
                <Grid container justify="center" spacing={5}>
                    {customisedScanModes.map((mode) => (
                        <>
                            <Grid item xs={6} id={mode.name}>
                                <Card>
                                    <CardContent style={{whiteSpace: "nowrap"}}>
                                        <Typography color="textSecondary" style={{fontWeight: "bold", fontSize: 18}} gutterBottom>
                                            {mode.name}
                                        </Typography>
                                        <Divider /><br/>
                                        <Typography color="textSecondary" gutterBottom style={{whiteSpace: "normal"}}>
                                            {mode.des}
                                        </Typography>
                                    </CardContent>
                                        <Divider variant="middle" />
                                    <CardActions style={{textAlign: "center"}}>
                                    <Link to="/pingScanMode">
                                        <Button 
                                            color="primary" 
                                            style={{
                                                textTransform: "capitalize",
                                            }}>
                                            Setting<ScanModeIcon style={{fontSize: 20}}/>
                                        </Button>
                                    </Link>
                                        <Button
                                            color="primary" 
                                            style={{
                                                textTransform: "capitalize",
                                                marginLeft: 65,
                                                color: "red",
                                            }}
                                            onClick={handleDeleteMode}
                                        >
                                            Delete<DeleteMode/>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={10}>
            <NewScanMode />
        </Grid>

      </Grid>
      
    </div>
  );
}
