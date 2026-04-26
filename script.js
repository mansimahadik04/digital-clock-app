// CLOCK + DATE + BACKGROUND
function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;

    // DATE
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    document.getElementById("date").textContent =
        `${day}, ${date} ${month} ${year}`;

    // BACKGROUND CHANGE
    if (hours >= 6 && hours < 12) {
        document.body.style.backgroundColor = "#FFFAE3";
        document.body.style.color = "black";
    } 
    else if (hours >= 12 && hours < 18) {
        document.body.style.backgroundColor = "#FFE0B2";
        document.body.style.color = "black";
    } 
    else {
        document.body.style.backgroundColor = "#121821";
        document.body.style.color = "white";
    }
}

// Run clock
setInterval(updateTime, 1000);
updateTime();


// STOPWATCH
let swInterval;
let swSeconds = 0;

function startStopwatch() {
    if (swInterval) return; // prevent multiple intervals

    swInterval = setInterval(() => {
        swSeconds++;

        let hrs = Math.floor(swSeconds / 3600);
        let mins = Math.floor((swSeconds % 3600) / 60);
        let secs = swSeconds % 60;

        document.getElementById("stopwatch").textContent =
            `${hrs.toString().padStart(2, '0')}:` +
            `${mins.toString().padStart(2, '0')}:` +
            `${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(swInterval);
    swInterval = null;
}

function resetStopwatch() {
    clearInterval(swInterval);
    swInterval = null;
    swSeconds = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
}


// COUNTDOWN TIMER
let timerInterval;

function startTimer() {
    let minutes = document.getElementById("minutesInput").value;

    if (minutes <= 0) {
        alert("Enter valid minutes!");
        return;
    }

    let totalSeconds = minutes * 60;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        let mins = Math.floor(totalSeconds / 60);
        let secs = totalSeconds % 60;

        document.getElementById("timer").textContent =
            `${mins.toString().padStart(2, '0')}:` +
            `${secs.toString().padStart(2, '0')}`;

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}