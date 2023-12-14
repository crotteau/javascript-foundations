function createVampire(name, pet) {
  var newVampire = {
    name: name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0
  } 
  return newVampire
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else return 'No thanks, I am too full.'
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50 && vampire.ouncesDrank >= 40) {
    vampire.ouncesDrank += 10
    vampire.thirsty = false
    return vampire
  } else if (vampire.ouncesDrank < 40) { 
    vampire.ouncesDrank += 10
    return vampire
  } else {
    return vampire
  }
}

function inquirePlace(locations, inquiry) {
  var locations = locations
  if (locations.includes(inquiry)) {
    return `Yes, I have spent some time in ${inquiry}.`
  } else return `No, I have never been to ${inquiry}.`
}

// search an array of objects
// find if object contains key/value pair with bat
function findBatLovers(vampires) {
  var batLovers = []
  for (var i = 0; i < vampires.length; i++) {
    if (vampires[i].pet === 'bat') {
      batLovers.push(vampires[i].name)
    }
  }
  return batLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}