var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = [
    'Saudi Arabia',
    'Palestine',
    'Australia',
    'Turkey',
    'Northern Pakistan'
];
console.log('Original ===> ', places);
console.log('After Sort ===> ', __spreadArray([], places, true).sort());
console.log('\nOriginal ===> ', places);
console.log('Reverse ===> ', __spreadArray([], places, true).sort().reverse());
console.log('\nOriginal ===> ', places);
console.log('Original Reverse ===> ', places.reverse());
console.log('Original Reverse ===> ', places.reverse());
console.log('\nOriginal Sort ===> ', places.sort());
console.log('\nOriginal Sort Reverse ===> ', places.reverse());
