import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './IssueDetailsStyles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {issues} from '../utils';

function IssueDetail(props){

    const classes = useStyles();


    // const addNewIssue = ()=>{
    //     console.log("issue added");
    // }

    const issueInfo = issues.filter(issue=>(issue.id == props.match.params.id)) ;
    console.log(issueInfo);

    return(
      
      <React.Fragment>
            {/*<h1>{props.match.params.id}</h1>*/}
                <form>
                <TextField label="id" value= {issueInfo[0].id}  className={classes.root} noValidate autoComplete="off" id="outlined-basic"   variant="outlined" />   
                <TextField label="name" value= {issueInfo[0].name} className={classes.root} noValidate autoComplete="off" id="outlined-basic1"  variant="outlined" /> <br/> <br/>   
                <TextField label="description" value= {issueInfo[0].description} className={classes.root} noValidate autoComplete="off" id="outlined-basic2"  variant="outlined" />   
                <TextField label="Created By" value= {issueInfo[0].createdBy} className={classes.root} noValidate autoComplete="off" id="outlined-basic3"  variant="outlined" /> <br/><br/>
                <TextField label="Modified By" value= {issueInfo[0].modifiedBy} className={classes.root} noValidate autoComplete="off" id="outlined-basic4"  variant="outlined" />
                <TextField label="Company Id" value= {issueInfo[0].companyId} className={classes.root} noValidate autoComplete="off" id="outlined-basic5"  variant="outlined" /> <br/> <br/> 
        
                <TextField
                id="datetime-local"
                value= {issueInfo[0].targetDate}
                label="Target Date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                autoComplete="off"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              
              <TextField
              id="datetime-local"
              value= {issueInfo[0].resolvedDate}
              label="Resolved Date"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              autoComplete="off"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            /><br/>  <br/>
                <TextField
                id="datetime-local"
                value= {issueInfo[0].createdOn}
                label="Created On"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                autoComplete="off"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              /> 
                <TextField
                id="datetime-local"
                value= {issueInfo[0].modifiedOn}
                label="Modified On"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                autoComplete="off"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              /> <br/>  <br/>
               <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
      Delete
      </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
          
                </form>
            </React.Fragment>
        )
    }

export default IssueDetail;
