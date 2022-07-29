let targetDate = new Date(data != null && data.target != null ? data.target : null) ;

let countdown = targetDate.getTime();
let element = document.getElementById("countdown");
let distance = countdown - new Date().getTime();

if (distance < 0) {
  element.innerHTML = "Some date in the near future!";
} else {
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  element.innerHTML = `${targetDate}<br/>${days} days, ${hours} hours and ${minutes} minutes`;
}