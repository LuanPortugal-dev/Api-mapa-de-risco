import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function VehiclesAddress(date: string, address: string) {
  const dataBusiness = await prisma.vehicles.findMany({
    where: {
      year: date,
      street: address,

    }
  })
  console.log(dataBusiness)
  return dataBusiness
}

//Business()
//  .catch((e) => {
//    throw e
//  })
//  .finally(async () => {
//    await prisma.$disconnect()
//  })