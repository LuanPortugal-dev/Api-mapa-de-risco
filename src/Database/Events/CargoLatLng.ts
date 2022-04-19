import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function CargoLatLng(lats: Number, lngs: Number) {

  const [latitude_start, latitude_end, longitude_start, longitude_end, results] = (getDistanceFromLatLonInKm(lats, lngs))

  const latLngCargo = await prisma.events.findMany({
    take:100,
    where: {
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
  console.log(results)
  return latLngCargo
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })