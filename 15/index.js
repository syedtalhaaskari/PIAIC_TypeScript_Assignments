var guests = ['Prophet Muhammad PBUH', 'Prophet Musa AS', 'Prophet Sulayman AS'];
guests.forEach(function (guest) { return console.log("I would like to invite ".concat(guest, " on dinner.")); });
console.log("\nDue to some circumstances ".concat(guests[2], " will not arrive on dinner."));
guests[2] = 'Sultan Muhammad Ali Fateh RA';
console.log("".concat(guests[2], " is invited for dinner.\n"));
guests.forEach(function (guest) { return console.log("I would like to invite ".concat(guest, " on dinner.")); });
