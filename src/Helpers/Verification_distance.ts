export function getDistanceFromLatLonInKm(latitude: any, longitude: any) {

    const VARIATOR = 0.003

    const latitude_start = latitude - VARIATOR
    const latitude_end = latitude + VARIATOR
    const longitude_start = longitude - VARIATOR
    const longitude_end = longitude + VARIATOR

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
    return [latitude_start, latitude_end, longitude_start, longitude_end, ((R * c))];

}