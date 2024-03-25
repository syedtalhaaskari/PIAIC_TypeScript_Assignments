"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const favorite_fruits = ['Bananas', 'Apples', 'Kiwis'];
const guessed_fruits = ['Kiwis', 'Oranges', 'Apples', 'Bananas', 'Pears'];
guessed_fruits.forEach((fruit) => {
    if (favorite_fruits.includes(fruit)) {
        console.log(`You really like ${fruit}`);
    }
});
