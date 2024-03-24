const guests = ['Prophet Muhammad PBUH', 'Prophet Musa AS', 'Prophet Sulayman AS'];

guests.forEach(guest => console.log(`I would like to invite ${guest} on dinner.`));

console.log(`\nDue to some circumstances ${guests[2]} will not arrive on dinner.`);

guests[2] = 'Sultan Muhammad Ali Fateh RA';
console.log(`${guests[2]} is invited for dinner.\n`);

guests.forEach(guest => console.log(`I would like to invite ${guest} on dinner.`));

console.log('\nHurrah! I have found a bigger dinner table\n');

guests.splice(2, 0, 'Quaid-i-Azam Muhammad Ali Jinnah RA');
guests.splice(3, 0, 'Dr Israr Ahmed');
guests.push('my paternal grandfather');

guests.forEach(guest => console.log(`I would like to invite ${guest} on dinner.`));

console.log('\nUnfortunately! Our bigger dinner table is not available at the moment.\nWe have only two tables for guests.\n');

for (let i = 0; i < 4; i += 1) {
    console.log(`Unfortunately! ${guests.pop()} the table is full. You are not invited.`);
}

console.log();

guests.forEach(guest => console.log(`I would like to invite ${guest} on dinner.`));

guests.length = 0;

console.log(`\nGuests list: ${guests}`);