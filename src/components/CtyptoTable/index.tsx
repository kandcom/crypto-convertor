import React from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CurrenciesStore from '../../stores/CurrenciesStore'

import {TCoin} from '../../types/index'

import {observer, inject} from 'mobx-react'
interface ICryptoTable {
  classes: any;
  currenciesStore?: CurrenciesStore;
}

const colors:{[key: string]: string} = {
    green: '#c6ff00',
    red: '#f44336'
}

const CryptoTable = 
inject('currenciesStore')
(observer ( ({ classes, currenciesStore}: ICryptoTable)=>{
    const items: TCoin[] = currenciesStore?.getItems || [];
    console.log(JSON.stringify(items, null, 2))
    React.useEffect(()=> {
        if(currenciesStore)
            currenciesStore.fetchCoins();
    }, [])
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
                    <TableCell style={{backgroundColor: colors.green}} align="left">{coin.price}</TableCell>
                    <TableCell align="left">{coin.volume24Hour}</TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
})
// const CryptoTable = () => 
//     inject('currenciesStore')(
//         observer( (props:any) => {
//             const items: TCoin[] = []
//             const classes = {
//                 table: '',
//                 currencyIcon: ''
//             };
//             console.log(props)
//             // axios
//             //   .get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD#`)
//             //   .then( ({data}) => {
//             //     const coins:TCoin[] = data.Data.map( (coin: any) => {
//             //       const obj:TCoin = {
//             //         name: coin.CoinInfo.Name,
//             //         fullName: coin.CoinInfo.FullName,
//             //         imageUrl: 'https://www.cryptocompare.com/'+coin.CoinInfo.ImageUrl,
//             //         price: coin.RAW.USD.PRICE.toFixed(3),
//             //         volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
//             //       };
//             //       return obj;
//             //     });
//             //     console.log(coins)
//             //   })
        
//             return (
//               <TableContainer component={Paper}>
//                   <Table className={classes.table} size="small" aria-label="a dense table">
//                       <TableHead>
//                       <TableRow>
//                           <TableCell></TableCell>
//                           <TableCell align="left">Name</TableCell>
//                           <TableCell align="left">FullName</TableCell>
//                           <TableCell align="left">price</TableCell>
//                           <TableCell align="left">volume24Hour</TableCell>
//                       </TableRow>
//                       </TableHead>
//                       <TableBody>
//                       {!items.length ? 'Загрузка' : items.map( (coin) => (
//                       <TableRow key={coin.name}>
//                           <TableCell align="left"><img src={coin.imageUrl} alt={"coin icon"} className={classes.currencyImgIcon}/></TableCell>
//                           <TableCell component="th" scope="row">{coin.name}</TableCell>
//                           <TableCell align="left">{coin.fullName}</TableCell>
//                           <TableCell align="left">{coin.price}</TableCell>
//                           <TableCell align="left">{coin.volume24Hour}</TableCell>
//                       </TableRow>
//                       ))}
//                       </TableBody>
//                   </Table>
//               </TableContainer>
//             )
//         }
//     )
    )

export default CryptoTable