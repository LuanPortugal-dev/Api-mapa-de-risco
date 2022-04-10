import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function BusinessAddress(date: string, address: string) {
  const dataBusiness = await prisma.business.findMany({
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