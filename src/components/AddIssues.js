import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './AddIssuesStyles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

function AddIssue(){

    const classes = useStyles();


    const addNewIssue = ()=>{
        console.log("issue added");
    }


    return(
            <React.Fragment>
                <form>
                <TextField label="id" className={classes.root} noValidate autoComplete="off" id="outlined-basic"  variant="outlined" />   
                <TextField label="name" className={classes.root} noValidate autoComplete="off" id="outlined-basic1"  variant="outlined" /> <br/> <br/>   
                <TextField label="description" className={classes.root} noValidate autoComplete="off" id="outlined-basic2"  variant="outlined" />   
                <TextField label="Created By" className={classes.root} noValidate autoComplete="off" id="outlined-basic3"  variant="outlined" /> <br/><br/>
                <TextField label="Modified By" className={classes.root} noValidate autoComplete="off" id="outlined-basic4"  variant="outlined" />
                <TextField label="Company Id" className={classes.root} noValidate autoComplete="off" id="outlined-basic5"  variant="outlined" /> <br/> <br/> 
        
                <TextField
                id="datetime-local"
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

export default AddIssue;
