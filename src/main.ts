import express from 'express'

import cors from 'cors'

import {ResultBusiness} from './Middlewares/Business'
import {ResultVehicles} from './Middlewares/Vehicles'
import {ResultCargo} from './Middlewares/Cargo'

//import { IncidentsLatLng } from './Database/Incidents/IncidentsLatLng'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/:type/:date/:data', async (req: any, res: any) => {

    if (req.params.type == 'business_theft') {
        const dataBusiness = ResultBusiness(req.params.date, req.params.data)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'vehicle_theft') {
        const dataVehicles = (ResultVehicles(req.params.date, req.params.data))
        return res.json(await dataVehicles)
    }

    if (req.params.type == 'cargo_theft') {
        const dataEvents = ResultCargo(req.params.date, req.params.data)
        return res.json(await dataEvents)
    }
})

app.listen(4000, () => {
    console.log('Estou ouvindo')
})