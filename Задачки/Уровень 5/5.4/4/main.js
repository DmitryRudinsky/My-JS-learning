"Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день."

let date = new Date();
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

year.innerText = date.getFullYear();
month.innerText = date.getMonth() + 1;
day.innerText = date.getDate();