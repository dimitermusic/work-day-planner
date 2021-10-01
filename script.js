// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// TODO: Use moment.js and jquery to pull todays date and add it to the html container with the .container class.

var today = moment();
var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
$("#currentDay").text(today.format("dddd, MMMM Do"));
mainContainer = $(".container")
var blockEl = $("<div>");
var hourContainer = $("<div>")
var hourEl = $("<p>")
var userTextEl = $("<input>");
var saveBtn = $("<button>");
var saveBtnEl = $(".saveBtn")

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// TODO: Create a time block as input/form element with placeholders and button for each hour of the work day from 9am to 5pm using 24hr time and moment.format to make sort in ascending way then append using jquery. CHECK

function timeBlockHandling() {
    for (let i = 0; i < workHours.length; i++) {
        hourEl.text(workHours[i]);
        saveBtn.text("Save")
        userTextEl.attr("placeholder", "New Event");
        blockEl.addClass(".time-block");
        blockEl.addClass(".row");
        hourContainer.addClass(".hour");
        hourContainer.addClass("col-2");
        userTextEl.addClass(".textarea");
        userTextEl.addClass("col-10");
        saveBtn.addClass(".saveBtn");
        saveBtn.addClass("col-1");
        mainContainer.append(blockEl);
        blockEl.append(hourContainer);
        hourContainer.append(hourEl)
        blockEl.append(userTextEl);
        blockEl.append(saveBtn);
        if (today.format("HH") < workHours[i]) {
            blockEl.addClass(".past")
        }

        else if (today.format("HH") === workHours[i]) {
            blockEl.addClass(".present")
        }
        else if (today.format("HH") > workHours[i]) {
            blockEl.addClass(".future")
        }
        saveBtnEl(this).click(saveButtonHandling);
    }
}

timeBlockHandling();

function saveButtonHandling() {
        var changedEvent = $(".textarea");
        localStorage.setItem("changedEvent", JSON.stringify(changedEvent));
        renderEvent();
        $(".textarea").text("");

    function renderEvent() {
        var previousEvent = JSON.parse(localStorage.getItem("changedEvent"));
        if (previousEvent !== null) {
            userTextEl.text(previousEvent)
        }
    }
}



// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// TODO: Add conditional statement to compare the current time to the calendar blocks and add css classes to style to depict the past, present, and future in relation to right now. CHECK
// WHEN I click into a timeblock
// THEN I can enter an event
// TODO: Store user input into variable
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// TODO: Add event listener to listen for a click of a button using the "this" method or event.target to grab the specific block associated with the button that is clicked to store input into a variable, add user input as content, then use "setitems" method to store to local storage. Then update placeholder with new user input using get items and jquery.
// WHEN I refresh the page
// THEN the saved events persist
// TODO: Add "getitems" function to retrieve items saved to local storage and put them on page on page load in the input field as placeholder.