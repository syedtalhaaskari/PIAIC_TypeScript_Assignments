const usernames = ['admin', 'talha', 'zia', 'asif', 'waqas'];

console.log(`User's list: \n> ${usernames.join('\n> ')}\n`);

usernames.forEach(username => {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

if (usernames.length === 0) {
    console.log(`\nUser's list: ${usernames}`);
    console.log('We need to find some users!');
}

usernames.length = 0;

if (usernames.length === 0) {
    console.log(`\nUser's list: ${usernames}`);
    console.log('We need to find some users!');
}