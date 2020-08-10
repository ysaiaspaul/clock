
var today, hours, minutes, ampm, actualTime, t, input;
var alarmSound = new Audio();

alarmSound.src = 'alm.mp3';
function startTime() {
    var today = new Date();
    //var alarmTime = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    var hours = (today.getHours());
    //var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = (today.getHours()) < 12 ? 'AM' : 'PM';
    var differenceInMs = today.getTime() - (new Date()).getTime();
    var button = document.querySelector('.btnSet');

    if(differenceInMs < 0) {
        alert('Specified time already passed!')
    }
    //setTimeout(initAlarm,differenceInMs);

    // Changingmilitary hours for normal hours
    if (hours == 0){
        h = 12;
    }
    if (hours > 12){
        hours = hours - 12;
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;


    var actualTime = document.getElementById('txtTime').innerHTML =
        hours + ":" + minutes + ampm;

    var t = setTimeout(startTime, 500);
    button.setAttribute('onclick', 'cancelAlarm(this);');

}
function setAlarm (button) {
    var ms = document.querySelector('.inpTime').valueAsNumber;

    if(isNaN(ms)) {
        alert('Invalid time');
        return;
    }

    button.innerText = 'Cancel Alarm';
    button.setAttribute('onclick', 'cancelAlarm(this);');

}

function cancelAlarm(button) {

    button.setAttribute('onclick', 'setAlarm(this);');
    button.innerText = 'Set alarm';
}

function initAlarm() {
    alarmSound.play();
    document.querySelector('.alarmOptions').style.display = 'block';
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.querySelector('.alarmOptions').style.display = 'none';
    cancelAlarm(document.querySelector('.btnSet'));
}

function snooze() {
    stopAlarm();
    setTimeout(initAlarm, 36000);
}
