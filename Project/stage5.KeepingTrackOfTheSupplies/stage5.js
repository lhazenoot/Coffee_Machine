const input = require('sync-input')

let ingredientsOfCoffeeMachine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550,

    calculator(option) {
        this.water += option.water;
        this.milk += option.milk;
        this.beans += option.beans;
        this.cups += option.cups;
        this.money += option.money;
    }
}

let espresso = {
    water: -250,
    milk: -0,
    beans: -16,
    cups: -1,
    money: 4
}

let late = {
    water: -350,
    milk: -75,
    beans: -20,
    cups: -1,
    money: 7
}

let cappuccino = {
    water: -200,
    milk: -100,
    beans: -12,
    cups: -1,
    money: 6
}

function coffeeMachine() {
    let ingredients = ingredientsOfCoffeeMachine;

    while (true) {
        let action = input("Write action (buy, fill, take, remaining, exit):\n");
        console.log();

        switch (action) {
            case "exit":
                return;
            case "buy":
                buy(ingredients);
                break;
            case "fill":
                fill(ingredients);
                break;
            case "take":
                take(ingredients);
                break;
            case "remaining":
                remaining(ingredients);
                break;
            default:
                console.log("Unknown input\n");
                break;
        }
    }
}

function remaining(ingredients) {
    console.log("The coffee machine has:");
    console.log(`${ingredients.water} ml of water`);
    console.log(`${ingredients.milk} ml of milk`);
    console.log(`${ingredients.beans} g of coffee beans`);
    console.log(`${ingredients.cups} disposable cups`);
    console.log(`$${ingredients.money} of money`);
    console.log();
}

function buy(ingredients) {
    let coffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");

    switch (coffee) {
        case "exit":
            console.log();
            return;
        case "1":
            buyCalculator(espresso, ingredients);
            break;
        case "2":
            buyCalculator(late, ingredients);
            break;
        case "3":
            buyCalculator(cappuccino, ingredients);
            break;
        default:
            console.log("Unknown input");
            break;
    }
}

function buyCalculator(coffee, ingredients) {

    if (-coffee.water > ingredients.water) {
        return console.log("Sorry, not enough water!\n");
    }
    if (-coffee.milk > ingredients.milk) {
        return console.log("Sorry, not enough milk!\n");
    }
    if (-coffee.beans > ingredients.beans) {
        return console.log("Sorry, not enough coffee beans!\n");
    }
    if (-coffee.cups > ingredients.cups) {
        return console.log("Sorry, not enough disposable cups!\n");
    }
    else {
        ingredients.calculator(coffee);
        return console.log("I have enough resources, making you a coffee!\n");
    }
}

function fill(ingredients) {
    let supplies = {
        water: Number(input("Write how many ml of water do you want to add:\n")),
        milk: Number(input("Write how many ml of milk do you want to add:\n")),
        beans: Number(input("Write how many grams of coffee beans do you want to add:\n")),
        cups: Number(input("Write how many disposable cups of coffee do you want to add:\n")),
        money: 0
    }
    ingredients.calculator(supplies);
    console.log();
}

function take(ingredients) {
    console.log(`I gave you $${ingredients.money}\n`);
    ingredients.money = 0;
}

coffeeMachine();
