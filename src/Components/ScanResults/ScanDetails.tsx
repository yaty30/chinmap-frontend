import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';

import { scanTarget, targetData, targetTime, chosenMode, scanDate } from '../target'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
      },
    },
    centering: {
      textAlignLast: "center",
      width: "70%",
      userSelect: "none",
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  const handleClick = () => {
    console.log(targetData);
  }

  return (
    <>
        <button onClick={handleClick}>click</button>
        {targetData.map((target) => (
            target.target == "" ?
                null
                    :
                <form 
                    className={classes.root} 
                    noValidate 
                    autoComplete="off"
                >
                    <br/>
                    <Grid container justify="center" spacing={2} style={{width: "100%", textAlign: "center"}}>
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Target" 
                            variant="outlined" 
                            value={target.target}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Time" 
                            variant="outlined" 
                            value={target.time}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                      </Grid>

                      <Grid item xs={6} style={{width: "100%"}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Chosen Scan Mode" 
                            variant="outlined" 
                            value={target.scanMode}
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                        <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                          <TextField
                              className={classes.centering} 
                              id="outlined-basic" 
                              label="Target Scanned In" 
                              variant="outlined" 
                              value="0.33s"
                              inputProps={{
                                  readOnly: true,
                              }}
                            />
                        </Grid>
                      
                      <Grid item xs={6} style={{width: "100%"}}>
                        <TextField
                          className={classes.centering} 
                          id="outlined-basic" 
                          label='Scan Date [D/M/Y]' 
                          variant="outlined" 
                          value={target.scanDate}
                          inputProps={{
                              readOnly: true,
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Latency" 
                            variant="outlined" 
                            value="0.17s"
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>

                      <Grid item xs={12} style={{width: "100%", marginBottom: 15, marginTop: 25,}}>
                        <Divider /><br/>
                        <div style={{textAlign: "left"}}><FormLabel component="legend">Scan Settings</FormLabel></div>
                      </Grid>

                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Range" 
                            variant="outlined" 
                            value="true"
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Scan Flags" 
                            variant="outlined" 
                            value="true"
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="Automation" 
                            variant="outlined" 
                            value="true"
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                      <Grid item xs={6} style={{width: "100%", marginBottom: 55}}>
                        <TextField
                            className={classes.centering} 
                            id="outlined-basic" 
                            label="CVE Detection" 
                            variant="outlined" 
                            value="true"
                            inputProps={{
                                readOnly: true,
                            }}
                          />
                      </Grid>
                    </Grid>
                </form>
        ))}
    </>
  );
}
