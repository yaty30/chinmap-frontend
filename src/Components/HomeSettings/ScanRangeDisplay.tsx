import React, {useState} from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

// Mobx
import homeSettingsStatus from '../../Mobx/Models/homeSettingsStatus'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [setRange, setSetRange] = useState('')
  const RangeCalc = () => {
    var target = homeSettingsStatus.target;
    var range  = homeSettingsStatus.range;
    var subnet = target.split("/").pop();
    var s: number, e: number, xrange: number;

    if(subnet === '24'){
        s = 0; e = 256;
    } else if(subnet === '25') {
        s = 0; e = 128;
    } else if(subnet === '26') {
        s = 0; e = 64;
    } else if(subnet === '27') {
        s = 0; e = 32;
    } else if(subnet === '28') {
        s = 0; e = 16;
    } else if(subnet === '29') {
        s = 0; e = 8;
    } else {
        s = 0; e = 4;
    }

    s += 1;
    e -= 2;
    
    range === 'every5hosts' ? xrange = 5 :
    range === 'every10hosts' ? xrange = 10 :
    range === 'every15hosts' ? xrange = 15 :
    range === 'every20hosts' ? xrange = 20 : xrange = 404

    // Calculation
    var i;
    var calced = target.substr(0, target.indexOf('.0')) + '.'; 
    if(range === 'evenOnly'){
        for(i=s; i<=e; i++){
            if(i % 2 === 0){// Get even number
                calced += i + ',';
            }
        }
    } else if(range === 'oddOnly') {
        for(i=s; i<=e; i++){
            if(i % 2 === 1){ // Get odd numbers
                calced += i + ',';
            }
        }
    } else if(range === 'every5hosts') {
        for(i=s; i<=e; i++){
            if(i % 5 === 1){ // Get every 5 hosts
                calced += i + ',';
            }
        }
    } else if(range === 'every10hosts') {
        for(i=s; i<=e; i++){
            if(i % 10 === 1){ // Get every 10 hosts
                calced += i + ',';
            }
        }
    } else if(range === 'every15hosts') {
        for(i=s; i<=e; i++){
            if(i % 15 === 1){ // Get every 15 hosts
                calced += i + ',';
            }
        }
    } else if(range === 'every20hosts') {
        for(i=s; i<=e; i++){
            if(i % 20 === 1){ // Get every 20 hosts
                calced += i + ',';
            }
        }
    }
    
    var output: any, exceeded: boolean = false;
    var dotOneTarget: any = target.slice(0, -4) + '1' ;
    if(s + e < xrange){
        output = "**For /" + subnet + ", there's only " + (s + e - 1) + ' hosts only.**'; 
        exceeded = true;
        homeSettingsStatus.setRangeTarget(output)
    } else {
        output = calced.slice(0, -1);
        exceeded = false;
        homeSettingsStatus.setRangeTarget(output)
    }

    return(
        <>
            <Typography style={{whiteSpace: 'normal'}}>
                {output}{exceeded === true ? <><br/><br/>{dotOneTarget}</> : null}
            </Typography>
        </>
    )

  }

  return (
    <div>
        <Button 
            variant="outlined" 
            style={{
                width: "100%", 
                whiteSpace: "nowrap",
            }}
            onClick={handleClickOpen}
            size="small"
            color="primary"
            disabled={homeSettingsStatus.range === '' || homeSettingsStatus.range === 'none' ? true : false}
        >
            Set Range:&nbsp;
            {
                homeSettingsStatus.range === '' ? 'none':
                homeSettingsStatus.range === 'oddOnly' ?  'Odd Numbers Only' :
                homeSettingsStatus.range === 'evenOnly' ?  'Even Numbers Only' :
                homeSettingsStatus.range === 'every5hosts' ?  'Every 5 Hosts' :
                homeSettingsStatus.range === 'every10hosts' ?  'Every 10 Hosts' :
                homeSettingsStatus.range === 'every15hosts' ?  'Every 15 Hosts' : 'Every 20 Hosts'
            }
        </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth="sm">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Scan Range
        </DialogTitle>
        <DialogContent dividers>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                        <Typography>
                            {homeSettingsStatus.target}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'center'}}>
                    <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                        <Typography>
                            {
                                homeSettingsStatus.range === '' ? 'none' :
                                homeSettingsStatus.range === 'oddOnly' ?  'Odd Numbers Only' :
                                homeSettingsStatus.range === 'evenOnly' ?  'Even Numbers Only' :
                                homeSettingsStatus.range === 'every5hosts' ?  'Every 5 Hosts' :
                                homeSettingsStatus.range === 'every10hosts' ?  'Every 10 Hosts' :
                                homeSettingsStatus.range === 'every15hosts' ?  'Every 15 Hosts' : 'Every 20 Hosts'
                            }
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                        <RangeCalc />
                    </Paper>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
