
/* ---------- this is the javascript for the clock. start by setting out the date that you wish for it to ountdown from ------------- */
var countDownDate = new Date("June 15, 2021, 15:20:00").getTime();
/* ---------------- this tells it to countdown while updating every second ------------------------- */
var x = setInterval(function() {
 /* ------------------- this tells it to take the current date and time ----------- */   
    var now = new Date().getTime();
/* -------------------- this is detailing how it should calculate the time --------- */
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    /* ------------------- This is detailing how it should display it --------------- */
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "Expired";
    }
}, 1000);