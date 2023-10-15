let newDate = new Date();

let year = newDate.getFullYear();
let month = newDate.getMonth();
let day = newDate.getDay();
let date = newDate.getDate();


let monthsArray = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let calenderYear = document.querySelector("#year");
let calenderMonth = document.querySelector("#month");
let calenderDay = document.querySelector("#day");
let calenderDate = document.querySelector("#date");

calenderYear.innerText = year;
calenderMonth.innerText = monthsArray[month];
calenderDay.innerText = daysArray[day];
calenderDate.innerText = date;