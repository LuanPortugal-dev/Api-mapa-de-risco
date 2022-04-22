import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Cep'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function VehiclesCep(date: string, cep: string ) {

  const [
    latitude_start, latitude_end, longitude_start, longitude_end,
    lats, lngs
  ] = await GetLatLngWithCep(cep)

  const cepVehicles = await prisma.vehicles.findMany({
    take: 100,
    where: {
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
  return cepVehicles.map(vehicles => {
    const lat_end = vehicles.lat
    const lng_end = vehicles.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return vehicles

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