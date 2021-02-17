import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { scanTarget, targetData, targetTime } from '../target'

// Backend
import { isScanning } from '../../Backend/frontendData/isScanning'
import { pureOutput } from '../../Backend/frontendData/Result'
import scannedIn from '../../Backend/frontendData/scannedIn.json'
import { rows } from '../../Backend/frontendData/getPortStatus'

// Mobx Global Status
import selectResult from '../../Mobx/Models/resultSelectStatus'

export default () => {
    return(
      <>
          {pureOutput.map((obj) => (
            <>
              {
                obj.id == selectResult.target ?
                  <>
                     <Typography style={{whiteSpace: "pre-line"}}>
                        {obj.output}
                      </Typography>
                  </>
                    :
                  null
              }
            </>
          ))}
        
      </>
    );
  }