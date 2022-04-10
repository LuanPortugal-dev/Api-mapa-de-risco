import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function BusinessCep(date: string, cep: string ) {
  const dataBusiness = await prisma.business.findMany({
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