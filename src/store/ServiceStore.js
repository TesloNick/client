import {makeAutoObservable} from "mobx";

export default class ServiceStore { 
    constructor() {
        this._services = {}
        this._selectedService = {}
        makeAutoObservable(this)
    }
    
    setServices(services) {
        this._services = services
    }

    get services() {
        return this._services
    }
    
    setSelectedService(ser) {
        this._selectedService = ser
    }

    get getSelectedService() {
        return this._selectedService
    }
}