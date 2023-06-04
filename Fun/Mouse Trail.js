'use strict';
/** @type {number} */
var opt = 0.1;
/** @type {string} */
var pen = "block";
/** @type {number} */
var size = 10;
/** @type {string} */
var clr = "blue";
/** @type {number} */
var rate = 0.005;
/** @type {number} */
var userrate = 5;
alert("press c to change color and r to change rate.");
/**
 * @param {!Event} event
 * @return {undefined}
 */
function mousemove(event) {
  var x = event.clientX;
  var y = event.clientY;
  /** @type {number} */
  x = x - 8;
  /** @type {number} */
  y = y - 8;
  (function() {
    /**
     * @return {undefined}
     */
    function setTrailViewOffset() {
      /** @type {number} */
      elem.style.opacity = elem.style.opacity - rate;
    }
    /** @type {!Element} */
    var elem = document.createElement("div");
    /** @type {!Element} */
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(elem);
    /** @type {string} */
    elem.style.position = "fixed";
    /** @type {string} */
    elem.style.top = "" + y + "px";
    /** @type {string} */
    elem.style.left = "" + x + "px";
    /** @type {string} */
    elem.style.margin = "10px";
    /** @type {string} */
    elem.style.paddingTop = "10px";
    /** @type {string} */
    elem.style.width = "" + size + "px";
    /** @type {string} */
    elem.style.height = "" + size + "px";
    /** @type {number} */
    elem.style.zIndex = 10000;
    elem.style.opacity = opt;
    /** @type {string} */
    elem.style.color = "" + clr + "";
    /** @type {string} */
    elem.style.backgroundColor = "" + clr + "";
    /** @type {string} */
    elem.style.border = "0px solid white";
    /** @type {string} */
    elem.style.textAlign = "center";
    /** @type {string} */
    elem.id = "paint";
    /** @type {string} */
    elem.style.display = "" + pen + "";
    /** @type {string} */
    elem.innerText = "";
    setInterval(setTrailViewOffset, 15);
  })();
}
window.addEventListener("keydown", function(data) {
  if (data.key == "r") {
    /** @type {(null|string)} */
    userrate = prompt("what do you want the rate to be? the lower the number, the faster the trail disappears. recommended: 5");
    /** @type {number} */
    rate = userrate / 1000;
  }
  if (data.key == "c") {
    /** @type {(null|string)} */
    clr = prompt("what do you want the color to be? must be very broad. ex: blue");
  }
});
window.addEventListener("mousemove", mousemove);