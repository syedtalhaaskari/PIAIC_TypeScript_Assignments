"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animals = [
    'Lions',
    'Tigers',
    'Cheetah'
];
animals.forEach((animal) => console.log(animal));
console.log();
animals.forEach((animal) => {
    if (animal === 'Lions') {
        console.log(`${animal} always lives in a tribe.`);
    }
    else if (animal === 'Tigers') {
        console.log(`${animal} always lives alone.`);
    }
    else {
        console.log(`${animal} is the fastest animal.`);
    }
});
console.log('\nAll of these animals are mammals and considered as the most dangerous big cats.\nBy nature they are not pet material.');
