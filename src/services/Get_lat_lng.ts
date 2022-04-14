import { API } from "./api";

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
        .get(`/json?address=${datas},BR&key=AIzaSyDw87mI4PM2Ctr_mylg9Kb4QkFsbSKPRbQ`)
//        .get('/json?address=26286140,BR&key=AIzaSyDw87mI4PM2Ctr_mylg9Kb4QkFsbSKPRbQ')

    return data.results[0].geometry.location
}