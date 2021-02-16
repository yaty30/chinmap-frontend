import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ExtensionIcon from '@material-ui/icons/ExtensionOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

import DiscoveryBroadcast from './nseData/Discovery/Broadcast'
import DiscoveryDatabase from './nseData/Discovery/Database'
import DiscoveryHTTP from './nseData/Discovery/HTTP'
import DiscoveryIP from './nseData/Discovery/IP'
import DiscoveryHadoop from './nseData/Discovery/Hadoop'
import DiscoveryNetwork from './nseData/Discovery/Network'
import DiscoveryServerMessageBlock from './nseData/Discovery/ServerMessageBlock'
import DiscoveryServer from './nseData/Discovery/Server'
import DiscoverySMTP from './nseData/Discovery/SMTP'
import DiscoveryTargets from './nseData/Discovery/Targets'

import ExploitFTP from './nseData/Exploit/FTP'
import ExploitHTTP from './nseData/Exploit/HTTP'
import ExploitOthers from './nseData/Exploit/Others'
import ExploitSMB from './nseData/Exploit/SMB'

import VulnFTP from './nseData/Vulnerability/FTP'
import VulnHTTP from './nseData/Vulnerability/HTTP'
import VulnOthers from './nseData/Vulnerability/Others'
import VulnSMB from './nseData/Vulnerability/SMB'
import VulnSSL from './nseData/Vulnerability/SSL'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

const menuItem = [
    {
        cateName: "Discovery",
        handle: "handleDiscovery",
        subItem: [
            "Broadcast", "Database", "Hadoop", "HTTP", "IP", 
            "Network", "Server Message Block", "Server", "SMTP", "Others", 
        ],        
    },
    {
        cateName: "Exploit",
        handle: "handleExploit",
        subItem: [
            "FTP", "HTTP", "SMB", "Others", 
        ],        
    },
    {
        cateName: "Vulnerability",
        handle: "handleVulnerability",
        subItem: [
            "FTP", "HTTP", "SMB", "SSL", "Others",
        ],        
    },
]

export default function NestedList() {
  const classes = useStyles();
  const [Discovery, setDiscovery] = React.useState(false);

  const handleDiscovery = () => {
    setDiscovery(!Discovery);

    if( Exploit == true ){
        setExploit(false)
    }
    if( Vulnerability == true ){
        setVulnerability(false)
    }
  };

  const [Exploit, setExploit] = React.useState(false);

  const handleExploit = () => {
    setExploit(!Exploit);
    
    if( Discovery == true ){
        setDiscovery(false)
    }
    if( Vulnerability == true ){
        setVulnerability(false)
    }
  };

  const [Vulnerability, setVulnerability] = React.useState(false);

  const handleVulnerability = () => {
    setVulnerability(!Vulnerability);
     
    if( Discovery == true ){
        setDiscovery(false)
    }
    if( Exploit == true ){
        setExploit(false)
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {menuItem.map((obj) => (
         obj.cateName == "Discovery" ?
            <>
                <ListItem button onClick={handleDiscovery}>
                    <ListItemIcon>
                        <AccountTreeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={obj.cateName} />
                    {Discovery ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={Discovery} timeout="auto" unmountOnExit>
                    {obj.subItem.map((subObj) => (
                        <List component="div" disablePadding>
                            {
                                subObj == "Broadcast" ? <DiscoveryBroadcast /> : 
                                    subObj == "Database" ? <DiscoveryDatabase /> : 
                                        subObj == "Hadoop" ? <DiscoveryHadoop /> : 
                                            subObj == "HTTP" ? <DiscoveryHTTP /> : 
                                                subObj == "IP" ? <DiscoveryIP /> : 
                                                subObj == "Network" ? <DiscoveryNetwork /> : 
                                            subObj == "Server Message Block" ? <DiscoveryServerMessageBlock /> : 
                                        subObj == "Server" ? <DiscoveryServer /> : 
                                    subObj == "SMTP" ? <DiscoverySMTP /> : 
                                subObj == "Targets" ? <DiscoveryTargets /> : null
                            }
                        </List>
                    ))}
                    
                </Collapse>
            </>
            :
        obj.cateName == "Exploit" ?
            <>
                <ListItem button onClick={handleExploit}>
                    <ListItemIcon>
                        <AccountTreeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={obj.cateName} />
                    {Exploit ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={Exploit} timeout="auto" unmountOnExit>
                    {obj.subItem.map((subObj) => (
                        <List component="div" disablePadding>
                            {
                                subObj == "FTP" ? <ExploitFTP /> : 
                                    subObj == "HTTP" ? <ExploitHTTP /> :
                                        subObj == "Others" ? <ExploitOthers /> :
                                            subObj == "SMB" ? <ExploitSMB /> : null
                            }
                        </List>
                    ))}
                    
                </Collapse>
            </>
            :
        obj.cateName == "Vulnerability" ?
            <>
                <ListItem button onClick={handleVulnerability}>
                    <ListItemIcon>
                        <AccountTreeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={obj.cateName} />
                    {Vulnerability ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={Vulnerability} timeout="auto" unmountOnExit>
                    {obj.subItem.map((subObj) => (
                        <List component="div" disablePadding>
                            {
                                subObj == "FTP" ? <VulnFTP /> : 
                                    subObj == "HTTP" ? <VulnHTTP /> :
                                        subObj == "Others" ? <VulnOthers /> :
                                    subObj == "SMB" ? <VulnSMB /> :
                                subObj == "SSL" ? <VulnSSL /> : null
                            }
                        </List>
                    ))}
                    
                </Collapse>
            </>
            :
            null
      ))}
      
    </List>
  );
}
