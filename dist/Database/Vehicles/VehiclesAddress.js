"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesAddress = void 0;
const client_1 = require("@prisma/client");
const Controllers_Address_1 = require("../../controllers/Controllers_Address");
const prisma = new client_1.PrismaClient();
async function VehiclesAddress(date, address) {
    const [latitude_start, latitude_end, longitude_start, longitude_end] = await (0, Controllers_Address_1.GetLatLngWithCep)(address);
    const addressVehicles = await prisma.vehicles.findMany({
        take: 100,
        where: {
            year: date,
            lat: {
                lte: parseFloat(latitude_start),
                gte: parseFloat(longitude_start)
            },
            lng: {
                lte: parseFloat(latitude_end),
                gte: parseFloat(longitude_end)
            }
        }
    });
    return addressVehicles;
}
exports.VehiclesAddress = VehiclesAddress;
//# sourceMappingURL=VehiclesAddress.js.map