import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function VehiclesLatLng(date: string, lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = getDistanceFromLatLonInKm(lats, lngs)

  const latLngVehicles = await prisma.vehicles.findMany({
    take: 100,
    where: {
      year: date,
      lat: {
        lte: parseFloat(latitude_start),
        gte: parseFloat(longitude_start)
      },
      lng: {
        lte: parseFloat(latitude_end),
        gte: parseFloat(longitude_end)
      }
    }
  })
  return latLngVehicles
}


//const a = -11.77460203
//const b = -49.10744996

//IncidentsLatLng(a, b)
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })