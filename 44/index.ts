const make_sandwich = (...items: string[]) => {
    console.log(`Sandwich will contain:\n> ${items.join('\n> ')}\n`);
}

make_sandwich('Tomato', 'Cheese','Salad');
make_sandwich('Mayonnaise', 'Beef');
make_sandwich('Ketchup', 'Fish');