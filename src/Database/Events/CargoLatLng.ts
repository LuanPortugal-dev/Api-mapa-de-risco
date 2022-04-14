import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function CargoLatLng(lats: Number, lngs: Number) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = (getDistanceFromLatLonInKm(lats, lngs))

  const latLngCargo = await prisma.events.findMany({
    where: {
      has_error: 0,
      lat: {
        lte: String(latitude_start),
        gte: String(longitude_start)
      },
      lng: {
        lte: String(latitude_end),
        gte: String(longitude_end)
      }
    }
  })
  console.log(latLngCargo)
  return latLngCargo
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })