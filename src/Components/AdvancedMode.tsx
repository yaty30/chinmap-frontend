import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ScanIcon from '@material-ui/icons/GpsNotFixed';
import { TransitionProps } from '@material-ui/core/transitions';

import Content from './AdvancedModeContent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      background: '#333333',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            onClick={handleClickOpen}
        >
            Advanced Mode
            
        </Button>
        <div>
            <Dialog fullScreen open={open} id="advancedModeBody" onClose={handleClose} TransitionComponent={Transition} style={{background: '#161616'}}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Sound
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                    save
                    </Button>
                </Toolbar>
                </AppBar>
                <TextField 
                    id="outlined-basic" 
                    label="Command Line"
                    variant="outlined" 
                    className='advancedTextField'
                    multiline
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <ScanIcon style={{color: '#fff'}}/>
                                </IconButton>
                            </InputAdornment>,
                    }}
                />
            </Dialog>
        </div>
    </div>
  );
}
