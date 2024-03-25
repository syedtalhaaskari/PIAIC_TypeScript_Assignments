"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_sandwich = (...items) => {
    console.log(`Sandwich will contain:\n> ${items.join('\n> ')}\n`);
};
make_sandwich('Tomato', 'Cheese', 'Salad');
make_sandwich('Mayonnaise', 'Beef');
make_sandwich('Ketchup', 'Fish');
