//Display the current day at the top of the calender when a user opens the planner.

document.getElementById('currentDay').innerHTML = dayjs().format('dddd, MMMM D');

//Color-code each timeblock based on past, present, and future when the timeblock is viewed.
//Depending on the hour the block change class
//if id is major than HH then change class to .future
//if id is equal to HH then change class to .present, remove .future
//if id is minor than HH then change class to .past, remove .present

$('.time-block').each(function() {
    var timeBlock = parseInt($(this).attr('id'));
    var currentTime = dayjs().format('HH');
    if (timeBlock > currentTime) {
        $(this).addClass('future')
        $(this).removeClass('present')
        $(this).removeClass('past')
    }
    if (timeBlock === currentTime) {
        $(this).addClass('present')
        $(this).removeClass('future')
        $(this).removeClass('past')
    }

    if (timeBlock < currentTime) {
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future')
    }

})


    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
      });
    
    //retrieves items from local storage and sets them in proper places
    $("#09 .description").val(localStorage.getItem("09"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
