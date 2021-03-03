import React, {useState} from 'react';
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

import modeData from '../Backend/frontendData/customisedScanModeStatus'
import AddNewMode from '../Mobx/Models/addCustomisedScanModeStatus'

import ModeSetting from './NewScanModeTab/customisedModeDialog'


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

export default () => {
  const classes = useStyles();

  const [type, setType] = useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setType(event.target.value as string)
  }

  interface customisedMode{
      type: string
  }

  const [mode, setMode] = useState<customisedMode[]>([]);

  return (
    <div className={classes.root}>
      <Grid container spacing={5} justify="center" alignItems="center">
       
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h6">
                    Customised Scan Modes
                    {/* <Button onClick={()=>{setMode([...mode, {type}])}}>ADD NEW</Button> */}
                </Typography>
                    <br/><br/>
                <Grid container justify="center" spacing={5}>
                    {modeData.rows.map((data, index) => (
                        data.profile.map((data, index) => (
                            data.modeID === '' ? 
                            null
                                :
                            <>
                                <Grid item xs={6} id="1">
                                    <Card>
                                        <CardContent style={{whiteSpace: "nowrap"}}>
                                            <>
                                                <Typography color="textSecondary" style={{fontWeight: "bold", fontSize: 18}} gutterBottom>
                                                    {data.name}
                                                </Typography>
                                                    <Divider /><br/>
                                                <Typography color="textSecondary" gutterBottom style={{whiteSpace: "normal"}}>
                                                    {data.des}
                                                </Typography>
                                            </>
                                        </CardContent>
                                                <Divider variant="middle" />
                                        
                                        <CardActions style={{textAlign: "center"}}>
                                            <ModeSetting index={index}/>
                                            <form method='post' action="http://localhost:5000/deleteMode">
                                                <input style={{display: 'none'}} type='text' readOnly name='modeID' value={data.modeID} />
                                                <button type='submit' id="deleteBtn"><span>Delete</span><DeleteMode id="delIcon"/></button>
                                            </form>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>
                        ))
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
