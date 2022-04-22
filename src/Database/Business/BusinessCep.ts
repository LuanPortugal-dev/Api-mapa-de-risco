import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Cep'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function BusinessCep(date: any, cep: any) {

  const [
    latitude_start, latitude_end, longitude_start, longitude_end,
    lats, lngs
  ] = await GetLatLngWithCep(cep)

  const cepBusiness = await prisma.business.findMany({
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
  return cepBusiness.map( business => {
    const lat_end = business.lat
    const lng_end = business.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)

    if (distance < 1.00)
      return business

    return 
  })
}

BusinessCep('2021', '26286140')

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })