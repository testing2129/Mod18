var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function playAudio(path) {
  new Audio(path).play();
}

function makeSound(key) {
  switch (key) {
    case "a":
      playAudio("sounds/tom-1.mp3");
      break;
    case "s":
      playAudio("sounds/tom-2.mp3");
      break;
    case "d":
      playAudio("sounds/tom-3.mp3");
      break;
    case "f":
      playAudio("sounds/tom-4.mp3");
      break;
    case "g":
      playAudio("sounds/snare.mp3");
      break;
    case "h":
      playAudio("sounds/crash.mp3");
      break;
    case "j":
      playAudio("sounds/kick.mp3");
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var key = "." + currentKey;
  var buttonPressd = document.querySelector(key);
  buttonPressd.classList.add("pressed");
  setTimeout(function () {
    buttonPressd.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
