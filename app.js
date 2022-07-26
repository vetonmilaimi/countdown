const countFn = () => {
  setInterval(() => {
    const input = document.getElementById("date").value;
    const date = new Date(input).getTime()
    const currentDate = new Date().getTime();

    const timeLeft = date - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (input != "" && date > currentDate) {
      document.getElementById("wrong").innerHTML = ""
      document.getElementById("days").innerHTML = days
      document.getElementById("hours").innerHTML = hours
      document.getElementById("minutes").innerHTML = minutes
      document.getElementById("seconds").innerHTML = seconds
    } else if (currentDate > date) {
      document.getElementById("wrong").innerHTML = "This time gone"
      document.getElementById("days").innerHTML = 0
      document.getElementById("hours").innerHTML = 0
      document.getElementById("minutes").innerHTML = 0
      document.getElementById("seconds").innerHTML = 0

    } else {
      document.getElementById("wrong").innerHTML = "Please write Date or check Date Format"
      document.getElementById("days").innerHTML = 0
      document.getElementById("hours").innerHTML = 0
      document.getElementById("minutes").innerHTML = 0
      document.getElementById("seconds").innerHTML = 0
    }
  }, 1000)
}