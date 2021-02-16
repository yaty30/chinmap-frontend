import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

// json
import Data from './json/HostDiscovery/data.json'

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

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [state, setState] = React.useState({
      checkbox: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Host Discovery
        </Typography>
            <Divider style={{marginTop: 15, marginBottom: 15,}}/>
        <Typography variant="body2" component="p">
             <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <Grid container spacing={3}>
                        {Data.map((obj) => (
                            <Grid item xs={3}>
                                <Tooltip title={obj.tooltip} arrow placement="top">
                                    <FormControlLabel
                                        value="end"
                                        control={
                                            <Checkbox 
                                                color="primary" 
                                            />
                                        }
                                        label={obj.flag}
                                        labelPlacement="end"
                                    />
                                </Tooltip>
                            </Grid>
                        ))}
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
