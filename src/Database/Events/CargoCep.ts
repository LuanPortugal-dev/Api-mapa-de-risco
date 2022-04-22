import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Cep'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function CargoCep(date: string, cep: string) {

  const [
    latitude_start, latitude_end, longitude_start, longitude_end,
    lats, lngs
  ] = await GetLatLngWithCep(cep)

  const cepCargo = await prisma.events.findMany({
    where: {
      has_error: 0,
      year: date,
      lat: {
        lte: latitude_start,
        gte: longitude_start
      },
      lng: {
        lte: latitude_end,
        gte: longitude_end
      }
    }
  })
  return cepCargo.map(cargo => {
    const lat_end = cargo.lat
    const lng_end = cargo.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return cargo

    return
  })
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })