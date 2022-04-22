import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Cep'

const prisma = new PrismaClient()

export async function CargoCep(date: string, cep: string ) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(cep)
  
  const cepCargp = await prisma.events.findMany({
    take:100,
    where: {
      has_error: 0,
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
  return cepCargp
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })