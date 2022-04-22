import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Cep'

const prisma = new PrismaClient()

export async function VehiclesCep(date: string, cep: string ) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(cep)

  const cepVehicles = await prisma.vehicles.findMany({
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
  return cepVehicles
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })