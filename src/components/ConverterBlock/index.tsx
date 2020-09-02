import React from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"

import CurrenciesStore from '../../stores/CurrenciesStore'

import {observer, inject} from 'mobx-react'

type IConverterBlock = {
  classes: any;
  currenciesStore?: CurrenciesStore;
}

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')
(observer( ({classes, currenciesStore}) => {
  const coins: string[] = currenciesStore!.getItems.map( coin => coin.name);
  return (
      <Paper>
        <div className={classes.cryptoInputBox}>
          <FormControl fullWidth>
            <TextField className={classes.currencyInput} label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyName}>
            <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
            <Select >
              {
                coins.map( name => <MenuItem value={name}>{name}</MenuItem>)
              }
            </Select>
          </FormControl>
        </div>
        <div className={classes.cryptoInputBox}>
          <FormControl fullWidth>
            <TextField className={classes.currencyInput} label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyName}>
            <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
            <Select>
              {
                coins.map( name => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
      </Paper>
  )
})
)
export default ConverterBlock
