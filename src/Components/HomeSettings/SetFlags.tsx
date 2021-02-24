import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import ScanTechinques from './ScanTechinques'
import HostDiscovery from './HostDiscovery'
import PortSpecification from './PortSpecification'
import ServiceAndVersionDetectiony from './ServiceAndVersionDetectiony'
import OSDetection from './OSDetection'
import TimingAndPerformance from './TimingAndPerformance'
import Output from './Output'


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
  mainGrid: {
    padding: "25px 75px",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container justify="center" spacing={5} className={classes.mainGrid}>
        <Grid item xs={12}>
            <ScanTechinques />
        </Grid>
        <Grid item xs={12}>
            <HostDiscovery />
        </Grid>

        <Grid item xs={12}>
            <PortSpecification />
        </Grid>
        <Grid item xs={12}>
            <ServiceAndVersionDetectiony />
        </Grid>

        <Grid item xs={12}>
            <OSDetection />
        </Grid>
        <Grid item xs={12}>
            <TimingAndPerformance />
        </Grid>

        <Grid item xs={12}>
            <Output />
        </Grid>
        <Grid item xs={12} />
    </Grid>
    
  );
}
