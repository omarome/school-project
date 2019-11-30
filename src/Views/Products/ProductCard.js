import React,{useState} from 'react';
import {fade ,makeStyles } from '@material-ui/core/styles';
import {CardActionArea, InputBase, Paper,CardActions, CardContent, CardMedia, Button, Typography, Card, Grid } from '@material-ui/core';
import data from "../../data/data";
import SearchIcon from '@material-ui/icons/Search';

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
        height: 160,
    },
    grid:{
        spacing: theme.spacing(2)
    },
    searchRoot:{
        width:'50%',
        margin:'auto',
        textAlign:'center',
        marginTop:'5%',
        marginBottom:'3%',
      },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
        },
}));


export default function ProductCard() {

    const [data, setData] = useState(testData);
    const classes = useStyles();

    const handleSearching =(e) =>{

        //variable to hold the original version of of the data
        let currentData = [];

        //variable to hold the filtered data before putting into state
        let newData = [];

        if(e.target.value !==""){
            //assign the original data to current data
            currentData = testData.map(items => items);

            newData = currentData.filter(item=>{
                const lc = item.product_name.toLowerCase();

                const filter = e.target.value.toLowerCase();

                return lc.includes(filter);
            });
        }
        else{
            newData = [...testData]
        }
        
        setData(newData);

  }

  return (

    <>
        <Grid container  className={classes.searchRoot}>
          <Grid item xs={12}>
           <Paper>
           <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={(e)=>handleSearching(e)}
                />
              </div>
           </Paper>
              </Grid>
        </Grid>
    
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container justify="center" className={classes.grid }>
                    {data.map(product=>(
                        
                            <Card key={product.Id} className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={require('../../media/item.png')}
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

    </>
  );
}