// @ts-nocheck
console.log('1 == "1"? I predict True');
console.log(1 == "1");

console.log('\n1 === "1"? I predict False');
console.log(1 === "1");

console.log('\n[] == {}? I predict False');
console.log([] == {});

console.log('\n[] === {}? I predict False');
console.log([] === {});

console.log('\n[] === 0? I predict False');
console.log([] === 0);

console.log('\n{} == 0? I predict False');
console.log({} == 0);

console.log('\nfalse == 0? I predict true');
console.log(false == 0);

console.log('\nfalse === 0? I predict false');
console.log(false === 0);

console.log('\ntypeof [] === "object"? I predict true');
console.log(typeof [] === "object");

console.log('\ntypeof {} === "object"? I predict true');
console.log("1" > 0);

console.log('\ntrue or false? I predict true');
console.log(true || false);

console.log('\ntrue and false? I predict false');
console.log(true && false);

console.log('\n"a" == "A"? I predict false');
console.log('a' == 'A');

console.log('\n"a" === "A"? I predict false');
console.log('a' === 'A');

console.log('\n"a" === "A".toLowerCase()? I predict true');
console.log('a' === 'A'.toLowerCase());

console.log('\n1 is in the array [1, 2, 3]? I predict true');
console.log([1, 2, 3].includes(1));

console.log('\n4 is in the array [1, 2, 3]? I predict false');
console.log([1, 2, 3].includes(4));
