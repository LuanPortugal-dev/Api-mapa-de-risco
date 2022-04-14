"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentsLatLng = void 0;
const client_1 = require("@prisma/client");
const Verification_distance_1 = require("../../Helpers/Verification_distance");
const prisma = new client_1.PrismaClient({ datasources: { db: { url: process.env.DB_CONNECTION_2 } } });
async function IncidentsLatLng(lats, lngs) {
    const [latitude_start, latitude_end, longitude_start, longitude_end] = (0, Verification_distance_1.getDistanceFromLatLonInKm)(lats, lngs);
    const latLngIncidents = await prisma.incidents.findMany({
        where: {
            latitude: {
                lte: parseFloat(latitude_start),
                gte: parseFloat(longitude_start)
            },
            longitude: {
                lte: parseFloat(latitude_end),
                gte: parseFloat(longitude_end)
            }
        }
    });
    return latLngIncidents;
}
exports.IncidentsLatLng = IncidentsLatLng;
//# sourceMappingURL=IncidentsLatLng.js.map