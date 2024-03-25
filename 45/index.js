"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_info = ({ manufacturer, model_name }, other = {}) => ({
    manufacturer, model_name, ...other
});
console.log(car_info({
    manufacturer: 'Toyota', model_name: 'Corolla'
}, {
    color: 'White',
    light_color: 'Blue'
}));
