const mouth = document.getElementById("mouth");
const leftEye = document.getElementById("eye1");
const rightEye = document.getElementById("eye2");
const tongue = document.getElementById("tongue");
const switchBtn = document.getElementById("switchBtn");
const elements = [mouth, leftEye, rightEye, tongue, switchBtn];

const smile = () => {
  elements.forEach(element => element.classList.toggle("happy"));
}

switchBtn.addEventListener("click", smile);