"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Api_1 = require("./Api");
async function App(datas) {
    const { data } = await Api_1.API
        .get(`/json?address=${datas},BR&key=AIzaSyDw87mI4PM2Ctr_mylg9Kb4QkFsbSKPRbQ`);
    return data.results[0].geometry.location;
}
exports.App = App;
//# sourceMappingURL=Get_lat_lng.js.map