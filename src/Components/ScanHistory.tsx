import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import ShowHistoryIcon from '@material-ui/icons/DoubleArrow';

// Backend
import history from '../Backend/frontendData/scannedTargetForSelect.json'
import { isScanning } from '../Backend/frontendData/isScanning'
import scannedIn from '../Backend/frontendData/scannedIn.json'
import { toDel } from '../Backend/frontendData/toDelete'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
      },
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
    table: {
        minWidth: 650,
    },
  }),
);

const DoneScanning = () => {
    const [open, setOpen] = useState(true);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
      <div>
        {isScanning.map((status: boolean) => (
            status === true ?
                <>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Scanning is progressing..."
                        action={
                            <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                            </React.Fragment>
                        }
                        />
                </>
            :
                null
        ))}
      </div>
    );
}
  
export default () => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
  <>
      {isScanning.map((status) => (
          status === true ?
          <>
            <div style={{textAlign: "center"}}>
              <Tooltip title="Previous scan is progressing, please wait..." arrow placement="top">
                <LinearProgress style={{width: "83%",marginLeft:90, height: 4}} />
              </Tooltip>
            </div>
          </>
          :
          null
      ))}
      <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={10}>
              <Paper className={classes.paper}>  
                  <Typography variant="h6">
                      Scan History
                  </Typography>
                      <br/><br/>
                  <TableContainer>
                      <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell align="center">Target</TableCell>
                            <TableCell align="center">Timestamp</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {history.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((target) => (
                                target.target == "" || toDel.indexOf(target.id) > -1 ? 
                                    null
                                        :
                                    <TableRow key={target.id} hover>
                                        <TableCell align="center">{target.target.replace('sn\=', '\/')}</TableCell>
                                        <TableCell align="center">{target.runTime}</TableCell>
                                        <TableCell align="center">{target.date}</TableCell>
                                        <TableCell align="center">
                                            <Link to="/scanResult">
                                                <IconButton>
                                                    <ShowHistoryIcon />
                                                </IconButton>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                  </TableContainer>
                  <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  component="div"
                  count={history.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Paper>
          </Grid>
      </Grid>
  </>
  );
}