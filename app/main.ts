import express from 'express'

import { IncidentsLatLng } from '../src/Database/Incidents/IncidentsLatLng';

import { BusinessAddress } from '../src/Database/Business/BusinessAddress';
import { BusinessCep } from '../src/Database/Business/BusinessCep';
import { BusinessLatLng } from '../src/Database/Business/BusinessLatLng';

import { VehiclesAddress } from '../src/Database/Vehicles/VehiclesAddress';
import { VehiclesCep } from '../src/Database/Vehicles/VehiclesCep';
import { VehiclesLatLng } from '../src/Database/Vehicles/VehiclesLatLng';

import { CargoAddress } from '../src/Database/Events/CargoAddress';
import { CargoCep } from '../src/Database/Events/CargoCep';
import { CargoLatLng } from '../src/Database/Events/CargoLatLng';


const app = express();

app.use(express.json())

app.get('/:type/:date/latlng/:lat/:lng', async (req: any, res: any) => {

    if (req.params.type == 'comercio') {
        const dataBusiness = BusinessLatLng(req.params.date, req.params.lat, req.params.lng)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'veiculos') {
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


app.get('/:type/date/cep/:cep', async (req: any, res: any) => {

    if (req.params.type == 'comercio') {
        const dataBusiness = BusinessCep(req.params.date, req.params.cep)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'veiculos') {
        const dataVehicles = VehiclesCep(req.params.date, req.params.cep)
        return res.json(await dataVehicles)
    }

    if (req.params.type == 'carga') {
        const dataEvents = CargoCep(req.params.cep)
        return res.json(await dataEvents)
    }

    if (req.params.type == 'acidentes') {
        const dataIncidents = IncidentsLatLng(req.params.lat, req.params.lng)
        return res.json(await dataIncidents)
    }
})

app.get('/:type/date/endereco/:address', async (req: any, res: any) => {

    if (req.params.type == 'comercio') {
        const dataBusiness = BusinessAddress(req.params.date, req.params.address)
        return res.json(await dataBusiness)
    }

    if (req.params.type == 'veiculos') {
        const dataVehicles = VehiclesAddress(req.params.date, req.params.address)
        return res.json(await dataVehicles)
    }

    if (req.params.type == 'carga') {
        const dataEvents = CargoAddress(req.params.address)
        return res.json(await dataEvents)
    }

    if (req.params.type == 'acidentes') {
        const dataIncidents = IncidentsLatLng(req.params.lat, req.params.lng)
        return res.json(await dataIncidents)
    }

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Estou ouvindo')
})