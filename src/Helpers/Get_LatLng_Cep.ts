import { App } from '../services/Get_lat_lng'

import { getVariation } from './Verification_distance'

export async function GetLatLngWithCep(cep:any) {

    const { lat, lng } = await App(cep)

    return [...getVariation(lat, lng), lat, lng]
}

