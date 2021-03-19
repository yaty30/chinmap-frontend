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

  const handleClose = () => {
    advancedModeStatus.setOpen(false);
    advancedModeStatus.setIsClick(false);
  };

  const [terminal, setTerminal] = useState('');

  const CancelAlert = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      advancedModeStatus.setOpen(false);
    };

    return (
      <div>
        <Button color="primary" onClick={handleClickOpen}>
          Cancel
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
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
          }}
      >
          Advanced Mode
          
      </Button>
      <form method='post' action="http://localhost:5000/runAPI">
        <Dialog open={advancedModeStatus.dialogStatus} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth='md' className={classes.root} id='advancedModeBody'>
          <input type="text" readOnly name="advanced" value={advancedModeStatus.isClick === true ? 'true' : 'false'} style={{display: 'none'}} />
          <DialogTitle id="form-dialog-title">Advanced Scan Mode</DialogTitle>
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
              spellCheck={false}
              value={terminal}
              onChange={(evt) => setTerminal(evt.target.value as string)}
              multiline
              rows={20}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            {terminal.length > 1 ? 
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
                      <input 
                        color="primary" 
                        style={{
                          float: "right",
                        }}
                        type="submit"
                        value="Scan"
                        id="scanBtn"
                      />
                    </> 
              ))}
            </div>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
