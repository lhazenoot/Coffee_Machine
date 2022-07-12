const input = require('sync-input')

function coffeeMachine() {
    let cups = Number(input("Write how many cups of coffee you will need:\n"));
    ingredientsCalculator(cups);
}

function ingredientsCalculator(cups) {
    let water = 200 * cups;
    let milk = 50 * cups;
    let beans = 15 * cups;

    console.log(`For ${cups} cups of coffee you will need:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${beans} g of coffee beans`);
}

coffeeMachine();

