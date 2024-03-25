"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = ['talha', 'rockyBhai', 'aijazSahab', 'papaKiPari', 'username'];
const new_users = ['rockyBHAI', '', 'userNAME', 'newUser', 'ahmed', 'ROCkyBhai'];
new_users.forEach((new_user) => {
    if (current_users.map((current_user) => current_user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`${new_user} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
});
