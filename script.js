function playSound(id) {
  var sound = document.getElementById("sound-" + id);
  if (sound) {
<<<<<<< HEAD
    try {
      sound.currentTime = 0;
    } catch (e) {}
=======
    try { sound.currentTime = 0; } catch (e) {}
>>>>>>> f27c5c3 (added clock)
    sound.play();
  }
}

<<<<<<< HEAD
=======
function pad(num, isHours) {
  return (num < 10 ? (isHours ? ' ' : '0') : '') + num;
}

function updateClock() {
    var time = document.getElementById("clock-time")
    var now = new Date();
    var hours = now.getHours();
    var minutes = pad(now.getMinutes(), false);
    hours = hours % 12;
    if (hours === 0) hours = 12;

    time.innerText = pad(hours, true) + ":" + minutes;
}

>>>>>>> f27c5c3 (added clock)
function showPanel(id) {
  var panels = document.getElementsByClassName("panel");
  var buttons = document.getElementsByTagName("button");

<<<<<<< HEAD
  for (var i = 0; i < panels.length; i++) {
    panels[i].className = "panel";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
  }
=======
  for (var i = 0; i < panels.length; i++) panels[i].className = "panel";
  for (var i = 0; i < buttons.length; i++) buttons[i].className = "";
>>>>>>> f27c5c3 (added clock)

  document.getElementById(id).className = "panel active";
  document.getElementById("button-" + id).className = "clicked";

<<<<<<< HEAD
  var file =
    id === "map"
      ? "geiger_counter"
      : id === "radio"
      ? "world_on_fire"
      : id === "inventory"
      ? "vats_lock_2"
      : id === "data"
      ? "vats_lock_3"
      : "vats_lock";
  playSound(file);
=======
  var file = id === "map" ? "geiger_counter" :
             id === "radio" ? "world_on_fire" :
             id === "inventory" ? "vats_lock_2" :
             id === "data" ? "vats_lock_3" :
             "vats_lock";

  playSound(file);

  if (id === "clock") setTimeout(updateClock, 1000);
>>>>>>> f27c5c3 (added clock)
}

function flickerWrapper(wrapperId) {
  var wrapper = document.getElementById(wrapperId);
<<<<<<< HEAD
  setInterval(function () {
=======
  setInterval(function() {
>>>>>>> f27c5c3 (added clock)
    var opacity = 0.5 + Math.random() * 0.5;
    wrapper.style.opacity = opacity;
  }, 250);
}

<<<<<<< HEAD
document.addEventListener("touchmove", function (e) {
  e.preventDefault();
});

window.onload = function () {
  flickerWrapper("body");
};
=======
document.addEventListener("touchmove", function(e) {
  e.preventDefault();
});

window.addEventListener("load", function() {
  flickerWrapper("body");
  setInterval(updateClock, 60000);
});
>>>>>>> f27c5c3 (added clock)
