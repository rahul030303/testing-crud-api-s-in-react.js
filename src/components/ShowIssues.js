import React from 'react';
import {issues} from '../utils';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    issueDisplay:{
        display:"inline"
    },
    title: {
      margin: theme.spacing(4, 0, 2),
      fontFamily:'times new roman'
    },
  }));

function ShowIssues(props){

        const classes = useStyles();
        const [dense, setDense] = React.useState(false);
        const [secondary, setSecondary] = React.useState(false);

        const editIssue = (id)=>{
            props.history.push('/issue-details/'+ id);
        }

        const allIssues = issues.map(issue=>(
            <div  key={issue.id}>
            <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ReportProblemIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={issue.name}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon onClick={()=>editIssue(issue.id)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </div>))

          

        return(
            <React.Fragment>
            <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.title}>
              List Of Issues
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {allIssues}
              </List>
            </div>
          </Grid>
            </React.Fragment>
            )
    }


export default withRouter(ShowIssues);


