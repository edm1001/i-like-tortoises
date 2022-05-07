//Use moment js to find the current time & dates
const hourBlocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//find the current date
const currentDate = moment().format('MMMM Do YYYY, h:mm a');
//find the present time
const currentTime =  moment().hour()

//present the time on the page
const displayTime = $('#currentDay')
displayTime.text(currentDate);

//timeblock variable to check if time is past present or future
const workTask = $(".hour");

//time block stamp must have time
const checkCurrentTime = function () {
    for (var i = 0; i < workTask.length; i++) {
        var hour = parseInt($(workTask[i]).attr("id"));

        //check if time past the task &turns gray
        if (hour < currentTime) {
            $(workTask[i]).addClass("past");

           //check if time is present & turns red
        } else if (hour == currentTime) {
            $(workTask[i]).addClass("present");

            //check if time hasn't passed & turns green
        } else {
            $(workTask[i]).addClass("future");
        }
    }
};


//create time block stamps (9AM - 5PM) //save the events into local storage


//create a local storage for every timeblock
var saveTimeBlock = function(event) {
    event.preventDefault();
    localStorage.setItem($(this).siblings("section").attr("id"), $(this).siblings("textarea").val());
  //persist the page with saved tasks
     event.preventDefault(event);
    $(this).siblings("textarea").attr("id").val();
    localStorage.setItem(saveTimeBlock, keepSavedTasks)

};


    // var keepSavedTasks =  function(e){
// e.preventDefault();
// localStorage.getItem($(this).append(saveTimeBlock));
// };



//var loadTimeblock = function(e) {
  //  e.preventDefault(;
 //       localStorage.)
//};



//call the functions


checkCurrentTime();

 $('.saveBtn').on('click', saveTimeBlock);



