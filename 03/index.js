var toTitleCase = function (name) {
    return name.toLowerCase().split(' ').map(function (split_name) { return split_name[0].toUpperCase() + split_name.slice(1); }).join(' ');
};
var person_name = 'syed taLha aSkARi';
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(toTitleCase(person_name));
