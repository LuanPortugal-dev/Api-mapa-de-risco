import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function VehiclesCep(date: string, cep: string ) {
  const dataBusiness = await prisma.vehicles.findMany({
    where: {
      year: date,
      zip_code_prefix: cep,
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