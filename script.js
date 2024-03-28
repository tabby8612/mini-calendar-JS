const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const today = new Date();

date.innerHTML = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth() + 1];
year.innerHTML = today.getFullYear();