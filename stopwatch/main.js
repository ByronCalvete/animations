const timer = document.querySelector('.timer');
const toggleBtn = document.querySelector('.toggle');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapContainer = document.querySelector('.lapContainer')

const watch = new Stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.toggle("on");
    watch.start();
}

function stop() {
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.toggle("on")
    watch.stop();
}

function stopWhenOn() {
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.toggle("on")
    watch.stop();
    watch.reset();
}

toggleBtn.addEventListener('click', function () {
    watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function () {
    watch.isOn ? stopWhenOn() : watch.reset();
    // stop();
});

lapBtn.addEventListener('click', function () {
    watch.isOn ? watch.lapOn() : watch.lapOff();
})