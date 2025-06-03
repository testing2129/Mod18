var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function playAudio(path) {
  new Audio(path).play();
}

function makeSound(key) {
    switch (key) {
      case "w":
        playAudio("sounds/tom-1.mp3");
        break;
      case "a":
        playAudio("sounds/tom-2.mp3");
        break;
      case "s":
        playAudio("sounds/tom-3.mp3");
        break;
      case "d":
        playAudio("sounds/tom-4.mp3");
        break;
      case "j":
        playAudio("sounds/snare.mp3");
        break;
      case "k":
        playAudio("sounds/crash.mp3");
        break;
      case "l":
        playAudio("sounds/kick.mp3");
        break;

      default:
        console.log(key);
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
}
)
