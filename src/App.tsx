import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop: 20
    },
    currencyInput: {
      minWidth: "calc(70%-30px)",
      marginRight: 30
    },
    currencyName: {
      minWidth: "20%"
    },
    table: {
      minWidth: 650,
    },
    currencyImgIcon:{
      width: 24,
      height: 24,
      borderRadius: "50%"
    }
  }),
);

type TCoin = {
  name: string,
  fullName: string,
  imageUrl: string,
  price: number,
  volume24Hour: number
}

function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = useState<TCoin[]>([]);
  return (
    <Container className={classes.root} maxWidth="lg">
     <Grid container spacing={3}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">price</TableCell>
                  <TableCell align="left">volume24Hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {allCoins.map( (coin) => (
                <TableRow key={coin.name}>
                  <TableCell align="left"><img src={coin.imageUrl} alt={"coin icon"} className={classes.currencyImgIcon}/></TableCell>
                  <TableCell component="th" scope="row">{coin.name}</TableCell>
                  <TableCell align="left">{coin.fullName}</TableCell>
                  <TableCell align="left">{coin.price}</TableCell>
                  <TableCell align="left">{coin.volume24Hour}</TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <div className={classes.cryptoInputBox}>
              <FormControl fullWidth>
                <TextField className={classes.currencyInput} label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyName}>
                <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
                <Select value={20}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
              <FormControl fullWidth>
                <TextField className={classes.currencyInput} label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyName}>
                <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
                <Select value={20}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant={"h5"} component="h5">77,39 юаней</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
