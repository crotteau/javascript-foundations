function createBarber(name, earnings, haircuts) {
    var barber = {
        name: name,
        earnings: earnings || 0,
        haircuts: haircuts || []
    }
    return barber
}

function giveCompliment(haircut) {
    return `This ${haircut.style} looks great!`
}

function cutHair(barber, haircut) {
    barber.haircuts.push(haircut)
    barber.earnings += haircut.price
    return barber
}

function listStyles(barber, length) {
    var styles = []
    for (var i = 0; i < barber.haircuts.length; i++) {
        if (barber.haircuts[i].hairLength === length) {
            styles.push(barber.haircuts[i].style)
        }
    }
    return styles
}
module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
 };