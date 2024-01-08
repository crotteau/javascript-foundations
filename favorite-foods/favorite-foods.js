function createFavoriteFood(food) {
    var favFood = {
        name: food.dish,
        ingredients: food.ingredients,
        isSpicy: food.isSpicy,
        timesOrdered: 0
    }
    return favFood
}

function commentOnSpiciness(dish) {
    if (dish.isSpicy) {
        return `Wow, this ${dish.name} is so spicy!`
    } else return `Phew, this ${dish.name} is not very spicy.`
}

function orderFood(dish) {
    dish.timesOrdered += 1
    return dish
}

function createShoppingList(dishes) {
    var shoppingList = []
    for (var i = 0; i < dishes.length; i++) {
        for (var i = 0; i < dishes[i].length; i++) {
            shoppingList.push(dishes.ingredients[i])
        }
    }
    return shoppingList
}

module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};