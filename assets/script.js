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




// $('#eleven').addClass('future');




//Save the event in local storage when the save button is clicked in that timeblock.



//Persist events between refreshes of a page


