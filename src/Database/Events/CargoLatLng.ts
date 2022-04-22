import { PrismaClient } from '@prisma/client'

import { getVariation, getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function CargoLatLng(date: string, lats: Number, lngs: Number) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = getVariation(lats, lngs)

  const latLngCargo = await prisma.events.findMany({
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
  return latLngCargo.map(cargo => {
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