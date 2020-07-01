const clock = () => {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  hours.innerHTML = new Date().getHours();
  minutes.innerHTML = new Date().getMinutes();
  seconds.innerHTML = new Date().getSeconds();

  if(hours.innerHTML.toString().length === 1) {
    hours.innerHMTL = `0 ${hours.innerHMTL}`;
  }
  if(minutes.innerHTML.toString().length === 1) {
    minutes.innerHMTL = `0 ${minutes.innerHMTL}`;
  }
  if(seconds.innerHTML.toString().length === 1) {
    seconds.innerHMTL = `0 ${miseconds.innerHMTL}`;
  }
}

const interval = setInterval(clock, 1000);