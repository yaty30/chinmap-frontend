import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

// Components
import GoogleMap from './GoogleMapAPI'

// Mobx
import storeTarget from '../../Mobx/Models/resultSelectStatus'

// Backend
import { whoisScanOutput } from '../../Backend/frontendData/whoisScan'
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
            <Grid item xs={6}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {whoisScanOutput.map((data) => (
                                data.scanId === storeTarget.target ?
                                <>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Domain Name</TableCell>
                                        <TableCell>{data.name}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Creation Date</TableCell>
                                        <TableCell>{data.creationDate}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Expiration Date</TableCell>
                                        <TableCell>{data.expirationDate}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Last Updated</TableCell>
                                        <TableCell>{data.lastUpdated}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Registrar</TableCell>
                                        <TableCell>{data.registrar}</TableCell>
                                    </TableRow>
                                </> : null
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={6}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {targetGeo.map((geo) => (
                                geo.scanId === storeTarget.target ?
                                <>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>IP</TableCell>
                                        <TableCell>{geo.target}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Region</TableCell>
                                        <TableCell>{geo.region}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>City</TableCell>
                                        <TableCell>{geo.city}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Longitude</TableCell>
                                        <TableCell>{geo.longitude}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 120, fontWeight: 'bold'}}>Latitude</TableCell>
                                        <TableCell>{geo.latitude}</TableCell>
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