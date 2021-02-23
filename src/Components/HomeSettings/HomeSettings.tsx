import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// Components

// Mobx
import settingsStatus from '../../Mobx/Models/homeSettingsStatus'

import SetFlags from './SetFlags'
import { automation, cveDetection } from './homeSettingsData'
import { targetData } from '../target'
import { settings } from 'cluster';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    container: {
      display: 'flex',
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }),
);

export default () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    settingsStatus.setAuto(false)
    settingsStatus.setCve(false)
    setOthers({
      automation: false,
      cveDetect: false,
      pn: false,
      whoIs: false,
    })
  }

  const [others, setOthers] = useState({
    automation: false,
    cveDetect: false,
    pn: false,
    whoIs: false,
  });

  const handleOthersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOthers({ ...others, [event.target.name]: event.target.checked });
  };

  const [setRange, setSetRange] = useState('');

  const handleSetRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSetRange((event.target as HTMLInputElement).value);
  };

  const [setRangeEveryHosts, setSetRangeEveryHosts] = useState('');

  const handleSetRangeEveryHosts = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSetRangeEveryHosts((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.root}>
      <Button 
        onClick={handleClickOpen}
        style={{
          textTransform: "none"
        }}
      >
        Settings
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add-on Features"}</DialogTitle>
        <DialogContent>
          <Divider variant="middle" style={{marginBottom: 25}}/>
          <Grid container spacing={6}>
            {/* Set Range */}
            <Grid item xs={12}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Sen Range</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={setRange} onChange={handleSetRange} style={{marginLeft: 45,marginTop:15}}>
                    <FormControlLabel value="oddOnly" control={<Radio />} label="Odd Numbers Only" />
                    <FormControlLabel value="even" control={<Radio />} label="Even Numbers Only" />
                    <FormControlLabel value="everyhosts" control={<Radio />} label="Every x hosts" />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <RadioGroup style={{marginLeft: 45}} value={setRangeEveryHosts} onChange={handleSetRangeEveryHosts}>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <FormControlLabel value="fiveHosts" disabled={setRange === 'everyhosts' ? false : true} control={<Radio color="primary" />} label="Every 5 hosts" />
                          </td>
                          <td>
                            <FormControlLabel value="tenHosts" disabled={setRange === 'everyhosts' ? false : true} control={<Radio color="primary" />} label="Every 10 hosts" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormControlLabel value="FifteenHosts" disabled={setRange === 'everyhosts' ? false : true} control={<Radio color="primary" />} label="Every 15 hosts" />
                          </td>
                          <td>
                            <FormControlLabel value="TwentyHosts" disabled={setRange === 'everyhosts' ? false : true} control={<Radio color="primary" />} label="Every 20 hosts" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
            {/* Set Flags */}
            <Grid item xs={12}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>xs=12</Paper>
            </Grid>
            {/* Others */}
            <Grid item xs={6}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                <FormControlLabel
                  label="Automation"
                  control={
                    <Switch
                      checked={others.automation}
                      onChange={handleOthersChange}
                      onClick={() => settingsStatus.setAuto(!settingsStatus.automation)}
                      name="automation"
                      inputProps={{ 'aria-label': 'Automation' }}
                    />
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                <FormControlLabel
                  label="CVE Detection"
                  control={
                    <Switch
                      checked={others.cveDetect}
                      onChange={handleOthersChange}
                      onClick={() => settingsStatus.setCve(!settingsStatus.cve)}
                      name="cveDetect"
                      inputProps={{ 'aria-label': 'CVE Detection' }}
                    />
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                <FormControlLabel
                  label="Ping Block Bypassing"
                  control={
                    <Switch
                      checked={others.pn}
                      onChange={handleOthersChange}
                      onClick={() => settingsStatus.setPn(!settingsStatus.pn)}
                      name="pn"
                      inputProps={{ 'aria-label': 'Ping Block Bypassing' }}
                    />
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px"}} elevation={0}>
                <FormControlLabel
                  label="WhoIs"
                  control={
                    <Switch
                      checked={others.whoIs}
                      onChange={handleOthersChange}
                      onClick={() => settingsStatus.setWhoIs(!settingsStatus.whoIs)}
                      name="whoIs"
                      inputProps={{ 'aria-label': 'WhoIs' }}
                    />
                  }
                />
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


