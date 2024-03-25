"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ['magician 1', 'magician 2', 'magician 3'];
const show_magicians = (magicians, new_magicians) => {
    console.log('Original:');
    magicians.forEach((magician) => console.log(magician));
    console.log('\Changed:');
    new_magicians?.forEach((magician) => console.log(magician));
};
const make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `Great ${magicians[i]}`;
    }
    return magicians;
};
show_magicians(magician_names);
console.log();
const new_magicians = make_great([...magician_names]);
console.log();
show_magicians(magician_names, new_magicians);
