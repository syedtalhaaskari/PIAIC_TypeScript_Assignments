const guests = ['Prophet Muhammad PBUH', 'Prophet Musa AS', 'Prophet Sulayman AS'];

guests.forEach(guest => console.log(`I would like to invite ${guest} on dinner.`));

console.log(`\nDue to some circumstances ${guests[2]} will not arrive on dinner.`);

guests[2] = 'Sultan Muhammad Ali Fateh RA';
console.log(`${guests[2]} is invited for dinner.\n`);

guests.forEach(guest => console.log(`I would like to invite ${guest} on dinner.`));