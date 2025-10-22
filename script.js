var flickerInterval = null;

function playSound(id) {
  var sound = document.getElementById("sound-" + id);
  if (sound) {
    try { sound.currentTime = 0; } catch (e) {}
    sound.play();
  }
}

function pad(num, isHours) {
  return (num < 10 ? (isHours ? ' ' : '0') : '') + num;
}

function updateClock() {
  var time = document.getElementById("clock-time");
  var wrapper = document.getElementById("body");
  var now = new Date();
  var hours = now.getHours();
  var minutes = pad(now.getMinutes(), false);
  var displayHours = hours % 12;
  if (displayHours === 0) displayHours = 12;

  time.innerText = pad(displayHours, true) + ":" + minutes;

  var targetOpacity = (hours >= 19 || hours < 6) ? "0.6" : "1.0";
  if (wrapper.style.opacity !== targetOpacity) {
    wrapper.style.opacity = targetOpacity;
  }
}


function flickerWrapper(isClock) {
  var wrapper = document.getElementById("body");

  if (isClock) {
    if (flickerInterval) {
      clearInterval(flickerInterval);
      flickerInterval = null;
    }
    return;
  }

  if (!flickerInterval) {
    flickerInterval = setInterval(function() {
      var opacity = 0.5 + Math.random() * 0.5;
      wrapper.style.opacity = opacity;
    }, 250);
  }
}

function showPanel(id) {
  var panels = document.getElementsByClassName("panel");
  var buttons = document.getElementsByTagName("button");

  for (var i = 0; i < panels.length; i++) panels[i].className = "panel";
  for (var i = 0; i < buttons.length; i++) buttons[i].className = "";

  document.getElementById(id).className = "panel active";
  document.getElementById("button-" + id).className = "clicked";

  var file = id === "map" ? "geiger_counter" :
             id === "radio" ? "world_on_fire" :
             id === "inventory" ? "vats_lock_2" :
             id === "data" ? "vats_lock_3" :
             "vats_lock";

  playSound(file);

  if (id === "clock") setTimeout(updateClock, 1000);

  flickerWrapper(id === "clock")
}

document.addEventListener("touchmove", function(e) {
  e.preventDefault();
});

window.addEventListener("load", function() {
  flickerWrapper(false);
  setInterval(updateClock, 30000);
});
