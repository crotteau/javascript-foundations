// createDragon

function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true

  }; return dragon
}  

// greetRider
function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

// eat
function eat(dragon) {
  dragon.timesEaten ++
  if (dragon.timesEaten < 3) {
    dragon.hungry = true
    return dragon
  } else dragon.hungry = false  
    return dragon
}

// findFireBreathers
var fireBreathers = []
function findFireBreathers(dragons) {
  for (var i =0; i < dragons.length; i++) {
    if (dragons[i].temperment === 'aggressive') {
      fireBreathers.push(dragons[i])
    } 
  } return fireBreathers
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}