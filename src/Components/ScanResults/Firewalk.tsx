import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

// Mobx
import storeTarget from '../../Mobx/Models/resultSelectStatus'

// Backend
import { rows } from '../../Backend/frontendData/firewalkOutput'
import { targetGeo } from '../../Backend/frontendData/targetGeo'
import store from '../../Mobx/Models/homeSettingsStatus'

const useStyles = makeStyles({
    table: {
        minWidth: 'auto',
    },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}
  
export default () => {
    const classes = useStyles();
    

    return (
        <Grid container justify='center' spacing={3}>
            <Grid item xs={12}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {rows.map((data) => (
                                data.scanId === storeTarget.target ?
                                <>
                                    <TableRow hover>
                                        <TableCell style={{width: 300, fontWeight: 'bold'}}>Hop</TableCell>
                                        <TableCell>{data.hop.substring(1)}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 300, fontWeight: 'bold'}}>Host</TableCell>
                                        <TableCell>{data.host}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 300, fontWeight: 'bold'}}>Protocol</TableCell>
                                        <TableCell>{data.protocol}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 300, fontWeight: 'bold'}}>Blocked Ports</TableCell>
                                        <TableCell>{data.blockedPorts}</TableCell>
                                    </TableRow>
                                </> : null
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}