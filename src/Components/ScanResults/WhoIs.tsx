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
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Domain Name</TableCell>
                                        <TableCell align='right'>{data.name}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Creation Date</TableCell>
                                        <TableCell align='right'>{data.creationDate}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Expiration Date</TableCell>
                                        <TableCell align='right'>{data.expirationDate}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Last Updated</TableCell>
                                        <TableCell align='right'>{data.lastUpdated}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Registrar</TableCell>
                                        <TableCell align='right'>{data.registrar}</TableCell>
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
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>IP</TableCell>
                                        <TableCell align='right'>{geo.target}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Region</TableCell>
                                        <TableCell align='right'>{geo.region}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>City</TableCell>
                                        <TableCell align='right'>{geo.city}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Longitude</TableCell>
                                        <TableCell align='right'>{geo.longitude}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Latitude</TableCell>
                                        <TableCell align='right'>{geo.latitude}</TableCell>
                                    </TableRow>
                                </> : null
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {whoisScanOutput.map((data) => (
                                data.scanId === storeTarget.target ?
                                <>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Netrange</TableCell>
                                        <TableCell align='right'>{data.netrange}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Netname</TableCell>
                                        <TableCell align='right'>{data.netname}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Organisation Name</TableCell>
                                        <TableCell align='right'>{data.orgname}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Organisation ID</TableCell>
                                        <TableCell align='right'>{data.orgid}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Country</TableCell>
                                        <TableCell align='right'>{data.country.substring(9)}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>State and Province</TableCell>
                                        <TableCell align='right'>{data.stateprov.substring(11)}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Organisation Tech Name</TableCell>
                                        <TableCell align='right'>{data.orgtechname}</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell style={{width: 200, fontWeight: 'bold'}}>Organisation Tech E-mail</TableCell>
                                        <TableCell align='right'>{data.orgtechemail}</TableCell>
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