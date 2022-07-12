const input = require('sync-input')

const startIngredients = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
};

function coffeeMachine() {
    let ingredients = startIngredients;
    showIngredientsOfCoffeeMachine(ingredients);

    let action = input("Write action (buy, fill, take):\n");
    switch (action) {
        case "buy":
            buy(ingredients);
            break;
        case "fill":
            fill(ingredients);
            break;
        case "take":
            take(ingredients);
            break;
        default:
            console.log("Unknown input");
            break;
    }
}

function showIngredientsOfCoffeeMachine(ingredients) {
    console.log("The coffee machine has:");
    console.log(`${ingredients.water} ml of water`);
    console.log(`${ingredients.milk} ml of milk`);
    console.log(`${ingredients.beans} g of coffee beans`);
    console.log(`${ingredients.cups} disposable cups`);
    console.log(`$${ingredients.money} of money`);
}

function buy(ingredients) {
    let action = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");

    switch (action) {
        case "1":
            ingredients.water -= 250;
            ingredients.beans -= 16;
            ingredients.money += 4;
            break;
        case "2":
            ingredients.water -= 350;
            ingredients.milk -= 75;
            ingredients.beans -= 20;
            ingredients.money += 7;
            break;
        case "3":
            ingredients.water -= 200;
            ingredients.milk -= 100;
            ingredients.beans -= 12;
            ingredients.money += 6;
            break;
        default:
            break;
    }
    ingredients.cups -= 1;
    showIngredientsOfCoffeeMachine(ingredients);
}

function fill(ingredients) {
    ingredients.water += Number(input("Write how many ml of water you want to add:\n"));
    ingredients.milk += Number(input("Write how many ml of milk you want to add:\n"));
    ingredients.beans += Number(input("Write how many grams of coffee beans you want to add:\n"));
    ingredients.cups += Number(input("Write how many disposable coffee cups you want to add:\n"));

    showIngredientsOfCoffeeMachine(ingredients);
}

function take(ingredients) {
    console.log(`I gave you $${ingredients.money}`);
    ingredients.money = 0;

    showIngredientsOfCoffeeMachine(ingredients);
}

coffeeMachine();
