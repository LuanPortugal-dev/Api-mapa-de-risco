import { PrismaClient } from '@prisma/client'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function BusinessLatLng(date: string, lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end, results] = getDistanceFromLatLonInKm(lats, lngs)

  const latLngBusiness = await prisma.business.findMany({
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

console.log(results);
return latLngBusiness
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