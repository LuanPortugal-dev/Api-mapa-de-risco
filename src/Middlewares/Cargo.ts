import { CargoAddress } from '../Database/Events/CargoAddress'
import { CargoCep } from '../Database/Events/CargoCep'
import { CargoLatLng } from '../Database/Events/CargoLatLng'

export async function ResultCargo(date: any, data: any) {

    const isAddress = data.split(' ').length > 2

    if (isAddress) {
        const resultAddress = await CargoAddress(date, data)
        return resultAddress
    }

    const [lat, lng] = data.split(',')

    if (lat && lng) {
        const resultLatLng = await CargoLatLng(date, lat, lng)
        return resultLatLng
    }

    const resultCep = await CargoCep(date, data)
    return resultCep
}