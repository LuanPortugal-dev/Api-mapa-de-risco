import { App } from '../services/Get_lat_lng'

import { getDistanceFromLatLonInKm } from '../Helpers/Verification_distance'

export async function GetLatLngWithCep(address:any) {

    const { lat, lng } = await App(address)

    const [latitude_start, latitude_end, longitude_start, longitude_end] = getDistanceFromLatLonInKm(Number(lat), Number(lng))

    return [latitude_start, latitude_end, longitude_start, longitude_end]
}

