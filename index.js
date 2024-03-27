#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const getInputs = async () => {
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
};
const getOutput = ({ num1, num2, operator }) => eval(`${num1}${operator}${num2}`);
let answers = await getInputs();
let output = getOutput(answers);
let display;
if (typeof output === "number" && !isNaN(output)) {
    display = chalk.whiteBright.bgGreenBright(`${answers.num1} ${answers.operator} ${answers.num2} = ${output}`);
}
else {
    display = chalk.whiteBright.bgRedBright(`Invalid Input`);
}
console.log(display);
