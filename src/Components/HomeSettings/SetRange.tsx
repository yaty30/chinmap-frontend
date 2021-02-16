import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Components
// import { others } from './homeSettingsData'

// Redux
// import { useSelector } from 'react-redux'
// import { storeTypes } from './redux/configureStore'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const cardStyles = makeStyles({
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
  on: {
    borderColor: "red",
    minWidth: 275,
    minHeight: 270,
  },
  off: {
    minWidth: 275,
    minHeight: 270,
  },
  centeredGrid: {
    textAlign: "center",
    marginTop: 25,
  },
  radioBtn: {
    minWidth: 200,
  },  
});


export default function SetRange(): JSX.Element {
  const classes = useStyles();
  const cardStyling = cardStyles();

  const [setRangeBtnState, setSetRangeBtnState] = React.useState({
    option: false,
  })

  const handleSetRangeBtnStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSetRangeBtnState({ ...setRangeBtnState, [event.target.name]: event.target.checked });
  };

  const [setRangeBtnOpt, setSetRangeBtnOpt] = React.useState("");

  const handleOddNo = () => {
    setSetRangeBtnOpt("Odd Number")
  }

  const handleEvenNo = () => {
    setSetRangeBtnOpt("Even Number")
  }

  const handleEveryFive = () => {
    setSetRangeBtnOpt("Every 5 hosts")
  }

  const handleEveryTen = () => {
    setSetRangeBtnOpt("Every 10 hosts")
  }

  const handleEveryFifteen = () => {
    setSetRangeBtnOpt("Every 15 hosts")
  }

  const handleEveryTwenty = () => {
    setSetRangeBtnOpt("Every 20 hosts")
  }

  /*const count = useSelector((state: storeTypes) => state.countReducer)*/
  /*const [count, setCount] = React.useState(0);*/

  return (
    <div className={classes.root}>
        {/*<h1>{`Click: ${count} times`}</h1>
        <button type="button" onClick={(): void => setCount( count + 1 )}>Click</button>*/}
        <Grid container justify="center" spacing={3} style={{padding: "25px 55px"}}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Scan host with: <span>{setRangeBtnOpt}</span>
            </FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <Grid item xs={6} className={cardStyling.centeredGrid}>
                  <FormControlLabel
                    value="oddNum"
                    control={
                      <Radio 
                        color="primary"
                        name="oddNo" 
                        checked={setRangeBtnState.option}
                        onClick={handleOddNo} 
                        onChange={handleSetRangeBtnStateChange}
                      />
                    }
                    label="Odd Numbers Only"
                    labelPlacement="end"
                    className={cardStyling.radioBtn}
                  />
                </Grid>
                <Grid item xs={6} className={cardStyling.centeredGrid}>
                  <FormControlLabel
                    value="evenNum"
                    control={
                      <Radio 
                        color="primary"
                        name="evenNo" 
                        checked={setRangeBtnState.option}
                        onClick={handleEvenNo} 
                        onChange={handleSetRangeBtnStateChange}
                      />
                    }
                    label="Even Numbers Only"
                    labelPlacement="end"
                    className={cardStyling.radioBtn}
                  />
                </Grid>
                    
                <Grid item xs={6} className={cardStyling.centeredGrid}>
                  <FormControlLabel
                    value="everyFive"
                    control={
                      <Radio 
                        color="primary"
                        name="everyFive" 
                        checked={setRangeBtnState.option}
                        onClick={handleEveryFive} 
                        onChange={handleSetRangeBtnStateChange}
                      />
                    }
                    label="Every 5 hosts"
                    labelPlacement="end"
                    className={cardStyling.radioBtn}
                  />
                </Grid>
                <Grid item xs={6} className={cardStyling.centeredGrid}>
                  <FormControlLabel
                    value="everyTen"
                    control={
                      <Radio 
                        color="primary"
                        name="everyTen" 
                        checked={setRangeBtnState.option}
                        onClick={handleEveryTen} 
                        onChange={handleSetRangeBtnStateChange}
                      />
                    }
                    label="Every 10 hosts"
                    labelPlacement="end"
                    className={cardStyling.radioBtn}
                  />
                </Grid>

                <Grid item xs={6} className={cardStyling.centeredGrid}>
                  <FormControlLabel
                    value="everyFifteen"
                    control={
                      <Radio 
                        color="primary"
                        name="everyFifteen" 
                        checked={setRangeBtnState.option}
                        onClick={handleEveryFifteen} 
                        onChange={handleSetRangeBtnStateChange}
                      />
                    }
                    label="Every 15 hosts"
                    labelPlacement="end"
                    className={cardStyling.radioBtn}
                  />
                </Grid>
                <Grid item xs={6} className={cardStyling.centeredGrid}>
                  <FormControlLabel
                    value="everyTwenty"
                    control={
                      <Radio 
                        color="primary"
                        name="everyTwenty"
                        checked={setRangeBtnState.option}
                        onClick={handleEveryTwenty} 
                        onChange={handleSetRangeBtnStateChange}
                      />
                    }
                    label="Every 20 hosts"
                    labelPlacement="end"
                    className={cardStyling.radioBtn}
                  />
                </Grid>
                
              </RadioGroup>
          </FormControl>
        </Grid>
    </div>
  );
}

