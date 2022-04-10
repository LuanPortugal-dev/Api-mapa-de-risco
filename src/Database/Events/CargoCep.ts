import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function CargoCep(cep: string ) {
  const dataBusiness = await prisma.events.findMany({
    take: 1,
    where: {
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