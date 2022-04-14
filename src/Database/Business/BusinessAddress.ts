import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../controllers/Controllers_Address'

const prisma = new PrismaClient()

export async function BusinessAddress(date: string, address: string) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(address)

  const addressBusiness = await prisma.business.findMany({
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
  console.log(addressBusiness)
  return addressBusiness
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })