'use strict';
(function() {
  /** @type {!Element} */
  var input = document.createElement("div");
  /** @type {!Element} */
  var foElm = document.getElementsByTagName("body")[0];
  foElm.appendChild(input);
  /** @type {string} */
  input.style.position = "fixed";
  /** @type {string} */
  input.style.bottom = "0px";
  /** @type {string} */
  input.style.right = "0px";
  /** @type {string} */
  input.style.margin = "0px";
  /** @type {string} */
  input.style.paddingTop = "0px";
  /** @type {string} */
  input.style.width = "1366px";
  /** @type {string} */
  input.style.height = "20px";
  /** @type {number} */
  input.style.zIndex = 10000;
  /** @type {number} */
  input.style.opacity = 0.8;
  /** @type {string} */
  input.style.color = "white";
  /** @type {string} */
  input.style.backgroundColor = "black";
  /** @type {string} */
  input.style.border = "0px solid black";
  /** @type {string} */
  input.style.textAlign = "center";
  /** @type {string} */
  input.style.cursor = "pointer";
  /** @type {string} */
  input.id = "me";
  /** @type {string} */
  input.style.display = "circle";
  /** @type {string} */
})();
/** @type {number} */
var xmove = 1;
/** @type {number} */
var startnum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
/** @type {number} */
startnum = startnum / 10;
/** @type {number} */
var ymove = startnum;
/** @type {number} */
var xpos = 1366 / 2;
/** @type {number} */
var ypos = 665 / 2;
/** @type {number} */
var ballspeed = 3;
/** @type {number} */
var p1ypos = 665 / 2;
/** @type {number} */
var p1xpos = 80;
/** @type {number} */
var p1ymove = 0;
/** @type {number} */
var playerspeed = 6;
/** @type {number} */
var p2ymove = 0;
/** @type {number} */
var p2ypos = 665 / 2;
/** @type {number} */
var p2xpos = 1366 - 80;
/** @type {number} */
var ailevel = 400;
(function() {
  /** @type {!Element} */
  var body = document.createElement("div");
  /** @type {!Element} */
  var self = document.getElementsByTagName("body")[0];
  self.appendChild(body);
  /** @type {string} */
  body.style.position = "fixed";
  /** @type {string} */
  body.style.top = "" + ypos + "px";
  /** @type {string} */
  body.style.left = "" + xpos + "px";
  /** @type {string} */
  body.style.margin = "0px";
  /** @type {string} */
  body.style.paddingTop = "10px";
  /** @type {string} */
  body.style.width = "30px";
  /** @type {string} */
  body.style.height = "30px";
  /** @type {number} */
  body.style.zIndex = 10000;
  /** @type {number} */
  body.style.opacity = 1;
  /** @type {string} */
  body.style.color = "white";
  /** @type {string} */
  body.style.backgroundColor = "white";
  /** @type {string} */
  body.style.textAlign = "center";
  /** @type {string} */
  body.style.cursor = "pointer";
  /** @type {string} */
  body.style.border = "2px solid black";
  /** @type {string} */
  body.id = "ball";
  /** @type {string} */
  body.style.display = "block";
  /** @type {string} */
  body.innerText = "";
})();
(function() {
  /** @type {!Element} */
  var p = document.createElement("div");
  /** @type {!Element} */
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(p);
  /** @type {string} */
  p.style.position = "fixed";
  /** @type {string} */
  p.style.top = "" + p1ypos + "px";
  /** @type {string} */
  p.style.left = "" + p1xpos + "px";
  /** @type {string} */
  p.style.margin = "0px";
  /** @type {string} */
  p.style.paddingTop = "10px";
  /** @type {string} */
  p.style.width = "20px";
  /** @type {string} */
  p.style.height = "100px";
  /** @type {number} */
  p.style.zIndex = 10000;
  /** @type {number} */
  p.style.opacity = 1;
  /** @type {string} */
  p.style.color = "white";
  /** @type {string} */
  p.style.backgroundColor = "white";
  /** @type {string} */
  p.style.textAlign = "center";
  /** @type {string} */
  p.style.cursor = "pointer";
  /** @type {string} */
  p.style.border = "2px solid black";
  /** @type {string} */
  p.id = "p1";
  /** @type {string} */
  p.style.display = "block";
  /** @type {string} */
  p.innerText = "";
})();
(function() {
  /** @type {!Element} */
  var view = document.createElement("div");
  /** @type {!Element} */
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(view);
  /** @type {string} */
  view.style.position = "fixed";
  /** @type {string} */
  view.style.top = "" + p2ypos + "px";
  /** @type {string} */
  view.style.left = "" + p2xpos + "px";
  /** @type {string} */
  view.style.margin = "0px";
  /** @type {string} */
  view.style.paddingTop = "10px";
  /** @type {string} */
  view.style.width = "20px";
  /** @type {string} */
  view.style.height = "100px";
  /** @type {number} */
  view.style.zIndex = 10000;
  /** @type {number} */
  view.style.opacity = 1;
  /** @type {string} */
  view.style.color = "white";
  /** @type {string} */
  view.style.backgroundColor = "white";
  /** @type {string} */
  view.style.textAlign = "center";
  /** @type {string} */
  view.style.cursor = "pointer";
  /** @type {string} */
  view.style.border = "2px solid black";
  /** @type {string} */
  view.id = "p2";
  /** @type {string} */
  view.style.display = "block";
  /** @type {string} */
  view.innerText = "";
})();
/**
 * @return {undefined}
 */
function move() {
  if (p2ymove == 1) {
    if (p2ypos + playerspeed <= 565) {
      p2ypos = p2ypos + playerspeed;
      /** @type {string} */
      p2.style.top = "" + p2ypos + "px";
    }
  }
  if (p2ymove == -1) {
    if (p2ypos - playerspeed >= 0) {
      /** @type {number} */
      p2ypos = p2ypos - playerspeed;
      /** @type {string} */
      p2.style.top = "" + p2ypos + "px";
    }
  }
  if (p1ymove == 1) {
    if (p1ypos + playerspeed <= 565) {
      p1ypos = p1ypos + playerspeed;
      /** @type {string} */
      p1.style.top = "" + p1ypos + "px";
    }
  }
  if (p1ymove == -1) {
    if (p1ypos - playerspeed >= 0) {
      /** @type {number} */
      p1ypos = p1ypos - playerspeed;
      /** @type {string} */
      p1.style.top = "" + p1ypos + "px";
    }
  }
  if (xmove == 1) {
    xpos = xpos + ballspeed;
    /** @type {string} */
    ball.style.top = "" + ypos + "px";
    /** @type {string} */
    ball.style.left = "" + xpos + "px";
  }
  if (xmove == -1) {
    /** @type {number} */
    xpos = xpos - ballspeed;
    /** @type {string} */
    ball.style.top = "" + ypos + "px";
    /** @type {string} */
    ball.style.left = "" + xpos + "px";
  }
  if (ymove == -1) {
    /** @type {number} */
    ypos = ypos - ballspeed;
    /** @type {string} */
    ball.style.top = "" + ypos + "px";
    /** @type {string} */
    ball.style.left = "" + xpos + "px";
  }
  if (ymove == 1) {
    ypos = ypos + ballspeed;
    /** @type {string} */
    ball.style.top = "" + ypos + "px";
    /** @type {string} */
    ball.style.left = "" + xpos + "px";
  }
  if (ymove > -1 && ymove < 0) {
    /** @type {number} */
    ypos = ypos - ymove * 3;
    /** @type {string} */
    ball.style.top = "" + ypos + "px";
    /** @type {string} */
    ball.style.left = "" + xpos + "px";
  }
  if (ymove < 1 && ymove > 0) {
    /** @type {number} */
    ypos = ypos - ymove * 3;
    /** @type {string} */
    ball.style.top = "" + ypos + "px";
    /** @type {string} */
    ball.style.left = "" + xpos + "px";
  }
}
/**
 * @return {undefined}
 */
function bounce() {
  if (xpos >= 1336) {
    /** @type {number} */
    xpos = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    clearInterval(bounce);
    ball.parentNode.removeChild(ball);
    p1.parentNode.removeChild(p1);
    p2.parentNode.removeChild(p2);
    me.parentNode.removeChild(me);
    clearInterval(move);
    clearInterval(movep2);
    clearInterval(colliding);
    alert("game over. you win");
  }
  if (xpos <= 0) {
    /** @type {number} */
    xpos = 1E89;
    clearInterval(bounce);
    ball.parentNode.removeChild(ball);
    me.parentNode.removeChild(me);
    p1.parentNode.removeChild(p1);
    p2.parentNode.removeChild(p2);
    clearInterval(move);
    clearInterval(movep2);
    clearInterval(colliding);
    alert("game over. you lose");
  }
  if (ypos >= 635) {
    /** @type {number} */
    ymove = ymove * -1;
  }
  if (ypos <= 0) {
    /** @type {number} */
    ymove = ymove * -1;
  }
}
/**
 * @return {undefined}
 */
function colliding() {
  if (xpos < p1xpos + 20 && xpos + 30 > p1xpos && ypos < p1ypos + 100 && ypos + 30 > p1ypos) {
    /** @type {number} */
    xmove = xmove * -1;
    ballspeed = ballspeed + .5;
  }
  if (xpos < p2xpos + 20 && xpos + 30 > p2xpos && ypos < p2ypos + 100 && ypos + 30 > p2ypos) {
    /** @type {number} */
    xmove = xmove * -1;
    ballspeed = ballspeed + .5;
  }
}
window.addEventListener("keydown", function(event) {
  if (event.key == "ArrowUp") {
    /** @type {number} */
    p1ymove = -1;
  }
});
window.addEventListener("keyup", function(event) {
  if (event.key == "ArrowUp") {
    /** @type {number} */
    p1ymove = 0;
  }
});
window.addEventListener("keydown", function(event) {
  if (event.key == "ArrowDown") {
    /** @type {number} */
    p1ymove = 1;
  }
});
window.addEventListener("keyup", function(event) {
  if (event.key == "ArrowDown") {
    /** @type {number} */
    p1ymove = 0;
  }
});
/**
 * @return {undefined}
 */
function movep2() {
  if (xpos > 683) {
    if (ypos < p2ypos) {
      if (p2ypos != ypos) {
        /** @type {number} */
        p2ymove = -1;
      }
    }
    if (ypos > p2ypos) {
      if (p2ypos != ypos) {
        /** @type {number} */
        p2ymove = 1;
      }
    }
  }
  if (xpos <= 683) {
    /** @type {number} */
    p2ymove = 0;
  }
}
setInterval(colliding, 15);
setInterval(move, 15);
setInterval(bounce, 15);
setInterval(movep2, 5);