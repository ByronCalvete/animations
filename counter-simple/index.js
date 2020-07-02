let counter = 3;
const increment = document.getElementById("addCount");
const decrement = document.getElementById("removeCount");
let count = document.getElementById("count");

const add = () => {
  count.innerHTML++;
}

const remove = () => {
  count.innerHTML--;
}

increment.addEventListener("click", add);
decrement.addEventListener("click", remove);
