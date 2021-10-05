import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: (padding) => {
      return Number(padding) ? padding : 30;
    }
  }
}));

const PaperPadding = ({ children, padding, ...rest }) => {
  const classes = useStyles(padding);

  return (
    <Paper className={classes.root} {...rest}>
      {children}
    </Paper>
  );
};

export default PaperPadding;
