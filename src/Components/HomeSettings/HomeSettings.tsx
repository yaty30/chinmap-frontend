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
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// Components
import scanTechniquesData from './json/ScanTechniques/data.json'
import hostDiscovery from './json/HostDiscovery/data.json'
import osDetection from './json/OSDetection/data.json'
import outputOpt from './json/Output/data.json'


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
    settingsStatus.setRange((event.target as HTMLInputElement).value);
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
                  <FormLabel component="legend">Set Range</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={setRange} onChange={handleSetRange} style={{marginLeft: 65,marginTop:15}}>
                    <table>
                      <tr>
                        <td>
                          <FormControlLabel value="oddOnly" control={<Radio />} label="Odd Numbers Only" />
                        </td>
                        <td>
                          <FormControlLabel value="even" control={<Radio />} label="Even Numbers Only" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormControlLabel value="every5hosts" control={<Radio />} label="Every 5 hosts" />
                        </td>
                        <td>
                          <FormControlLabel value="every10hosts" control={<Radio />} label="Every 10 hosts" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormControlLabel value="every15hosts" control={<Radio />} label="Every 15 hosts" />
                        </td>
                        <td>
                          <FormControlLabel value="every20hosts" control={<Radio />} label="Every 20 hosts" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormControlLabel value="none" control={<Radio />} label="None" />
                          
                        </td>
                      </tr>
                    </table>
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
            {/* Set Flags */}
            <Grid item xs={12}>
              <Paper style={{background: "#f9f9f9", padding: "15px 15px", textAlign: "center"}} elevation={0}>
                <Typography style={{textAlign: "left",marginBottom: 12,}}>Scan Techniques</Typography>
                {scanTechniquesData.map((data, index) => 
                  <Tooltip title={data.tooltip} arrow placement="top">
                      <FormControlLabel
                          value="end"
                          control={
                              <Checkbox 
                                  color="primary" 
                              />
                          }
                          label={data.flag}
                          labelPlacement="end"
                      />
                  </Tooltip>
                )}
                <Divider variant="middle" style={{marginTop: 10, marginBottom: 20,}}/>
                
                <Typography style={{textAlign: "left",marginBottom: 12,}}>Host Discovery</Typography>
                {hostDiscovery.map((data, index) => 
                  <Tooltip title={data.tooltip} arrow placement="top">
                      <FormControlLabel
                          value="end"
                          control={
                              <Checkbox 
                                  color="primary" 
                              />
                          }
                          label={data.flag}
                          labelPlacement="end"
                      />
                  </Tooltip>
                )}
                <Divider variant="middle" style={{marginTop: 10, marginBottom: 20,}}/>

                <Typography style={{textAlign: "left",marginBottom: 12,}}>OS Detection</Typography>
                {osDetection.map((data, index) => 
                  <Tooltip title={data.tooltip} arrow placement="top">
                      <FormControlLabel
                          value="end"
                          control={
                              <Checkbox 
                                  color="primary" 
                              />
                          }
                          label={data.flag}
                          labelPlacement="end"
                      />
                  </Tooltip>
                )}
                <Divider variant="middle" style={{marginTop: 10, marginBottom: 20,}}/>

                <Typography style={{textAlign: "left",marginBottom: 12,}}>Output</Typography>
                {outputOpt.map((data, index) => 
                  <Tooltip title={data.tooltip} arrow placement="top">
                      <FormControlLabel
                          value="end"
                          control={
                              <Checkbox 
                                  color="primary" 
                              />
                          }
                          label={data.flag}
                          labelPlacement="end"
                      />
                  </Tooltip>
                )}
                <Divider variant="middle" style={{marginTop: 10, marginBottom: 20,}}/>
              </Paper>
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


