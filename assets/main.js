$(document).ready(function() { 
//not sure if i need document ready stuff check later

//time 
var date = moment().format("LLLL");
$("#currentDay").text(date);
var timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");

// colors
$(".input-slot").each(function() {
    var block = parseInt($(this).prev().attr("data-hour"));
        if (block == currentTime){
        $(this).addClass("present");
    }
        else if (block < currentTime){
        $(this).addClass("past");
    }
        else{
        $(this).addClass("future");
    }
 });

//save my input
$(".saveBtn").on("click", function()
{
    var hours = $(this).attr("id");
    var input = $(this).siblings(".user-event-input").val();
    localStorage.setItem(hours, input);

});
//refresh still there

 function tasks () {
    for (var i = 0; i < timeArray.length; i++) {
        $(`#data-${timeArray[i]} .input-slot`).val(localStorage.getItem(timeArray[i]));
    }
}

tasks();

});

