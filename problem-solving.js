// 1. anaToVori calculation function

function anaToVori(ana) {

    if (typeof ana != "number" || ana < 0) {
        return 'Error: Please input any positive number';
    }

    const vori = ana / 16;
    return vori;
}

// 2. pandaCost calculation function

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {

    if (typeof singaraQuantity != "number" || typeof somuchaQuantity != "number" || typeof jilapiQuantity != "number" || singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Error: Please input any positive number';
    }

    const singaraPrice = 7 * singaraQuantity;
    const somuchaPrice = 10 * somuchaQuantity;
    const jilapiPrice = 15 * jilapiQuantity;
    const totalPrice = singaraPrice + somuchaPrice + jilapiPrice;
    return totalPrice;
}

// 3. picnicBudget calculation function

function picnicBudget(totalPersons) {

    if (typeof totalPersons != "number" || totalPersons < 0) {
        return 'Error: Please input any positive number';
    }

    const totalCost1 = 5000;
    const totalCost2 = 4000;
    const totalCost3 = 3000;

    if (totalPersons > 0 && totalPersons <= 100) {
        const fullCost = totalPersons * totalCost1;
        return fullCost;
    }
    else if (totalPersons > 0 && totalPersons <= 200) {
        const fullCost = 100 * totalCost1;
        const extraPersons = totalPersons - 100;
        const extraCost = extraPersons * totalCost2;
        const fullPayable = fullCost + extraCost;
        return fullPayable;
    }
    else if (totalPersons > 200) {
        const fullCost = 100 * totalCost1;
        const extraCost = 100 * totalCost2;
        const finalExtraPersons = totalPersons - 200;
        const finalCost = finalExtraPersons * totalCost3;
        const fullPayable = fullCost + extraCost + finalCost;
        return fullPayable;
    }
}

// 4. oddFriend calculation function

function oddFriend(friendsName) {

    if (typeof friendsName == "object") {
        for (let i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length % 2 == 1) {
                return friendsName[i];
            }
        }
    }
    else {
        return 'Error: Please enter a person name';
    }

}
