// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the HTML.
$(document).ready(() => {
 
});

let saveBtn = $(".saveBtn")

//Display current time
$("#currentDay").text(dayjs().format("dddd MMMM DD YYYY"));

// function displayTimeTop() {
//     $("#currentDay").text(moment().format("dddd MMMM Do YYYY hh:mm:ss A"));


//TODO: wrapping function to ensure code doesn't run until browser renders
// $(function () {

//     //variables
//     let saveBtn = $(".saveBtn");

    //functions
    function colorBlock() {
        let timeNow = dayjs().hour();
        // console.log(timeNow);

        $(".time-schedule").each(function () {
            let timeSchedule = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (timeSchedule < scheduleHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeSchedule === scheduleHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //TODO: click event listener using 'this'
    saveBtn.on("click", function () {
        let time = $(this).siblings(".hour").text();
        let plan = $(this).siblings(".plan").val();
        let toDoList = $('#toDo');
        localStorage.setItem(time, plan);
        $('#toDoHeader').show();
        toDoList.append('<li>' + time + " " + plan + '</li>');
    });

    function usePlanner() {
        //TODO: setting value of local storage
        $(".hour").each(function () {
            let currHour = $(this).text();
            let currPlan = localStorage.getItem(currHour);

            if (currPlan !== null) {
                $(this).siblings(".plan").val(currPlan);
            }
        });
    }

    colorBlock();
    usePlanner();



