"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoLatLng = void 0;
const client_1 = require("@prisma/client");
const Verification_distance_1 = require("../../Helpers/Verification_distance");
const prisma = new client_1.PrismaClient();
async function CargoLatLng(lats, lngs) {
    const [latitude_start, latitude_end, longitude_start, longitude_end] = ((0, Verification_distance_1.getDistanceFromLatLonInKm)(lats, lngs));
    const latLngCargo = await prisma.events.findMany({
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
    console.log(latLngCargo);
    return latLngCargo;
}
exports.CargoLatLng = CargoLatLng;
//# sourceMappingURL=CargoLatLng.js.map