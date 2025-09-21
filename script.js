function playSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
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
  playSound();
}

function flickerWrapper(wrapperId) {
  var wrapper = document.getElementById(wrapperId);
  setInterval(function () {
    var opacity = 0.6 + Math.random() * 0.4;
    wrapper.style.opacity = opacity;
  }, 250);
}

document.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

window.onload = function () {
  flickerWrapper("body");
};
