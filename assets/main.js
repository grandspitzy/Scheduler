$(".saveBtn").on("click", function()
{
    var hour = $(this).attr("id");
    var input = $(this).siblings(".user-event-input").val();
    localStorage.setItem(hour, input);

});
