function createTape(title, readyToPlay) {
    var tape = {
        title: title,
        readyToPlay: readyToPlay || false
    }
    return tape
}

function reset(tape) {
    tape.readyToPlay = true
    return tape
}

function createCollection(tape1, tape2, tape3) {
    var collection = []
    if (!tape1 && !tape2 && !tape3) {
        return 'Your collection is empty.'
    } else {
        collection.push(tape1, tape2, tape3)
        return collection
    }
}

function previewCollection(collection) {
    var preview = []
    for (var i = 0; i < collection.length; i++) {
        preview.push(collection[i].title)
    }
    return preview
}

module.exports = { 
    createTape,
    reset,
    createCollection,
    previewCollection
 }