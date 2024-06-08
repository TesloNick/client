import {makeAutoObservable} from "mobx";

export default class CarStore { //хранилище всех машин
    constructor() {
        
        this._cars = {}
        this._selectedCar = {}
        makeAutoObservable(this)
    }
    
    setCars(cars) {
        this._cars = cars
    }

    get cars() {
        return this._cars
    }

    setSelectedCar(car) {
        this._selectedCar = car
    }

    get getSelectedCar() {
        return this._selectedCar
    }
}