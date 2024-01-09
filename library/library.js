function issueCard(name, age) {
    var card = {
        name, 
        age,
        numBooksCheckedOut: 0,
        isChild: false
    }
    if (age < 12) {
     card.isChild = true
    }
     return card
}

function searchByAuthor(collection, author) {
    var searchResult = []
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].author === author) {
            searchResult.push(collection[i])
        }
    } if (searchResult.length < 1) {
        return 'No book found for search criteria'
    } else return searchResult
}

module.exports = {
    issueCard,
    searchByAuthor
 };