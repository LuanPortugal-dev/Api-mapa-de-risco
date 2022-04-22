import { App } from '../services/Get_lat_lng'

import { getVariation } from './Verification_distance'

export async function GetLatLngWithCep(address: any) {

    const { lat, lng } = await App(address)

    return [...getVariation(lat, lng), lat, lng]
}

