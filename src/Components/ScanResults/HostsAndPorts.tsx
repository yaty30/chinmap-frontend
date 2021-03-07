import React, {useState} from 'react';
import { makeStyles, createStyles, Theme, lighten } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PortOpened from '@material-ui/icons/Visibility';
import PortFiltered from '@material-ui/icons/VisibilityOff';

// import { targetData, chosenMode, scanTarget } from './target'

// Backend
import { rows } from '../../Backend/frontendData/getPortStatus'

// Components
import NmapOutput from './NmapOutput'

// Mobx Global Status
import { observer } from 'mobx-react-lite'
import storeTarget from '../../Mobx/Models/resultSelectStatus'

const mainStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      backgroundColor: "#fefefe",
      color: "#333333",
    },
    centerGrid: {
        textAlign: "center",
        marginTop: 15,
    },
    btnTabs: {
        textTransform: "capitalize",
    },
    cardRoot: {
        marginTop: 25,
    },
    title: {
        fontSize: 14,
        whiteSpace: "pre-line",
    },
    pos: {
        marginBottom: 12,
    },
    defaultShow: {

    },
    defaultHide: {
        display: "none",
    },
    centering: {
      textAlignLast: "center",
      width: "70%",
      userSelect: "none",
    },
    datepicker: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default () => {
const classes = mainStyles();
  
    return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">PORT</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center">SERVICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <>
                {
                  row.scanId == storeTarget.target ?
                    <>
                      <TableRow key={row.scanId + "_" + row.portno}>
                        <TableCell align="center">
                          {row.portno}/{row.port}
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={row.status}
                            style={{
                              textTransform: "uppercase",
                              // fontWeight: "bold",
                              color: row.status == 'open' ? '#198BF7' : '#BA3B28',
                              minWidth: 120,
                            }}
                            icon={
                              row.status == 'open' ? <PortOpened style={{color: '#198BF7'}}/> : <PortFiltered style={{color: '#BA3B28'}}/>
                            }
                            clickable
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell align="center">{row.service}</TableCell>
                      </TableRow>
                    </>
                      : null
                }
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}