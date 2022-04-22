import { App } from '../services/Get_lat_lng'

import { getDistanceFromLatLonInKm } from './Verification_distance'

export async function GetLatLngWithCep(address: any) {

    const { lat, lng } = await App(address)

    return getDistanceFromLatLonInKm(lat, lng)
}

