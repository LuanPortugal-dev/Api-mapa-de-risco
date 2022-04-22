import { PrismaClient } from '@prisma/client'

import { getVariation, getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function BusinessLatLng(date: string, lats: any, lngs: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = getVariation(lats, lngs)

  const latLngBusiness = await prisma.business.findMany({
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

  return latLngBusiness.map( business => {
    const lat_end = business.lat
    const lng_end = business.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return business

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