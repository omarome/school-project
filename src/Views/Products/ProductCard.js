import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Card, Grid } from '@material-ui/core';
import data from "../../data/data";

const testData = data.slice(0,17);

const useStyles = makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:theme.spacing(2),
    },  
    card: {
        maxWidth: 345,
        padding:theme.spacing(1),
        margin: theme.spacing(2),
    },
    media: {
        height: 140,
    },
    grid:{
        spacing: theme.spacing(2)
    }
}));


export default function ProductCard() {
  const classes = useStyles();

  return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container justify="center" className={classes.grid }>
                    {testData.map(product=>(
                        
                            <Card key={product.Id} className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={require('../../media/macbookair.png')}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.product_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica {<span><br/><br/><b>{product.price}</b></span>}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                    <Button size="small" color="primary">
                                    Buy
                                    </Button>
                                </CardActions>
                            </Card>
                        
                   ))}
                </Grid>         
            </Grid>
    </Grid>
  );
}