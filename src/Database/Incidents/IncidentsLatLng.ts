import { PrismaClient } from '@prisma/client'

import { getVariation } from '../../Helpers/Verification_distance'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient({ datasources: { db: { url: process.env.DB_CONNECTION_2 } } })

export async function IncidentsLatLng(lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = getVariation(lats, lngs)

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
  return latLngIncidents.map(incidents => {
    const lat_end = incidents.latitude
    const lng_end = incidents.longitude

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return incidents

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