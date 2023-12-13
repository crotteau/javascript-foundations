
function createElevator(building, floors, currentFloor, passengers) {
    var newElevator = {
        building: building,
        floors: floors,
        currentFloor: currentFloor,
        passengers: passengers
    }
    return newElevator
}

function changeFloors(elevator, floor) {
    if (elevator.floors < floor) {
        return `Floor ${floor} does not exist!`
    }
    else if (elevator.currentFloor === floor) {
        return `You're already on floor ${floor}!`
    } else {
        return `Taking you to floor ${floor}!`  
    }
}

// input: strings of elevator and passenger name
// output: an array of passengers minus passenger name
// using splice
function dropOffPassenger(elevator, passenger) {
    var passengerIndex = elevator.passengers.indexOf(passenger)
    elevator.passengers.splice(passengerIndex, 1)
    return elevator.passengers
}
module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger
 };
