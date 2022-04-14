"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCep = void 0;
const client_1 = require("@prisma/client");
const Controllers_Cep_1 = require("../../controllers/Controllers_Cep");
const prisma = new client_1.PrismaClient();
async function BusinessCep(date, cep) {
    const [latitude_start, latitude_end, longitude_start, longitude_end] = await (0, Controllers_Cep_1.GetLatLngWithCep)(cep);
    const cepBusiness = await prisma.business.findMany({
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
    });
    return cepBusiness;
}
exports.BusinessCep = BusinessCep;
BusinessCep('2021', '26286140');
//# sourceMappingURL=BusinessCep.js.map