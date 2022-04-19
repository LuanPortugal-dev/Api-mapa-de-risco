import { CargoAddress } from '../Database/Events/CargoAddress'
import { CargoCep } from '../Database/Events/CargoCep'
import { CargoLatLng } from '../Database/Events/CargoLatLng'

export async function ResultCargo(data: any) {

    const isAddress = data.split(' ').length > 2

    if (isAddress) {
        const resultAddress = await CargoAddress(data)
        return resultAddress
    }

    const [lat, lng] = data.split(',')

    console.log(lat, lng)

    if (lat && lng) {
        const resultLatLng = await CargoLatLng(lat, lng)
        return resultLatLng
    }

    const resultCep = await CargoCep(data)
    return resultCep
}