const toTitleCase = (name: string) => {
    return name.toLowerCase().split(' ').map(split_name => split_name[0].toUpperCase() + split_name.slice(1)).join(' ')
}

let person_name = 'syed taLha aSkARi';

console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(toTitleCase(person_name));