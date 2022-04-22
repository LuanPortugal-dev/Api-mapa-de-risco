import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient({ datasources: { db: { url: process.env.DB_CONNECTION_2 } } })

export async function IncidentsLatLng(lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = getDistanceFromLatLonInKm(lats, lngs)

  const latLngIncidents = await prisma.incidents.findMany({
    where: {
      latitude: {
        lte: latitude_start,
        gte: longitude_start
      },
      longitude: {
        lte: latitude_end,
        gte: longitude_end
      }
    }
  })
  return latLngIncidents
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