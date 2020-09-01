import {observable, computed, action} from 'mobx'
import { TCoin } from '../types'

export default class CurrenciesStore{
    @observable private items: TCoin[] = [];

    @computed
    get getItems(){
        return this.items;
    }

    @action//ничего не возращает просто что-то делает
    setItems = (items: TCoin[]):void => {
        this.items = items
    }
    // constructor(initItems: TCoin[]){
    //     this.items = initItems
    // }
}  