var guests = ['Prophet Muhammad PBUH', 'Prophet Musa AS', 'Prophet Sulayman AS'];
guests.forEach(function (guest) { return console.log("I would like to invite ".concat(guest, " on dinner.")); });
console.log("\nDue to some circumstances ".concat(guests[2], " will not arrive on dinner."));
guests[2] = 'Sultan Muhammad Ali Fateh RA';
console.log("".concat(guests[2], " is invited for dinner.\n"));
guests.forEach(function (guest) { return console.log("I would like to invite ".concat(guest, " on dinner.")); });
guests.length = 6;
console.log('\nHurrah! I have found a bigger dinner table\n');
guests.splice(0, 0, 'Quaid-i-Azam Muhammad Ali Jinnah RA');
guests.splice(2, 0, 'Dr Israr Ahmed');
guests.push('my paternal grandfather');
guests.forEach(function (guest) { return console.log("I would like to invite ".concat(guest, " on dinner.")); });
