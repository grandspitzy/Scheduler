$(document).ready(function() { 
//not sure if i need document ready stuff check later

//time 
var date = moment().format("LLLL");
$("#currentDay").text(date);
var timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentTime = moment().format("HH");

//save my input
$(".saveBtn").on("click", function()
{
    var hour = $(this).attr("id");
    var input = $(this).siblings(".user-event-input").val();
    localStorage.setItem(hour, input);

});

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


});

