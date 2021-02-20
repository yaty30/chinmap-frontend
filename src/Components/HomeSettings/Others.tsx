import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { automation, cveDetection } from './homeSettingsData'

// Mobx
import homeSettingsStatus from '../../Mobx/Models/homeSettingsStatus'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
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
});

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

export default function SimpleCard() {
  const classes = useStyles();
  const cardStyling = cardStyles();
  
  const [auto, setAuto] = React.useState(false);
  const [cveDetect, setCveDetect] = React.useState(false);

  const handleAuto = () => {
    setAuto(!auto);
    automation.push(true)
  };

  const handleCve = () => {
    setCveDetect(!cveDetect);
    cveDetection.push(true)
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
                    <span>{homeSettingsStatus.automation}</span>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={homeSettingsStatus.automation}
                            onChange={(e)=>(homeSettingsStatus.setAuto(e.target.value))}
                            name="autoState"
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
                        <Checkbox
                            checked={state.cveState}
                            onChange={handleChange}
                            // onClick={()=>(homeSettingsStatus.setCVE(!homeSettingsStatus.cveDetection))}
                            name="cveState"
                            color="primary"
                        />
                        }
                        label="Primary"
                    />
                </div>
                </CardActions>
            </Card>
        </Grid>
    </>
  );
}
