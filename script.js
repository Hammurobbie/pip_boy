function playSound(id) {
  var sound = document.getElementById("sound-" + id);
  if (sound) {
    try {
      sound.currentTime = 0;
    } catch (e) {}
    sound.play();
  }
}

function showPanel(id) {
  var panels = document.getElementsByClassName("panel");
  var buttons = document.getElementsByTagName("button");

  for (var i = 0; i < panels.length; i++) {
    panels[i].className = "panel";
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
  }

  document.getElementById(id).className = "panel active";
  document.getElementById("button-" + id).className = "clicked";

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
}

function flickerWrapper(wrapperId) {
  var wrapper = document.getElementById(wrapperId);
  setInterval(function () {
    var opacity = 0.5 + Math.random() * 0.5;
    wrapper.style.opacity = opacity;
  }, 250);
}

document.addEventListener("touchmove", function (e) {
  e.preventDefault();
});

window.onload = function () {
  flickerWrapper("body");
};
