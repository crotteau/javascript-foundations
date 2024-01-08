function createItemStock(name, quantity, price) {
    var item = {
        name: name || 'unknown',
        quantity: quantity || 0, 
        price: price || 1.00
    }
    return item
}

function makePurchase(selectedItem, moneyForPurchase) {
    if (selectedItem.price > moneyForPurchase) {
        return `Sorry, you need at least $${selectedItem.price} to make that purchase`
    } else if (selectedItem.quantity === 0) {
        return 'Sorry, there are none left'
    } else {
        return `Here are your ${selectedItem.name}`
    }
}

function collectChange(looseChange) {
    var totalChange = 0
    for (var i = 0; i < looseChange.length; i++) {
       totalChange += looseChange[i]
    }
    return totalChange
}

module.exports = {
    createItemStock,
    makePurchase,
    collectChange
}
