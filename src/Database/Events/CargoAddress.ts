import { PrismaClient } from '@prisma/client'

import { GetLatLngWithCep } from '../../Helpers/Get_LatLng_Address'

import { getDistanceFromLatLonInKm } from '../../Helpers/Verification_distance'

const prisma = new PrismaClient()

export async function CargoAddress(date: string, address: string) {

  const [
    latitude_start, latitude_end, longitude_start, longitude_end,
    lats, lngs
  ] = await GetLatLngWithCep(address)

  const addressCargo = await prisma.events.findMany({
    take: 100,
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
  return addressCargo.map(cargo => {
    const lat_end = cargo.lat
    const lng_end = cargo.lng

    const distance = getDistanceFromLatLonInKm(lats, lngs, lat_end, lng_end)


    if (distance < 5.00)
      return cargo

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