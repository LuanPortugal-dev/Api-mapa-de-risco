import express from 'express'

import cors from 'cors'

import { IncidentsLatLng } from './Database/Incidents/IncidentsLatLng'

import { BusinessAddress } from './Database/Business/BusinessAddress'
import { BusinessCep } from './Database/Business/BusinessCep'
import { BusinessLatLng } from './Database/Business/BusinessLatLng'

import { VehiclesAddress } from './Database/Vehicles/VehiclesAddress'
import { VehiclesCep } from './Database/Vehicles/VehiclesCep'
import { VehiclesLatLng } from './Database/Vehicles/VehiclesLatLng'

import { CargoAddress } from './Database/Events/CargoAddress'
import { CargoCep } from './Database/Events/CargoCep'
import { CargoLatLng } from './Database/Events/CargoLatLng'


const app = express()

app.use(express.json())
app.use(cors())

app.get('/:type/:date/latlng/:lat/:lng', async (req: any, res: any) => {

    if (req.params.type == 'comercio') {
        const dataBusiness = BusinessLatLng(req.params.date, req.params.lat, req.params.lng)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'veiculo') {
        const dataVehicles = VehiclesLatLng(req.params.date, req.params.lat, req.params.lng)
        return res.json(await dataVehicles)
    }

    if (req.params.type == 'carga') {
        const dataEvents = CargoLatLng(req.params.lat, req.params.lng)
        return res.json(await dataEvents)
    }

    if (req.params.type == 'acidentes') {
        const dataIncidents = IncidentsLatLng(req.params.lat, req.params.lng)
        return res.json(await dataIncidents)
    }
})

app.get('/:type/:date/cep/:cep', async (req: any, res: any) => {

    if (req.params.type == 'comercio') {
        const dataBusiness = BusinessCep(req.params.date, req.params.cep)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'veiculo') {
        const dataVehicles = VehiclesCep(req.params.date, req.params.cep)
        return res.json(await dataVehicles)
    }

    if (req.params.type == 'carga') {
        const dataEvents = CargoCep(req.params.cep)
        return res.json(await dataEvents)
    }
})

app.get('/:type/:date/endereco/:address', async (req: any, res: any) => {

    if (req.params.type == 'comercio') {
        const dataBusiness = BusinessAddress(req.params.date, req.params.address)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'veiculo') {
        const dataVehicles = VehiclesAddress(req.params.date, req.params.address)
        return res.json(await dataVehicles)
    }

    if (req.params.type == 'carga') {
        const dataEvents = CargoAddress(req.params.address)
        return res.json(await dataEvents)
    }
})

//const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Estou ouvindo')
})