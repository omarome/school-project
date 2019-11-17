import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));



export default function AboutPage() {
  const classes = useStyles();

  return (
<React.Fragment>
<div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Electronic web 
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'This website has creat to help you find your most interesed electronic devices'}
          {'That you looking for'}
        </Typography>
        <Typography variant="body1">Ammar Daham</Typography>
      </Container>

    </div>
</React.Fragment>
  );
}