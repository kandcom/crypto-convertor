import React from 'react'
//import {useState, useEffect} from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import {ConverterBlock, CtyptoTable} from './components/index'
//import {TCoin} from './types/index'
import useStyles from './styles'

function App() {
  const classes:any = useStyles();
  //const [allCoins, setAllCoins] = useState<TCoin[]>([]);
  //useEffect(() => {
      
  //}, [])
  return (
    <Container className={classes.root} maxWidth="lg">
     <Grid container spacing={3}>
        <Grid item xs={8}><CtyptoTable classes={classes} /></Grid>
        <Grid item xs={4}><ConverterBlock classes={classes}/></Grid>
      </Grid>
    </Container>
  );
}

export default App;
