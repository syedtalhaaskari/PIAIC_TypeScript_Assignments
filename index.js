#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let todos = [
    {
        id: 1,
        todoItem: "Breakfast",
        isCompleted: true
    },
    {
        id: 2,
        todoItem: "Lunch",
        isCompleted: false
    },
    {
        id: 3,
        todoItem: "Dinner",
        isCompleted: false
    },
];
const deleteAllTodos = async () => {
    console.clear();
    const { choice } = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Are you sure you want to delete all todos? ",
            choices: [
                {
                    name: "Yes",
                    value: true,
                },
                {
                    name: "No",
                    value: false,
                },
            ],
            default: true
        },
    ]);
    if (choice) {
        todos.length = 0;
    }
    homePage();
};
const deleteTodo = async () => {
    if (todos.length > 0) {
        console.clear();
        const { ind } = await inquirer.prompt({
            name: "ind",
            type: "list",
            message: "Select todo to delete: ",
            choices: todos.map(({ todoItem, isCompleted, id }, ind) => ({
                name: chalk[isCompleted ? "bgGreenBright" : "bgRedBright"](todoItem),
                value: ind,
                key: id,
            })),
            default: 0
        });
        if (ind < 0) {
            console.log(chalk.bgRedBright("Invalid Todo Number"));
            editTodo();
            return;
        }
        todos.splice(ind, 1);
        if (todos.length > 0) {
            const { more } = await inquirer.prompt({
                name: "more",
                type: "list",
                message: "Delete More? ",
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
            });
            more ? deleteTodo() : homePage();
        }
        else {
            homePage();
        }
    }
    else {
        homePage();
    }
};
const editTodo = async () => {
    let { ind } = await inquirer.prompt([
        {
            name: "ind",
            type: "list",
            message: "Select Todo Item: ",
            choices: todos.map(({ todoItem, isCompleted, id }, ind) => ({
                name: chalk[isCompleted ? "bgGreenBright" : "bgRedBright"](todoItem),
                value: ind,
                key: id,
            })),
            default: 0,
        },
    ]);
    let todoItem = await inquirer.prompt([
        {
            name: "todoItem",
            type: "input",
            message: "Enter Edited Todo Item: ",
            default: todos[ind].todoItem,
            validate: (input) => {
                if (input.trim().length > 0)
                    return true;
                return "Todo Item cannot be Empty";
            },
            filter: (input) => {
                if (input.trim().length > 0)
                    return input.trim();
                return "";
            }
        },
        {
            name: "isCompleted",
            type: "list",
            message: "Is it Completed? (Y/N): ",
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
            default: todos[ind].isCompleted,
        },
    ]);
    if (ind < 0) {
        console.log(chalk.bgRedBright("Invalid Todo Number"));
        editTodo();
        return;
    }
    else {
        todos[ind].todoItem = todoItem.todoItem;
        todos[ind].isCompleted = todoItem.isCompleted;
        homePage();
    }
};
const addTodo = async () => {
    let todoInput = await inquirer.prompt([
        {
            name: "todoItem",
            type: "input",
            message: "Enter Todo Item: "
        },
        {
            name: "isCompleted",
            type: "list",
            message: "Is it Completed? (Y/N): ",
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
            default: false
        },
    ]);
    todos.push({
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        todoItem: todoInput.todoItem,
        isCompleted: todoInput.isCompleted
    });
    homePage();
};
const showMenu = async () => {
    console.log();
    const { choice } = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: chalk.bgWhiteBright("Select:               "),
            choices: [
                {
                    name: chalk.bgWhiteBright("1. Add Todo           "),
                    value: 1,
                    key: 1,
                },
                {
                    name: chalk.bgWhiteBright("2. Edit Todo          "),
                    value: 2,
                    key: 2,
                },
                {
                    name: chalk.bgWhiteBright("3. Delete Todo        "),
                    value: 3,
                    key: 3,
                },
                {
                    name: chalk.bgWhiteBright("4. Delete All Todos   "),
                    value: 4,
                    key: 4,
                },
                {
                    name: chalk.bgWhiteBright("5. Exit               "),
                    value: 5,
                    key: 5,
                },
            ]
        }
    ]);
    switch (choice) {
        case 1:
            addTodo();
            break;
        case 2:
            editTodo();
            break;
        case 3:
            deleteTodo();
            break;
        case 4:
            deleteAllTodos();
            break;
        case 5:
            break;
        default:
            homePage(true);
            break;
    }
};
const homePage = (invalid) => {
    console.clear();
    if (invalid) {
        console.log(chalk.bgRedBright(" Invalid Selection   "));
    }
    console.log(chalk.bgWhiteBright("     <--- TODO LIST --->     "));
    todos.length <= 0 ?
        console.log(chalk.bgWhiteBright(" No Todo Items To Display    "))
        : todos.map(todo => {
            console.log(chalk[todo.isCompleted ? "bgGreenBright" : "bgRedBright"](`${todo.id}. ${todo.todoItem}   `));
        });
    showMenu();
};
homePage();
