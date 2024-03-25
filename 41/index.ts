const magician_names = ['magician 1', 'magician 2', 'magician 3'];

const show_magicians = (magicians: string[]) => {
    magicians.forEach((magician) => console.log(magician));
}

show_magicians(magician_names);