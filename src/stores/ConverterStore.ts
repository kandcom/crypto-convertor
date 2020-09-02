import {observable, computed} from 'mobx'
import { TCoin } from '../types'

export default class ConverterStore{
    @observable public items: TCoin[];
    constructor(initItems: TCoin[]){
        this.items = initItems
    }
    @computed
    get getItems(){
        return this.items
    }
}  