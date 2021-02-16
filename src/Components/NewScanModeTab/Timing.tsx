import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

import { Timing } from './NewModeOptions'

export default function FormControlLabelPosition() {
  return (
    <>
      <Grid container spacing={3}>
        {Timing.map((option) => (
          <Grid item xs={12}>
            <Tooltip title={option.tooltip} arrow placement="right">
              <FormControl component="fieldset" style={{width: 450}}>
                <FormControlLabel
                  value={option.value}
                  control={<Checkbox color="primary" />}
                  label={option.des}
                  labelPlacement="end"
                />
                {
                  option.input === true ?
                    <>
                      <TextField 
                          label={`Example Input: ${option.egInput}`} 
                          margin="dense" 
                          size="small"
                          variant="outlined"
                          style={{
                            width: "100%",
                            textAlignLast: "center",
                          }}
                      />
                    </>
                      :
                    null
                }
              </FormControl>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
