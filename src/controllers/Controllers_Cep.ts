import { App } from '../services/Get_lat_lng'

import { getDistanceFromLatLonInKm } from '../Helpers/Verification_distance'

export async function GetLatLngWithCep(cep:any) {

    const { lat, lng } = await App(cep)

    const [latitude_start, latitude_end, longitude_start, longitude_end, results] = getDistanceFromLatLonInKm(Number(lat), Number(lng))

    return [latitude_start, latitude_end, longitude_start, longitude_end, results]
}

