const cards = document.querySelectorAll('.card');
let isFlip = false;
let lock = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flip));

function flip() {
  if(lock) return;
  if(this === firstCard) return;
  this.classList.add('flip');
  if(!isFlip) {
    isFlip = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  check();
}

function check() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? success() : fail();
}


function success() {
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  reset();
}

function fail() {
  lock = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  }, 1000);
} 

function reset() {
  [isFlip, lock] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function suffle () {
  cards.forEach(card => {
    let position = Math.floor(Math.random() * 16);
    card.style.order = position;
  })
})();
