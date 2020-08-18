import React from 'react';
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
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
     <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=12</Paper>
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
