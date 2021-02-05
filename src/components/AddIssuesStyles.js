import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        
      },
       button: {
        margin: theme.spacing(1),
      },
      textField: {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
  }));

export default useStyles;
