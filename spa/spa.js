function createCustomer(name, bill, bookings) {
  var customer = {
    name: name,
    bill: bill,
    bookings: bookings || []
  }
  return customer
}

function greeting(customerName) {
  if (customerName.bookings.length === 0) {
    return `${customerName.name}! Welcome to Happy Spa`
  } else {
    return `${customerName.name}! Welcome back to Happy Spa`
  }
}

function createService(serviceName, cost) {
  if (serviceName === undefined || cost === undefined) {
  return 'Please provide service name and cost.'
} else { return {name:serviceName, cost:cost}
}
}

function bookServices(customerName, serviceName) {
  customer = customerName
  customer.bookings.push(serviceName.name)
  customer.bill += serviceName.cost
  return customer
}

function applyGiftCard(allServices, giftCard) {
  var affordableServices = []
  for (var i = 0; i < allServices.length; i++) {
    if (allServices[i].price <= giftCard) {
      affordableServices.push(allServices[i].name)
    }
  } return affordableServices
}
module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
