import React from 'react';
import ContactCard from './card';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));


export default function ContactPage(){
    const classes = useStyles();
  
return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
                
                            <ContactCard name="Ammar Daham" />
                            <ContactCard name="Omar " />
                            </Grid>
        </Grid>
    );
    
}