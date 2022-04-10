import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function CargoLatLng(lats: Number, lngs: Number) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = (getDistanceFromLatLonInKm(lats, lngs))

  const dataBusiness = await prisma.events.findMany({
    where: {
      has_error: 0,
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
  console.log(dataBusiness)
  return dataBusiness
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })