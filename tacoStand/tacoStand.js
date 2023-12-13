
function createIngredient(ingredient, price) {
    var newIngredient = {
        name: ingredient || 'unknown',
        price: price || 0.00
    }
     return newIngredient
} 

// createTaco
function createTaco(tacoName, tacoIngredient) {
    var newTaco = {
        name: tacoName || 'custom',
        ingredients: tacoIngredient || []
    }
 return newTaco
} 

function addIngredientToTaco(addToTaco, addIngredient) {
    var updatedTaco = {
        name: addToTaco.name,
        ingredients: addToTaco.ingredients
    } 
    updatedTaco.ingredients.push(addIngredient)
    return updatedTaco
}

function calculatePrice(tacoType) {
 var totalPrice = 0
    for (var i = 0; i < tacoType.ingredients.length; i++) {
         var tacoPrice = tacoType.ingredients[i].price
         totalPrice += tacoPrice 
    }
     return totalPrice
} 

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
