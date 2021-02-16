import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import HelpIcon from '@material-ui/icons/Help';

import { scanTarget, targetData, targetTime } from '../target'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
        {targetData.map((target) => (
            target.target == "" ?
                null
                    :
                <>
                    <Grid container justify="center" spacing={5}>
                        <Grid item xs={12} style={{textAlign: "center"}}>
                            <form 
                                className={classes.root} 
                                noValidate 
                                autoComplete="off"
                            >
                                <TextField 
                                    id="outlined-basic" 
                                    label="Current Target" 
                                    variant="outlined" 
                                    value={target.target}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    style={{
                                        textAlignLast: "center",
                                        width: "60%",
                                    }}
                                />
                                
                            </form>
                        </Grid>

                        <Grid item xs={12} style={{textAlign: "center", position: "relative", left: 12,}}>
                            <ButtonGroup 
                                size="large" 
                                color="primary" 
                            >
                                <Button style={{width: "50%"}}>
                                    CSV
                                </Button>
                                <Button style={{width: "50%"}}>
                                    Excel
                                </Button>
                            </ButtonGroup>
                            <Tooltip title="By clicking the button, the scan result will be exported to a file in the format of CSV or Excel." arrow placement="top">
                                <span style={{position:"relative", top: 5, left: 15, color: "lightgrey", cursor: "pointer"}}>
                                    <HelpIcon style={{fontSize: 20}}/>
                                </span>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    
                </>
        ))}
    </>
  );
}
