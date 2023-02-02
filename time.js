function updateTime() {
  let timeContainer = document.getElementById("time");
  let dateContainer = document.getElementById("date");
  let now = new Date();

  let hours = now.getHours();
  let minutes = correctDigit(now.getMinutes());
  let seconds = correctDigit(now.getSeconds());
  let apm = "";

  if (hours > 12) {
    hours = hours - 12;
    apm = "PM";
  } else if (hours === 0) {
    hours = 12;
    apm = "AM";
  } else {
    apm = "AM";
  }

  timeContainer.innerHTML = hours + ":" + minutes + ":" + seconds + " " + apm;
  dateContainer.innerHTML = now.toDateString() + " " + now.toLocaleTimeString();

  setTimeout(updateTime, 1000);
}
updateTime();

window.onload = updateTime;

function correctDigit(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
