"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describe_city = (city = 'Karachi', country = 'Pakistan') => {
    console.log(`${city} is in ${country}`);
};
describe_city('Islamabad');
describe_city('Lahore', 'Pakistan');
describe_city(undefined, 'Islamic Republic of Pakistan');
describe_city();
