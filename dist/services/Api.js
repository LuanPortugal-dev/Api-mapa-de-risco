"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const axios_1 = __importDefault(require("axios"));
exports.API = axios_1.default.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode'
});
//# sourceMappingURL=Api.js.map