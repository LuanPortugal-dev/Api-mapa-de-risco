"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessLatLng = void 0;
const client_1 = require("@prisma/client");
const Verification_distance_1 = require("../../Helpers/Verification_distance");
const prisma = new client_1.PrismaClient();
async function BusinessLatLng(date, lats, lngs) {
    const [latitude_start, latitude_end, longitude_start, longitude_end, results] = (0, Verification_distance_1.getDistanceFromLatLonInKm)(lats, lngs);
    const latLngBusiness = await prisma.business.findMany({
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
    console.log(results);
    return latLngBusiness;
}
exports.BusinessLatLng = BusinessLatLng;
//# sourceMappingURL=BusinessLatLng.js.map