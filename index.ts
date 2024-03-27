#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

type Answers = {
    num1: number,
    num2: number,
    operator: string
}

type Output = number | string;

const getInputs: () => Promise<Answers> = async () => {
    let answers = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter num1: ",
            default: 0
        },
        {
            name: "num2",
            type: "number",
            message: "Enter num2: ",
            default: 0
        },
        {
            name: "operator",
            type: "list",
            choices: [
                { name: '1. Addition', value: '+' },
                { name: '2. Subtraction', value: '-' },
                { name: '3. Multiplication', value: '*' },
                { name: '4. Division', value: '/' },
                { name: '5. Remainder', value: '%' },

            ],
            message: "Select Operation:"
        },
    ]);
    return answers;
}

const getOutput = ({ num1, num2, operator }: Answers): Output => eval(`${num1}${operator}${num2}`);

let answers: Answers = await getInputs();

let output: Output = getOutput(answers);

let display: string;

if (typeof output === "number" && !isNaN(output)) {
    display = chalk.whiteBright.bgGreenBright(`${answers.num1} ${answers.operator} ${answers.num2} = ${output}`);
} else {
    display = chalk.whiteBright.bgRedBright(`Invalid Input`);
}

console.log(display);