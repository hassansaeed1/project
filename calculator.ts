#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};
async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow(
    `Develp by Hassan Sheikh \n--Lets start Calculation--`
  );
  await sleep();
  rainbowTitle.stop();
}
welcome();
function main() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "num1",
        message: "Enter your first number",
      },
      {
        type: "input",
        name: "num2",
        message: "Enter your second number",
      },
      {
        type: "list",
        name: "operator",
        message: "Enter Your Operator",
        choices: ["Addition", "Substract", "Multiplication", "Division"],
      },
    ])
    .then((answers) => {
      const { operator, num1, num2 } = answers;
      if (answers.operator == "Addition") {
        Addition(Number(num1), Number(num2));
      } else if (answers.operator == "Substract") {
        Substract(Number(num1), Number(num2));
      } else if (answers.operator == "Multiplication") {
        Multiplication(Number(num1), Number(num2));
      } else if (answers.operator == "Division") {
        Division(Number(num1), Number(num2));
      } else {
        console.log("Invailid operator");
      }
    });
}

function Addition(num1: number, num2: number) {
  const result = num1 + num2;
  console.log(chalk.black(`Sum: ${num1} + ${num2} =  ${result}`));
}
function Substract(num1: number, num2: number) {
  const result = num1 - num2;
  console.log(chalk.yellow(`Substract:${num1} - ${num2} = ${result}`));
}
function Multiplication(num1: number, num2: number) {
  const result = num1 * num2;
  console.log(chalk.blueBright(`Multiply:${num1} * ${num2} = ${result}`));
}
function Division(num1: number, num2: number) {
  const result = num1 / num2;
  console.log(chalk.yellow(`Division:${num1} / ${num2} = ${result}`));
}
main();
welcome();


