import React, {useState} from 'react';
import { makeStyles, createStyles, Theme, lighten } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import InfoIcon from '@material-ui/icons/Info';
import CVEicon from '@material-ui/icons/Extension';

// import { targetData, chosenMode, scanTarget } from './target'

// Backend
import { rows } from '../../Backend/frontendData/cveScanOutput'

// Mobx Global Status
// import { observer } from 'mobx-react-lite'
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
              <TableCell />
              <TableCell align="left">CVE</TableCell>
              <TableCell align="left">INFO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <>
                {
                  row.scanId === storeTarget.target ?
                    <>
                      <TableRow key={row.cve} hover>
                        <TableCell>
                            <Tooltip title='Click for more information' placement='top'>
                                <a href={`https://nvd.nist.gov/vuln/detail/${row.cve.substring(1, row.cve.length-1)}`} target='_blank'>
                                    <IconButton>
                                        <LinkIcon style={{color: '#416CEC'}} />
                                    </IconButton>
                                </a>
                            </Tooltip>
                        </TableCell>
                        <TableCell align="left" style={{whiteSpace: 'nowrap', fontWeight: 'bold'}}>
                            {row.cve.substring(1, row.cve.length-1)}
                        </TableCell>
                        <TableCell align="left">{row.info}</TableCell>
                      </TableRow>
                    </>
                      : 
                   null
                }
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}