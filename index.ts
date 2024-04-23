#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

type User = {
    id: number;
    pin: number;
    name: string;
    amount: number;
}

let users: User[] = [
    {
        id: 1,
        pin: 1234,
        name: "Admin",
        amount: 100000
    }
];
let currentUser: number;

const pinValidator = {
    validate: (value: string) => /^\d{4}$/.test(value) ? true : 'PIN must be of 4 digits',
    filter: (value: string) => /^\d{4}$/.test(value) ? value : '',
}

const nameValidator = {
    validate: (value: string) => value.length ? true : 'Name cannot be empty',
    filter: (value: string) => value.length ? value : '',
}

const amountValidator = {
    validate: (value: string) => /^\d+$/.test(value) && +value > 0 ? true : 'Amount must be greater than zero',
    filter: (value: string) => /^\d+$/.test(value) && +value > 0 ? value : '',
}

const creditAmountValidator = (signedUser: User) => {
    let amount = '0';

    return {
        validate: () => {
            if (/^\d+$/.test(amount) && +amount > 0) {
                if (signedUser.amount < +amount) {
                    return 'Insufficient Balance';
                }
                return true;
            }
            return 'Amount must be greater than zero';
        },
        filter: (value: string) => {
            amount = value;

            if (/^\d+$/.test(value) && +value > 0) {
                if (signedUser.amount < +value) {
                    return '';
                }
                return value;
            }
            return '';
        },
    }
};

const getSignInDetails = async (signup?: boolean, tryAgain?: boolean) => {
    console.clear();
    if (signup) {
        console.log(chalk.bgGreenBright("Sign Up Successful!."))
    } if (tryAgain) {
        console.log(chalk.bgRedBright("Invalid PIN/ID! Try Again."))
    }

    let signInDetails = await inquirer.prompt([
        {
            name: "pin",
            type: "password",
            message: "Enter Your PIN: ",
            ...pinValidator,
        },
        {
            name: "name",
            type: "input",
            message: "Enter Your Name: ",
            ...nameValidator,
        },
    ]);
    let ind = users.findIndex(user => user.pin === +signInDetails.pin && user.name === signInDetails.name);
    if (ind >= 0) {
        currentUser = ind;
        menu();
    } else {
        getSignInDetails(false, true)
    }
}

const getSignUpDetails = async () => {
    const signUpDetails = await inquirer.prompt([
        {
            name: "pin",
            type: "password",
            message: "Enter Your PIN: ",
            ...pinValidator,
        },
        {
            name: "name",
            type: "input",
            message: "Enter Your Name: ",
            ...nameValidator
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Your Deposit Amount: ",
            ...amountValidator
        },
    ])
    if (signUpDetails.pin >= 0 && signUpDetails.amount >= 0 && !!signUpDetails.name) {
        users.push({
            id: users.length + 1,
            pin: +signUpDetails.pin,
            name: signUpDetails.name,
            amount: +signUpDetails.amount
        })
        getSignInDetails(true)
    } else {
        console.log(chalk.bgRedBright("Invalid Details! Try Again."))
        getSignUpDetails()
    }
}

const depositAmount = async () => {
    const depositAmountDetails = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter Your Deposit Amount: ",
            ...amountValidator
        },
    ])
    return depositAmountDetails.amount;
}

const creditAmount = async () => {
    const creditAmountDetails = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter Your Credit Amount: ",
            ...creditAmountValidator(users[currentUser])
        },
    ])
    return creditAmountDetails.amount;
}

const menu = async () => {
    console.clear();

    const { choice } = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: chalk.bgWhiteBright.blackBright.bold("          <--- M E N U --->                 "),
            choices: [
                {
                    name: chalk.bgWhiteBright(" 1. Deposit                                 "),
                    value: 1,
                    key: 1,
                },
                {
                    name: chalk.bgWhiteBright(" 2. Credit                                  "),
                    value: 2,
                    key: 2,
                },
                {
                    name: chalk.bgWhiteBright(" 3. Check Amount                            "),
                    value: 3,
                    key: 3,
                },
                {
                    name: chalk.bgWhiteBright(" 4. View Account Details                    "),
                    value: 4,
                    key: 4,
                },
                {
                    name: chalk.bgWhiteBright(" 5. SignOut                                 "),
                    value: 5,
                    key: 5,
                },
            ]
        },
    ]);

    console.clear();

    switch (choice) {
        case 1:
            users[currentUser].amount += await depositAmount();
            showCurrentBalance();
            break
        case 2:
            users[currentUser].amount -= await creditAmount();
            showCurrentBalance();
            break;
        case 3:
            showCurrentBalance()
            break;
        case 4:
            console.log(chalk.whiteBright(`Name: ${users[currentUser].name}`));
            console.log(chalk.whiteBright(`Amount: ${users[currentUser].amount}`));
            break
        case 5:
            currentUser = -1;
            homePage();
            return
        default:
            console.log(chalk.bgRedBright(`Invalid Option`));
    }
    const { more } = await inquirer.prompt([
        {
            message: chalk.yellowBright("Would you like to make another transaction?"),
            name: "more",
            type: "list",
            choices: [
                {
                    name: 'Yes',
                    value: true,
                },
                {
                    name: 'No',
                    value: false,
                },
            ],
            default: true
        }
    ]);

    more ?
        menu() :
        exitApp();
}

const showCurrentBalance = () => console.log(chalk.whiteBright(`Your Current Amount is ${users[currentUser].amount}`));

const exitApp = () => {
    currentUser = -1;
    console.log(chalk.bgBlueBright("Thanks for using our service. See you later"));
}

const homePage = () => {
    console.clear();
    chooseInputFromHomePage();
}

const chooseInputFromHomePage = async () => {
    const { choice } = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: chalk.bgWhiteBright.blackBright.bold("          <--- M E N U --->                 "),
            choices: [
                {
                    name: chalk.bgWhiteBright(" 1. SignIn                                  "),
                    value: 1,
                    key: 1,
                },
                {
                    name: chalk.bgWhiteBright(" 2. SignUp                                  "),
                    value: 2,
                    key: 2,
                },
                {
                    name: chalk.bgWhiteBright(" 3. Exit                                    "),
                    value: 3,
                    key: 3,
                },
            ],

        },
    ]);

    console.clear();

    switch (choice) {
        case 1:
            getSignInDetails();
            break
        case 2:
            getSignUpDetails();
            break;
        case 3:
            exitApp();
            break;
        default:
            console.log(chalk.bgRedBright(`Invalid Option`));
    }
}

homePage()