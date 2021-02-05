import React from 'react';
import {withRouter} from 'react-router-dom';
// import clsx from 'clsx';
import useStyles from './SideNavStyles';
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IssueService from '../services/IssueService';
// import axios from 'axios';



const issueService = new IssueService()

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function TemporaryDrawer(props) {
  const classes = useStyles();
 
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, "left": open });
  };

  

  const handleClick= (rText)=>{

    if(rText === "Home"){
      props.history.push('/');
    }else if(rText === "Dashboard"){
        props.history.push('/dashboard');
    }else if(rText === 'Issues'){
      issueService.getAllIssues()
      .then(response=>{
          console.log(response.data);
          localStorage.setItem('issues',JSON.stringify(response.data));
          props.history.push('/show-issues');
      })
      .catch(error=>{
          console.log(error);
      })
    }
  }

  const handleLogs = (logInfo) =>{
    if(logInfo == "Log In"){
        props.history.push('/login');
    }else{
      localStorage.removeItem('token');
      props.history.push('/login');
    }
  }

  const list = (left) => (
    <div>
      <List>
        {[ 'Home','Dashboard','Issues'].map((text, index) => (
          <ListItem onClick={()=>handleClick(text)} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Log In', 'Log Out'].map((text, index) => (
          <ListItem button onClick={()=>handleLogs(text)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer("left", true)}>Left side nav</Button>
          <Drawer open={state["left"]}  onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default withRouter(TemporaryDrawer);

