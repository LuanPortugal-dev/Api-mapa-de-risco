import { API } from "./Api";

interface result{
    geometry: {
        location: any
    }
}

interface jsonResponse{
    data: {
        results: result[],
        status: string
    }
}

export async function App(datas: string){
    const { data }: jsonResponse = await API
        .get(`/json?address=${datas},BR&key=${process.env.API_KEY_GEOCODING}`)
//        .get('/json?address=26286140,BR&key=AIzaSyDw87mI4PM2Ctr_mylg9Kb4QkFsbSKPRbQ')

    return data.results[0].geometry.location
}
