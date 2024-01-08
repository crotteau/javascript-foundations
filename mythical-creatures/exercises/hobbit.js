// createHobbit
var acquaintances = []
function createHobbit(name, age) {
  var hobbit = {
    name: name,
    age: age,
    isAdult: age >= 33,
    isOld: age >= 101,
    acquaintances: acquaintances
  }; if (age === undefined && name === undefined) {
      hobbit.age = 0
      hobbit.name = 'unknown'
        return hobbit
  } else if (name === undefined) {
      hobbit.name = 'unknown'
       return hobbit
  } else if (age === undefined) {
      hobbit.age = 0
       return hobbit
  } else hobbit.age = age
       return hobbit
} 

// celebrateBirthday
function celebrateBirthday(hobbit) {
  hobbit.age ++
    hobbit.isAdult = (hobbit.age >= 33)
    hobbit.isOld = (hobbit.age >= 101)
      return hobbit
}

// getRing
function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!'
  } else return 'You can\'t have it!'
}

// meetPeople
function meetPeople(hobbit, people) {
  hobbit.acquaintances.push(people)
  return hobbit
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  // findFriends
}