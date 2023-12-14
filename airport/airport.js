function createAirport(name, company , gateNum) {
  var airport = {
    name: name,
    availableGates: gateNum,
    airlines: company,
    message: ''
  }
  return airport
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, landingPlanes) {
  airport.availableGates -= landingPlanes
  if (airport.availableGates >= 0) {
    airport.message = `Success! Current availability is ${airport.availableGates}.`
    return airport
  } else if (airport.availableGates < 0) { 
    var overflow = airport.availableGates * -1
    airport.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`
    airport.availableGates = 0
    return airport
  }
    
}

function checkAirlineLocations(airports, airline) {
  var airlineCarriers = []
  for (var i = 0; i < airports.length; i++) {
    if (airports[i].airlines.includes(airline)) {
      airlineCarriers.push(airports[i].name)
    }    
  }
  return airlineCarriers 
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
