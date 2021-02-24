import React, {useState} from 'react';
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
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

// Mobx
import { observer } from 'mobx-react-lite'
import mode from '../../Mobx/Models/defaultScanModeStatus'

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
    appBar: {
        position: 'relative',
        background: "#333",
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      
    },
    avatarText: {
        background: "#4A92FF",
        borderRadius: 6,
        color: "#fff",
        padding: "2px 6px",
    }, 
    sectionStyle: {
        marginTop: 35, 
        border: "1px solid #C4C4C4", 
        padding: "10px 10px", 
        borderRadius: 5,
    },
    sectionTitleBg: {
        position: "relative",
        bottom: 22,
        background: "#fff",
        padding: "0 5px",
        width: "auto",
    },
    sectionTitle: {
        color: "#757575",
        fontSize: 13,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default observer (({index}:{index: number}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState<number>(mode.data[index].freq);

  const handleFreqChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const [radio, setRadio] = useState("-v");
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Settings
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{backgroundColor: "#333"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {mode.data[index].name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
          <table style={{marginTop: 25, padding: "45px 45px"}}>
            <tr>
                <td>
                    <TextField 
                        id="outlined-basic" 
                        label="Current Command" 
                        defaultValue={`${mode.data[index].command} [ Target or Domain ]`}
                        variant="outlined" 
                        size="small"
                        style={{
                            width: "100%",
                            textAlignLast: "center",
                        }}
                        inputProps={{ 
                            readOnly: true, 
                        }}
                    />
                </td>
            </tr>
                <tr>
                    <td>
                        <div className={classes.sectionStyle}>
                            <span className={classes.sectionTitleBg}>
                                <span className={classes.sectionTitle}>Scan Frequency</span>
                            </span>
                            <div>
                                <Slider 
                                    value={value} 
                                    onChange={handleFreqChange} 
                                    max={5}
                                    min={0}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    style={{
                                        width: "70%",
                                        marginLeft: 145,
                                    }}    
                                />
                            </div>
                                <br/>
                            <Typography style={{textAlign: "right",marginRight: 35}}>
                                -T&nbsp;
                                <Tooltip 
                                    title="[ -T ] --- Specifies the timing (Timing) used in the scanning process, there are always 6 levels (0-5), the level increases, the faster the scanning speed." 
                                    placement="top" 
                                    arrow
                                >
                                    <span className={classes.avatarText}>{value}</span>
                                </Tooltip>
                            </Typography>
                        </div>
                    </td>
                </tr>
                <tr>
                <td>
                    <div className={classes.sectionStyle}>
                        <span className={classes.sectionTitleBg}>
                            <span className={classes.sectionTitle}>Flag</span>
                        </span>
                        <div style={{textAlign: "center"}}>
                            <FormControl component="fieldset">
                                <table className="scanModeSettingFlagTable">
                                    <tr>
                                        <td>
                                            {
                                              mode.data[index].value == "topOneHundredScanMode" ? 
                                                null 
                                                  :
                                                <>
                                                  <RadioGroup row aria-label="position" name="position" defaultValue="top" value={radio} onChange={handleRadioChange}>
                                                      <Tooltip title="Increase the verbosity level" placement="top" arrow>
                                                          <FormControlLabel
                                                              value="-v"
                                                              control={<Radio color="primary"/>}
                                                              label="-v"
                                                              labelPlacement="end"
                                                          />
                                                      </Tooltip>
                                                      <Tooltip title="Use more v for greater effect" placement="top" arrow>
                                                          <FormControlLabel
                                                              value="-vv"
                                                              control={<Radio color="primary" />}
                                                              label="-vv"
                                                              labelPlacement="end"
                                                          />
                                                      </Tooltip>
                                                  </RadioGroup>
                                                </>
                                            }
                                        </td>
                                        <td>
                                            <Tooltip arrow placement="top" title={mode.data[index].flagsDes}>
                                              <FormControlLabel
                                                  value={mode.data[index].flags}
                                                  control={
                                                    <Checkbox 
                                                      color="primary" 
                                                      defaultChecked={mode.data[index].stMust === true ? true : false}
                                                      disabled={mode.data[index].stMust === true ? true : false}
                                                    />
                                                  }
                                                  label={mode.data[index].flags}
                                                  labelPlacement="end"
                                                  
                                              />
                                            </Tooltip>
                                            {
                                              mode.data[index].secFlags == "" ? null :
                                              <>
                                                <Tooltip arrow placement="top" title={mode.data[index].secFlagsDes}>
                                                  <FormControlLabel
                                                      value={mode.data[index].secFlags}
                                                      control={
                                                        <Checkbox 
                                                          color="primary" 
                                                          defaultChecked={mode.data[index].secMust === true ? true : false}
                                                          disabled={mode.data[index].secMust === true ? true : false}
                                                        />
                                                      }
                                                      label={mode.data[index].secFlags}
                                                      labelPlacement="end"
                                                  />
                                                </Tooltip>
                                              </>
                                            }
                                        </td>
                                    </tr>
                                </table>
                            </FormControl>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    
        </Dialog>
    </div>
  );
})
  