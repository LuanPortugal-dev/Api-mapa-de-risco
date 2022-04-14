import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../controllers/Controllers_Cep'

const prisma = new PrismaClient()

export async function VehiclesCep(date: string, cep: string ) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(cep)

  const cepVehicles = await prisma.vehicles.findMany({
    take: 100,
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
  return cepVehicles
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })