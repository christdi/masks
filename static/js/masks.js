let targetDate = new Date(typeof data === 'undefined' || typeof data.target === 'undefined' ? null : data.target);

let countdown = targetDate.getTime();
let date_element = document.getElementById("date");
let countdown_element = document.getElementById("countdown");
let distance = countdown - new Date().getTime();

if (distance < 0) {
  date_element.innerHTML = "Some date in the near future";
} else {
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  let prettyDate = new Intl.DateTimeFormat('en', { dateStyle: "full", timeStyle: "full" }).format(targetDate);

  date_element.innerHTML = prettyDate;
  countdown_element.innerHTML = `${days} days, ${hours} hours and ${minutes} minutes`;
}