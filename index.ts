#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

type currenciesType = { [key: string]: { [key: string]: number } }

const currencies: currenciesType = {
    pkr: {
        usd: 0.0035,
        eur: 0.0032,
        gbp: 0.0027,
    },
    usd: {
        pkr: 285.40,
        eur: 0.91,
        gbp: 0.79,
    },
    eur: {
        pkr: 312.11,
        usd: 1.09,
        gbp: 0.86,
    },
    gbp: {
        pkr: 362.90,
        usd: 1.27,
        eur: 1.16,
    },
}

let userCurrency = "";
let conversionCurrency = "";
let amount = 0;

const tryAgain = async () => {
    const userInput = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Would you like to do another conversion?",
            choices: [
                "Y",
                "N",
            ],
            default: "Y"
        }
    ]);
    if (userInput.choice === "Y") {
        userCurrency = "";
        conversionCurrency = "";
        amount = 0;
        homePage();
    } else {
        process.exit()
    }

}

const showResult = () => {
    console.clear()
    console.log(chalk.bgBlueBright("     <--- Currency Converter --->     "));
    console.log()
    console.log(chalk.bgWhite(`    Your Currency: ${userCurrency}    `));
    console.log(chalk.bgWhite(`    Conversion Currency: ${conversionCurrency}    `));
    console.log(chalk.bgWhite(`    Your Amount: ${amount}    `));
    const userKey = userCurrency.toLowerCase();
    const convertKey = conversionCurrency.toLowerCase();
    console.log(chalk.bgGreenBright(`    Converted Amount: ${userCurrency === conversionCurrency ? amount : amount * currencies[userKey][convertKey]}    `));
    console.log()
    tryAgain();
}

const takeAmount = async (clear: boolean) => {
    console.clear()
    if (clear) {
        console.log(chalk.bgRedBright("Invalid Amount"));
    }
    console.log(chalk.bgBlueBright("     <--- Currency Converter --->     "));
    const userInput = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter Amount",
        }
    ]);
    if (!(userInput.amount >= 0)) {
        takeAmount(true);
        return
    }
    amount = userInput.amount;
    showResult()
};

const takeCurrency = async (type: "userCurrency" | "conversionCurrency") => {
    console.clear();
    console.log(chalk.bgBlueBright("     <--- Currency Converter --->     "));
    console.log()
    const userInput = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: `Select ${type === 'userCurrency' ? 'Your' : 'Conversion'} Currency`,
            choices: [
                "PKR - Pakistani Rupees",
                "USD - American Dollar",
                "EUR - Euro",
                "GBP - Great Britain Pound",
                "Exit",
            ]
        }
    ]);
    const choice = userInput.choice.slice(0, 3)
    if (choice !== "Exi") {
        if (type === "userCurrency") {
            userCurrency = choice;
            takeCurrency("conversionCurrency");
        } else {
            conversionCurrency = choice
            takeAmount(false)
        }
    }
};

const homePage = () => {
    console.clear();
    takeCurrency("userCurrency");
};

homePage()