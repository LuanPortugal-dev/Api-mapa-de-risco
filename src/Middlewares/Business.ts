import { BusinessAddress } from '../Database/Business/BusinessAddress'
import { BusinessCep } from '../Database/Business/BusinessCep'
import { BusinessLatLng } from '../Database/Business/BusinessLatLng'

export async function ResultBusiness(date: any, data: any) {

    const isAddress = data.split(' ').length > 2

    if (isAddress) {
        const resultAddress = await BusinessAddress(date, data)
        return resultAddress
    }

    const [lat, lng] = data.split(',')

    if (lat && lng) {
        const resultLatLng = await BusinessLatLng(date, lat, lng)
        return resultLatLng
    }

    const resultCep = await BusinessCep(date, data)
    return resultCep
}