import React from 'react';

// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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


// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

const issueService = new IssueService()

function TemporaryDrawer() {
//   const classes = useStyles();
 
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

    if(rText === "Get Issues"){
        issueService.getIssues()
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }else if(rText === "Get All Issues"){
        issueService.getAllIssues()
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }else if(rText === 'Post New Issue'){
        issueService.saveData()
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }
  }

  const list = (left) => (
    <div>
      <List>
        {[ 'Get Issues','Get All Issues','Post New Issue', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem onClick={()=>handleClick(text)} button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <WarningIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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

export default TemporaryDrawer;
