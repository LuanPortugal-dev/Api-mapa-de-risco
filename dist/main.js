"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IncidentsLatLng_1 = require("./Database/Incidents/IncidentsLatLng");
const BusinessAddress_1 = require("./Database/Business/BusinessAddress");
const BusinessCep_1 = require("./Database/Business/BusinessCep");
const BusinessLatLng_1 = require("./Database/Business/BusinessLatLng");
const VehiclesAddress_1 = require("./Database/Vehicles/VehiclesAddress");
const VehiclesCep_1 = require("./Database/Vehicles/VehiclesCep");
const VehiclesLatLng_1 = require("./Database/Vehicles/VehiclesLatLng");
const CargoAddress_1 = require("./Database/Events/CargoAddress");
const CargoCep_1 = require("./Database/Events/CargoCep");
const CargoLatLng_1 = require("./Database/Events/CargoLatLng");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/:type/:date/latlng/:lat/:lng', async (req, res) => {
    if (req.params.type == 'comercio') {
        const dataBusiness = (0, BusinessLatLng_1.BusinessLatLng)(req.params.date, req.params.lat, req.params.lng);
        return res.json(await dataBusiness);
    }
    if (req.params.type == 'veiculo') {
        const dataVehicles = (0, VehiclesLatLng_1.VehiclesLatLng)(req.params.date, req.params.lat, req.params.lng);
        return res.json(await dataVehicles);
    }
    if (req.params.type == 'carga') {
        const dataEvents = (0, CargoLatLng_1.CargoLatLng)(req.params.lat, req.params.lng);
        return res.json(await dataEvents);
    }
    if (req.params.type == 'acidentes') {
        const dataIncidents = (0, IncidentsLatLng_1.IncidentsLatLng)(req.params.lat, req.params.lng);
        return res.json(await dataIncidents);
    }
});
app.get('/:type/:date/cep/:cep', async (req, res) => {
    if (req.params.type == 'comercio') {
        const dataBusiness = (0, BusinessCep_1.BusinessCep)(req.params.date, req.params.cep);
        return res.json(await dataBusiness);
    }
    if (req.params.type == 'veiculo') {
        const dataVehicles = (0, VehiclesCep_1.VehiclesCep)(req.params.date, req.params.cep);
        return res.json(await dataVehicles);
    }
    if (req.params.type == 'carga') {
        const dataEvents = (0, CargoCep_1.CargoCep)(req.params.cep);
        return res.json(await dataEvents);
    }
});
app.get('/:type/:date/endereco/:address', async (req, res) => {
    if (req.params.type == 'comercio') {
        const dataBusiness = (0, BusinessAddress_1.BusinessAddress)(req.params.date, req.params.address);
        return res.json(await dataBusiness);
    }
    if (req.params.type == 'veiculo') {
        const dataVehicles = (0, VehiclesAddress_1.VehiclesAddress)(req.params.date, req.params.address);
        return res.json(await dataVehicles);
    }
    if (req.params.type == 'carga') {
        const dataEvents = (0, CargoAddress_1.CargoAddress)(req.params.address);
        return res.json(await dataEvents);
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Estou ouvindo');
});
//# sourceMappingURL=main.js.map