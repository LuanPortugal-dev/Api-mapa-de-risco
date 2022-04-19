import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../controllers/Controllers_Cep'

const prisma = new PrismaClient()

export async function BusinessCep(date: any, cep: any) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(cep)

  const cepBusiness = await prisma.business.findMany({
    take:100,
    where: {
      year: date,
      lat: {
        lte: Number(latitude_start),
        gte: Number(longitude_start)
      },
      lng: {
        lte: Number(latitude_end),
        gte: Number(longitude_end)
      }
    }
  })
  return cepBusiness
}

BusinessCep('2021', '26286140')

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })