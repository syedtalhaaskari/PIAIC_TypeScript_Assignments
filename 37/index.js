"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_shirt = (size = 'large', text = 'I love TypeScript') => {
    console.log(`The size of the shirt is ${size}`);
    console.log(text + '\n');
};
make_shirt('medium', 'A simple t-shirt');
make_shirt(15, 'Work Hard then Smart');
make_shirt();
