"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoAddress = void 0;
const client_1 = require("@prisma/client");
const Controllers_Address_1 = require("../../controllers/Controllers_Address");
const prisma = new client_1.PrismaClient();
async function CargoAddress(address) {
    const [latitude_start, latitude_end, longitude_start, longitude_end] = await (0, Controllers_Address_1.GetLatLngWithCep)(address);
    const addressCargo = await prisma.events.findMany({
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
    });
    console.log(addressCargo);
    return addressCargo;
}
exports.CargoAddress = CargoAddress;
//# sourceMappingURL=CargoAddress.js.map