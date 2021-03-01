import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

export default function CustomizedDialogs() {
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
            }}
            onClick={handleClickOpen}
            size="small"
            color="primary"
            disabled={homeSettingsStatus.range == '' || homeSettingsStatus.range == 'none' ? true : false}
        >
            Set Range:&nbsp;
            {
                homeSettingsStatus.range == '' ? 'none' :
                homeSettingsStatus.range == 'oddOnly' ?  'Odd Numbers Only' :
                homeSettingsStatus.range == 'evenOnly' ?  'Even Numbers Only' :
                homeSettingsStatus.range == 'every5hosts' ?  'Every 5 Hosts' :
                homeSettingsStatus.range == 'every10hosts' ?  'Every 10 Hosts' :
                homeSettingsStatus.range == 'every15hosts' ?  'Every 15 Hosts' : 'Every 20 Hosts'
            }
        </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth="sm">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Scan Range
        </DialogTitle>
        <DialogContent dividers>
            <Typography>
                {
                    homeSettingsStatus.range == '' ? 'none' :
                    homeSettingsStatus.range == 'oddOnly' ?  'Odd Numbers Only' :
                    homeSettingsStatus.range == 'evenOnly' ?  'Even Numbers Only' :
                    homeSettingsStatus.range == 'every5hosts' ?  'Every 5 Hosts' :
                    homeSettingsStatus.range == 'every10hosts' ?  'Every 10 Hosts' :
                    homeSettingsStatus.range == 'every15hosts' ?  'Every 15 Hosts' : 'Every 20 Hosts'
                }
            </Typography>
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
