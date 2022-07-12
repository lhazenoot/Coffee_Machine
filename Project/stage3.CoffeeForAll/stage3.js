const input = require('sync-input')

function coffeeMachineCalculator() {
    let ingredients = getIngredientForCoffeeMachine;
    let cups = Number(input("Write how many cups of coffee you will need:\n"));
    cupsCalculator(ingredients, cups);
}

let getIngredientForCoffeeMachine = {
    water: Number(input("Write how many ml of water the coffee machine has:\n")),
    milk: Number(input("Write how many ml of milk the coffee machine has\n")),
    beans: Number(input("Write how many grams of coffee beans the coffee \n"))
}

function cupsCalculator(ingredients, cups) {
    let water = Math.floor(ingredients.water / 200);
    let milk = Math.floor(ingredients.milk / 50);
    let beans = Math.floor(ingredients.beans / 15);

    let maxCups = Math.min(water, milk, beans);

    if (cups === maxCups) {
        console.log("Yes, I can make that amount of coffee");
    }
    else if (cups < maxCups) {
        let extraCups = maxCups - cups;
        console.log(`Yes, I can make that amount of coffee (and even ${extraCups} more than that)`);
    }
    else if (cups > maxCups) {
        console.log(`No, I can make only ${maxCups} cups of coffee`);
    }
}

coffeeMachineCalculator();
