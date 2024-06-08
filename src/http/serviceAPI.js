import {$authHost, $host} from "./index";

export const getAllServices = async () => {
    const {data} = await $host.get('api/service')
    return data
}
//НА БЭКЕ НИЧЕГО НЕТ ПО ТАКОЙ ССЫЛКУ ПОЭТОМУ НИЧЕГО НЕ ВОЗВРАЩАЕТ

export const getServicesByClass = async (carClass) => {
    const {data} = await $host.get('api/service/' + carClass)
    return data
}