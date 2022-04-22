type returnType = [number, number, number, number, number]

const radians = (deg: number) => deg * (Math.PI / 180)

export function getDistanceFromLatLonInKm(latitude: any, longitude: any): returnType {
  const [lat, lng] = [Number(latitude), Number(longitude)]

  const VARIATOR = 0.003

  const latitude_start  = parseFloat(lat.toFixed(3)) - VARIATOR
  const latitude_end    = parseFloat(lat.toFixed(3)) + VARIATOR
  const longitude_start = parseFloat(lng.toFixed(3)) - VARIATOR
  const longitude_end   = parseFloat(lng.toFixed(3)) + VARIATOR

  const R = 6371

  const dLat = radians(latitude_end - latitude_start)
  const dLng = radians(longitude_end - longitude_start)

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
       + Math.cos(radians(latitude_start))
       * Math.cos(radians(latitude_start))
       * Math.sin(dLng / 2) * Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return [
      latitude_start, latitude_end,
      longitude_start, longitude_end,
      (R * c)
  ]

}