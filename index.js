import inquirer from "inquirer";
import chalk from "chalk";
let todosList = [];
let conditions = true;
console.log(chalk.bgGreen("\n \t welcome to Todo-List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "What do you want to add in your todo-list?",
        }
    ]);
    todosList.push(addTask.task);
    console.log(`${addTask.task} is added in your todo-list!!`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more in your todo-list ?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo-list:", todosList);
