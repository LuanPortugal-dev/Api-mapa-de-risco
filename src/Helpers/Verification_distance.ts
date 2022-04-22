type returnType = [number, number, number, number]

const radians = (deg: number) => deg * (Math.PI / 180)


export function getVariation(latitude: any, longitude: any): returnType {

  const [lat, lng] = [Number(latitude), Number(longitude)]

  const VARIATOR = 0.003

  const latitude_start  = parseFloat(lat.toFixed(3)) - VARIATOR
  const latitude_end    = parseFloat(lat.toFixed(3)) + VARIATOR
  const longitude_start = parseFloat(lng.toFixed(3)) - VARIATOR
  const longitude_end   = parseFloat(lng.toFixed(3)) + VARIATOR

  return [
    latitude_start, latitude_end,
    longitude_start, longitude_end]
}

export function getDistanceFromLatLonInKm(input_lat: any, input_lng: any, lat_end: any, lng_end: any) {

  const R = 6371

  const dLat = radians(lat_end - input_lat)
  const dLng = radians(lng_end - input_lng)

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
       + Math.cos(radians(input_lat))
       * Math.cos(radians(input_lng))
       * Math.sin(dLng / 2) * Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c

}