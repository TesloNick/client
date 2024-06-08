import {$authHost, $host} from "./index";

export const getAllCars = async () => {
    const {data} = await $host.get('api/car')
    return data
}

export const getAllUserCar = async (userId) => {
    const {data} = await $host.get('api/car/' + userId)  
    return data
}