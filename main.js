function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}

function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

if (!getCookie("sitevisitor")) {
  var visitor = {};
  var now = new Date(Date().toLocaleString("de-DE", { timeZone: "Europe/Sofia" }));
  visitor.referer = document.referrer;
  visitor.request = location.pathname.substring(1);
  visitor.time =
    now.getFullYear() +
    "-" +
    ("0" + (now.getMonth() + 1)).slice(-2) +
    "-" +
    now.getDate() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    ("0" + now.getSeconds()).slice(-2);
  setCookie("sitevisitor", btoa(JSON.stringify(visitor)), 365);
}

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  var previews = document.querySelectorAll(".preview-test");
  for (var i = 0; i < previews.length; i++) {
    previews[i].addEventListener("click", function (e) {
      e.preventDefault();
      var active = document.querySelector(".preview-devices-active");
      if (active) {
        active.classList.remove("preview-devices-active");
      }
      this.classList.add("preview-devices-active");
      var frame = document.querySelector("#preview-frame");
      if (frame) {
        frame.className = this.id.replace("-test", "");
      }
    });
  }
});