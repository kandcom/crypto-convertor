import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
export default useStyles