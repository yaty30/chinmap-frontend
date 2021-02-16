import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

// json

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
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const selectStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function OutlinedCard() {
  const classes = useStyles();
  const select = selectStyles();

  const [state, setState] = React.useState(false);

  const [timing, setTiming] = React.useState("");

  const handleTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTiming(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(!state);
    setTiming("");
  };


  return (
    
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Timing and Performance
        </Typography>
            <Divider style={{marginTop: 15, marginBottom: 15,}}/>
        <Typography variant="body2" component="p">
             <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Tooltip title="Timing and Performance" arrow placement="top">
                                <FormControlLabel
                                    value="end"
                                    control={
                                        <Checkbox 
                                            color="primary" 
                                            checked={state}
                                            onChange={handleChange}
                                        />
                                    }
                                    label="-T"
                                    labelPlacement="end"
                                    style={{
                                      whiteSpace: "nowrap",
                                      position: "relative",
                                      top: 12,
                                    }}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl className={select.formControl} style={{width: "100%",textAlignLast: "center"}}>
                              <InputLabel id="demo-simple-select-label">Timing Flag</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={timing}
                                onChange={handleTime}
                                style={{
                                  width: "100%",
                                }}
                                disabled={
                                  state === true ? false : true
                                }
                              >
                                <MenuItem value={0}>-T0</MenuItem>
                                <MenuItem value={1}>-T1</MenuItem>
                                <MenuItem value={2}>-T2</MenuItem>
                                <MenuItem value={3}>-T3</MenuItem>
                                <MenuItem value={4}>-T4</MenuItem>
                                <MenuItem value={5}>-T5</MenuItem>
                              </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </FormGroup>
            </FormControl>
        </Typography>
        <Divider style={{marginTop: 20,}}/>
      </CardContent>
      <CardActions>
        <Button size="small">Clear</Button>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}
