import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient({ datasources: { db: { url: process.env.DB_CONNECTION_2 } } })

export async function IncidentsLatLng(lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = (getDistanceFromLatLonInKm(lats, lngs))
  
  const dataIncidents = await prisma.incidents.findMany({
    where: {
      latitude: {
        lte: parseFloat(latitude_start),
        gte: parseFloat(longitude_start)
      },
      longitude: {
        lte: parseFloat(latitude_end),
        gte: parseFloat(longitude_end)
      } 
    } 
  })
return dataIncidents
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