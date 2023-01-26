//get header element

// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"

// header.innerHTML = currentDate;

function updateTime() {
  let timeContainer = document.getElementById("time");
  let dateContainer = document.getElementById("date");
  let now = new Date();

  const monthsInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = correctDigit(now.getDay());
  let month = correctDigit(now.getMonth());

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
  dateContainer.innerHTML = now;
  //   dateContainer.innerHTML =
  //     daysInWeek[now.getDay()] +
  //     ", " +
  //     monthsInYear[now.getMonth()] +
  //     " " +
  //     now.getTime();
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
