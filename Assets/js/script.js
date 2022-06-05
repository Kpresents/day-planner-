// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//step 1: add current date to the header
var currentEl= document.querySelector('#currentDay');
var currentHour= moment().hour()
console.log (currentHour)

currentEl.textContent= moment().format ("dddd, MMMM Do")
var 
 

//step 2: current time determines the past, present and future color coordination
//past- anything before the current hour is < timeblock thats past (grey)

//present- current time (red)= to the timeblock 
//future- upcoming (green) current hour is >the  timeblock then its the future 