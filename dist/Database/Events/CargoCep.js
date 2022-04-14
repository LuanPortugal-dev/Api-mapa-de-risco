"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoCep = void 0;
const client_1 = require("@prisma/client");
const Controllers_Cep_1 = require("../../controllers/Controllers_Cep");
const prisma = new client_1.PrismaClient();
async function CargoCep(cep) {
    const [latitude_start, latitude_end, longitude_start, longitude_end] = await (0, Controllers_Cep_1.GetLatLngWithCep)(cep);
    const cepCargp = await prisma.events.findMany({
        where: {
            has_error: 0,
            lat: {
                lte: String(latitude_start),
                gte: String(longitude_start)
            },
            lng: {
                lte: String(latitude_end),
                gte: String(longitude_end)
            }
        }
    });
    console.log(cepCargp);
    return cepCargp;
}
exports.CargoCep = CargoCep;
//# sourceMappingURL=CargoCep.js.map