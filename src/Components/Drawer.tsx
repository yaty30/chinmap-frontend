import React, { Suspense } from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import HomeIcon from '@material-ui/icons/Home';
import DefaultScanModeIcon from '@material-ui/icons/GpsNotFixed';
import CustomisedScanModeIcon from '@material-ui/icons/People';
import ScanResultIcon from '@material-ui/icons/Storage';
import ResultComparisonIcon from '@material-ui/icons/CompareArrows';
import ScanHistoryIcon from '@material-ui/icons/History';

// Components
import Home from '../Views/Home'
import DefaultScanMode from '../Views/DefaultScanMode'
import CustomisedScanMode from '../Views/CustomisedScanMode'
import ScanResult from '../Views/ScanResult'
import ScanComparison from '../Views/ScanComparison'
import ScanHistory from '../Views/ScanHistory'

// Default Scan Modes
import PingScanMode from '../Components/defaultScanModes/pingScanMode'
import FullPortsScanMode from '../Components/defaultScanModes/fullPortsScanMode'
import InenseScanMode from '../Components/defaultScanModes/intenseScanMode'
import NonPingScanMode from '../Components/defaultScanModes/nonPingScanMode'
import LightningScanMode from '../Components/defaultScanModes/lightningScanMode'
import Top100PortsScanMode from '../Components/defaultScanModes/top100portsScanMode'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            width: 250,
            },
            fullList: {
            width: 'auto',
            },
            content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            marginTop: 65,
        },
        root: {
            display: 'flex',
          },
          appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "#333333",
          },
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          drawerContainer: {
            overflow: 'auto',
          },
        itemIcon: {
          color: "#0E397C",
        }
    }),
);


type Anchor = 'left';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    > 
      <List id="menuList">
        <Typography variant="h4" id="menuAppTitle">ChiNmap</Typography>
            
            <br /><Divider />

        <Link to='/'>
            <ListItem button key="home">
                <ListItemIcon><InboxIcon className={classes.itemIcon}/></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>

        <Link to='/defaultScanMode'>
            <ListItem button key="defaultScanMode">
                <ListItemIcon><DefaultScanModeIcon className={classes.itemIcon}/></ListItemIcon>
                <ListItemText primary="Default Scan Modes" />
            </ListItem>
        </Link>
        
        <Link to='/customisedScanMode'>
            <ListItem button key="customisedScanMode">
                <ListItemIcon><CustomisedScanModeIcon className={classes.itemIcon}/></ListItemIcon>
                <ListItemText primary="Customised Scan Modes" />
            </ListItem>
        </Link>

        <Link to='/scanResult'>
            <ListItem button key="scanResult">
                <ListItemIcon><ScanResultIcon className={classes.itemIcon}/></ListItemIcon>
                <ListItemText primary="Scan Result" />
            </ListItem>
        </Link>

        <Link to='/scanComparison'>
             <ListItem button key="scanComparison">
                <ListItemIcon><ResultComparisonIcon className={classes.itemIcon}/></ListItemIcon>
                <ListItemText primary="Scan Comparison" />
            </ListItem>
        </Link>

        <Link to='/scanHistory'>
            <ListItem button key="scanHistory">
                <ListItemIcon><ScanHistoryIcon className={classes.itemIcon}/></ListItemIcon>
                <ListItemText primary="Scan History" />
            </ListItem>
        </Link>
        
      </List>
    </div>
  );

  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Button onClick={toggleDrawer(anchor, true)} id="menuBtn">
                        <MenuIcon style={{fontSize: 35}}/>
                    </Button>
                </Toolbar>
            </AppBar>
        <BrowserRouter>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
            <main className={classes.content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            render={ 
                                () => <Home /> 
                            } 
                        />

                        <Route 
                            exact 
                            path="/defaultScanMode" 
                            render={ 
                                () => <DefaultScanMode /> 
                            } 
                        />
                        
                        <Route 
                            path="/customisedScanMode" 
                            render={ 
                                () => <CustomisedScanMode />
                            } 
                        />

                        <Route 
                            path="/scanResult" 
                            render={ 
                                () => <ScanResult />
                            } 
                        />
                        <Route 
                            path="/scanComparison" 
                            render={ 
                                () => <ScanComparison />
                            } 
                        />

                        <Route 
                            path="/scanHistory" 
                            render={ 
                                () => <ScanHistory />
                            } 
                        />

                        {/* Default Scan Mode Routes */ }
                        <Route 
                            path="/pingScanMode" 
                            render={ 
                                () => <PingScanMode />
                            } 
                        />

                        <Route 
                            path="/fullPortsScanMode" 
                            render={ 
                                () => <FullPortsScanMode />
                            } 
                        />

                        <Route 
                            path="/intenseScanMode" 
                            render={ 
                                () => <InenseScanMode />
                            } 
                        />

                        <Route 
                            path="/nonPingScanMode" 
                            render={ 
                                () => <NonPingScanMode />
                            } 
                        />

                        <Route 
                            path="/lightningScanMode" 
                            render={ 
                                () => <LightningScanMode />
                            } 
                        />

                        <Route 
                            path="/top100PortsScanMode" 
                            render={ 
                                () => <Top100PortsScanMode />
                            } 
                        />
                        {/* Customised Scan Mode Routes */ }
                        
                    </Switch>
                </Suspense>
            </main>
        </BrowserRouter>
        </React.Fragment>
      ))}
    </div>
  );
}
