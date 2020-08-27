import React from 'react'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {TCoin} from '../../types/index'

interface ICryptoTable {
  items: TCoin[];
  classes: any;
}

const CryptoTable:React.FC<ICryptoTable> = ({items, classes}) => {
    return (
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
              {!items.length ? 'Загрузка' : items.map( (coin) => (
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
    )
}
export default CryptoTable