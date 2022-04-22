import { PrismaClient } from '@prisma/client'

import { getVariation, getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function VehiclesLatLng(date: string, lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = getVariation(lats, lngs)

  const latLngVehicles = await prisma.vehicles.findMany({
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
  return latLngVehicles.map(vehicles => {
    const lat_end = vehicles.lat
    const lng_end = vehicles.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return vehicles

    return
  })
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