import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

// Components
import Content from './AdvancedModeContent'

// Backend
import { isScanning } from '../Backend/frontendData/isScanning'

// Mobx
import advancedModeStatus from '../Mobx/Models/advancedModeStatus'

import '../Styles/AdvancedMode.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'rgba(0, 0, 0, 0.8)',
    }
  }),
);


export default () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    advancedModeStatus.setOpen(false);
    advancedModeStatus.setIsClick(false);
    setOpen(false)
    setTerminal('')
  };

  const [terminal, setTerminal] = useState('');
  const CommandValidator = () => {
    var command: string = ''
    var subnet:string = String(terminal.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.0\/\d+$/));
    var subnetReplaced: string = String(subnet.replace('/', 'sn\='))

    if(subnetReplaced != 'null'){
      command = subnetReplaced
    } else {
      command = terminal
    }

    return(
      <input 
        type='text'  
        readOnly 
        name='command' 
        value={command} 
        style={{display: ''}}
      />
    );
  }

  const TargetValidator = () => {
    var dm:string = String(terminal.match(/[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/));
    var ip:string = String(terminal.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/));
    var subnet:string = String(terminal.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.0\/\d+$/));
    var subnetReplaced: string = String(subnet.replace('/', 'sn\='))

    var target:string = '';

    if(dm != 'null'){
      target = dm
    } else if(ip != 'null'){
      target = ip
    } else if(subnetReplaced != 'null') {
      target = subnetReplaced
    } else { target = ' '}

    console.log(target)
      
    return(
      <input 
        type='text'  
        readOnly 
        name='target' 
        value={target} 
        style={{display: ''}}
      />
    );
  }

  const CancelAlert = () => {
    const [alertOpen, setAlertOpen] = React.useState(false);

    const handleClickOpen = () => {
      setAlertOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      setAlertOpen(false);
      setTerminal('')
    };

    return (
      <div>
        <Button color="primary" onClick={handleClickOpen}>
          Cancel
        </Button>
        <Dialog
          open={alertOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to leave this page?  You will lose all content in this mode.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAlertOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Yes, I'm sure
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div>
      <Button 
          variant="outlined" 
          style={{
              width: "100%", 
              whiteSpace: "nowrap",
              fontWeight: 'bold',
              background: '#343434',
              borderColor: '#191919',
              color: '#DFC500',
          }}
          size="small"
          color="primary"
          onClick={() => {
            advancedModeStatus.setOpen(true); 
            advancedModeStatus.setIsClick(true);
            setOpen(true)
          }}
      >
          Advanced Mode
          
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth='md' className={classes.root} id='advancedModeBody'>
          <DialogTitle id="form-dialog-title">Advanced Scan Mode</DialogTitle>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DialogContent>
              <DialogContentText>
                Pure command-line mode for advanced Nmap user.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Command Line"
                variant='outlined'
                InputProps={{
                  startAdornment: <InputAdornment position="start" style={{position: 'relative', bottom: 38,}}> nmap </InputAdornment>,
                }}
                spellCheck={false}
                value={terminal}
                onChange={(evt) => {setTerminal(evt.target.value as string); }}
                multiline
                rows={5}
                fullWidth
              />
            </DialogContent>
              <DialogActions>
                {terminal.length > 0 ? 
                  <CancelAlert /> 
                    :
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                }
                <div style={{position: 'relative', bottom: 2}}>
                  {isScanning.map((isScanning) => (
                      isScanning === true ?
                        <>
                          <Tooltip title="Previous scan is progressing, please wait..." arrow placement="top">
                            <Typography 
                              style={{
                                display: "inline-block",
                                position: "relative",
                                top: 6,
                                right: 5,
                                color: "lightgrey",
                                float: "right",
                                cursor: "default",
                                userSelect: "none",
                                textTransform: "uppercase",
                              }}
                            >
                              Scan
                            </Typography>
                          </Tooltip>
                        </> 
                        :
                        terminal === "" ?
                        <>
                          <Tooltip title="Please Enter the Target." arrow placement="top">
                            <span 
                              color="primary" 
                              style={{
                                float: "right",
                              }}
                              id="scanBtnDisabled"
                            >
                              Scan
                            </span>
                          </Tooltip>
                        </>
                          :
                        <>
                          <form method='post' action="http://localhost:5000/runAdvancedAPI">
                            <CommandValidator />
                            <TargetValidator />
                            <input 
                              color="primary" 
                              style={{
                                float: "right",
                              }}
                              type="submit"
                              value="Scan"
                              id="scanBtn"
                            />
                          </form>
                        </> 
                  ))}
                </div>
              </DialogActions>
            </Grid>
            
            <Grid item xs={12}>
              <div style={{padding: '25px 25px'}}>
                <Content />
              </div>
            </Grid>
          </Grid>
          

        </Dialog>
    </div>
  );
}
