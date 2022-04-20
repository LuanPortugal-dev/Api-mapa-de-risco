import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Address'

const prisma = new PrismaClient()

export async function CargoAddress(address: string) {

  const [latitude_start, latitude_end, longitude_start, longitude_end] = await GetLatLngWithCep(address)

  const addressCargo = await prisma.events.findMany({
    take:100,
    where: {
      has_error: 0,
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
  console.log(addressCargo)
  return addressCargo
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })