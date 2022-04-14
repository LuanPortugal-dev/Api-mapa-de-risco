"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLatLngWithCep = void 0;
const Get_lat_lng_1 = require("../services/Get_lat_lng");
const Verification_distance_1 = require("../Helpers/Verification_distance");
async function GetLatLngWithCep(cep) {
    const { lat, lng } = await (0, Get_lat_lng_1.App)(cep);
    const [latitude_start, latitude_end, longitude_start, longitude_end, results] = (0, Verification_distance_1.getDistanceFromLatLonInKm)(Number(lat), Number(lng));
    return [latitude_start, latitude_end, longitude_start, longitude_end, results];
}
exports.GetLatLngWithCep = GetLatLngWithCep;
//# sourceMappingURL=Controllers_Cep.js.map