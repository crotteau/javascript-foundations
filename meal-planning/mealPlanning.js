function createMeal(meal, calories) {
    var mealType = {
        type: meal,
        calorieGoal: calories,
        dishes: []
    }
    return mealType
}

function addDish(meal, newDish) {
    if (newDish.calories <= meal.calorieGoal)
        meal.dishes.push(newDish)
        meal.calorieGoal -= newDish.calories
     return meal
}

function calculateCalories(entireMeal) {
    var totalCalories = 0
    for (var i = 0; i < entireMeal.dishes.length; i++) {
        var calories = entireMeal.dishes[i].calories
        totalCalories += calories
    } 
        return `${entireMeal.type} has a total of ${totalCalories} calories.`
}

module.exports = { 
    createMeal,
    addDish,
    calculateCalories
}