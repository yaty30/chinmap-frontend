import React, {useState} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Backend
import { result } from '../Backend/frontendData/advancedScan'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    paper: {
      marginBottom: 15,
    }
  }),
);

export default function PinnedSubheaderList() {
  const classes = useStyles();
  const [selectedResult, setSelectedResult] = useState(0);

  return (
    <>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <List className={classes.root} subheader={<li />}>
              {result.map((output, index) => (
                <li className={classes.listSection}>
                  <ul className={classes.ul}>
                    {output.scanID === '' ? null :
                      <ListItem key={index} button selected={index === selectedResult ? true : false}>
                        <ListItemText primary={output.scanID} onClick={() => setSelectedResult(index)} />
                      </ListItem>
                    }
                  </ul>
                </li>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {result.map((output, index) => (
              index === selectedResult ? 
                <Typography style={{padding: '15px 15px', whiteSpace: 'pre-line'}}>{output.output}</Typography> 
                  : 
                null
            ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
