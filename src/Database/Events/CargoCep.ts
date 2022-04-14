import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../controllers/Controllers_Cep'

const prisma = new PrismaClient()

export async function CargoCep(cep: string ) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(cep)

  const cepCargp = await prisma.events.findMany({
    where: {
      has_error: 0,
      lat: {
        lte: String(latitude_start),
        gte: String(longitude_start)
      },
      lng: {
        lte: String(latitude_end),
        gte: String(longitude_end)
      } 
    } 
  })
  console.log(cepCargp)
  return cepCargp
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })