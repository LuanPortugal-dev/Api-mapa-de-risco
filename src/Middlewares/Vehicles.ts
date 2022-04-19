import { VehiclesAddress } from '../Database/Vehicles/VehiclesAddress'
import { VehiclesCep } from '../Database/Vehicles/VehiclesCep'
import { VehiclesLatLng } from '../Database/Vehicles/VehiclesLatLng'

export async function ResultVehicles(date: any, data: any) {

    const isAddress = data.split(' ').length > 2

    if (isAddress) {
        const resultAddress = await VehiclesAddress(date, data)
        return resultAddress
    }

    const [lat, lng] = data.split(',')

    console.log(lat, lng)

    if (lat && lng) {
        const resultLatLng = await VehiclesLatLng(date, lat, lng)
        return resultLatLng
    }

    const resultCep = await VehiclesCep(date, data)
    return resultCep
}