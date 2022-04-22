import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Address'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function BusinessAddress(date: string, address: string) {

  const [
    latitude_start, latitude_end, longitude_start, longitude_end,
    lats, lngs
  ] = await GetLatLngWithCep(address)

  const addressBusiness = await prisma.business.findMany({
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
  return addressBusiness.map(business => {
    const lat_end = business.lat
    const lng_end = business.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return business

    return
  })
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })