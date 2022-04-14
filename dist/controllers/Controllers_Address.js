"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLatLngWithCep = void 0;
const Get_lat_lng_1 = require("../services/Get_lat_lng");
const Verification_distance_1 = require("../Helpers/Verification_distance");
async function GetLatLngWithCep(address) {
    const { lat, lng } = await (0, Get_lat_lng_1.App)(address);
    const [latitude_start, latitude_end, longitude_start, longitude_end] = (0, Verification_distance_1.getDistanceFromLatLonInKm)(Number(lat), Number(lng));
    return [latitude_start, latitude_end, longitude_start, longitude_end];
}
exports.GetLatLngWithCep = GetLatLngWithCep;
//# sourceMappingURL=Controllers_Address.js.map