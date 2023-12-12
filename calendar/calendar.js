function createEvent(title, month, day) {
 var event = {
    title: title,
    month: month,
    day: day
    }; if (day < 1 || day > 31) {
        return `Error: ${day} is not a valid day`
  } 
  return event
}

function createCalendar(name, events) {
    var calendar = {
        owner: name,
        events: events
    }; return calendar
}

function reportMonthlyEvents(calendar, month) {
    var monthlyEvents = []
 for (var i = 0; i < calendar.events.length; i++) {
     if (calendar.events[i].month == month) {
        monthlyEvents.push(calendar.events[i])
    }
 } return monthlyEvents
}

// create a function
// pass the arguments calendar and month
// return the events that happen in a month

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
  };