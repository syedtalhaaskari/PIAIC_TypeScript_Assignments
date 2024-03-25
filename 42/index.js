"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ['magician 1', 'magician 2', 'magician 3'];
const show_magicians = (magicians) => {
    magicians.forEach((magician) => console.log(magician));
};
const make_great = () => {
    for (let i = 0; i < magician_names.length; i++) {
        magician_names[i] = `Great ${magician_names[i]}`;
    }
};
show_magicians(magician_names);
console.log();
make_great();
console.log();
show_magicians(magician_names);
