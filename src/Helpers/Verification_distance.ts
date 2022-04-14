type returnType = [string, string, string, string, number]

export function getDistanceFromLatLonInKm(latitude: any, longitude: any): returnType {

    const VARIATOR = 0.003

    const latitude_start = latitude - VARIATOR
    const latitude_end = parseFloat(latitude) + VARIATOR
    const longitude_start = longitude - VARIATOR
    const longitude_end = parseFloat(longitude) + VARIATOR

    "use strict";
    let deg2rad = function (deg: any) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(latitude_start -  latitude_end),
        dLng = deg2rad(longitude_start - longitude_end),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(latitude_start))
            * Math.cos(deg2rad(latitude_start))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return [
        latitude_start.toFixed(3), latitude_end.toFixed(3),
        longitude_start.toFixed(3), longitude_end.toFixed(3),
        ((R * c))
    ];

}