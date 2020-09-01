import ConverterStore from './ConverterStore'
import CurrenciesStore from './CurrenciesStore'

export default {
    currenciesStore: new CurrenciesStore(),
    converterStore: new ConverterStore([])
}