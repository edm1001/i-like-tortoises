//Use moment js to find the current time & dates

//find the current date
const currentDate = moment().format('MMMM Do YYYY, h:mm a');
//find the present time
const currentTime =  moment().hour()

//present the time on the page
const displayTime = $('#currentDay')
displayTime.text(currentDate);

//timeblock variable to check if time is past present or future
const workTasks = $(".hour");

//time block stamp must have time
const checkCurrentTime = function () {
    for (var i = 0; i < workTasks.length; i++) {
        var hour = parseInt($(workTasks[i]).attr("id"));

        //check if time past the task &turns gray
        if (hour < currentTime) {
            $(workTasks[i]).addClass("past");

           //check if time is present & turns red
        } else if (hour == currentTime) {
            $(workTasks[i]).addClass("present");

            //check if time hasn't passed & turns green
        } else {
            $(workTasks[i]).addClass("future");
        }
    }
};

//create time block stamps (9AM - 5PM) //save the events into local storage
const tasks = [];
const hourBlocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

//create a local storage for every timeblock
var saveTimeBlock = function(event) {
    event.preventDefault();
    localStorage.setItem($(this).siblings("section").attr("id"), $(this).siblings("textarea").val());
};
console.log(saveTimeBlock())

const loadSchedule = function () {
    var loadTimeBlock = localStorage.getItem("9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM");

}

$("section").each(function(index) {
    $(this).text(hourBlocks[index]);
});


//keep saved events even if user reloads the page




//call the functions
checkCurrentTime();
$('.saveBtn').on('click', saveTimeBlock);
