import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function CargoAddress(address: string) {
  const dataBusiness = await prisma.events.findMany({
    take: 1,
    where: {
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