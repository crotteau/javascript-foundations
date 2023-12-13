function createPlayer(name, age, moves) {
    var player = {
        name: name,
        age: age,
        moveset: moves
    }; return player
}

function createLevel(name, newPlayer) {
    var level = {
        name: name,
        players: newPlayer,
        coins: 0,
        lives: 3
    }; return level
}

function findCoins(level, coinNumber) {
    level.coins = coinNumber
    if (coinNumber >= 100) {
        level.lives ++
    }
    return level
} 

function defeatPlayer(level) {
    level.lives --
    if (level.lives === 0) {
        return 'GAME OVER'
    } else { 
        return level 
    }
}

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
 };