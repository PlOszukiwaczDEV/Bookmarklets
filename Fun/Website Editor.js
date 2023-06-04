'use strict';
(function() {
  if (document.body.contentEditable === "false" || document.body.contentEditable === "inherit") {
    /** @type {string} */
    document.body.contentEditable = "true";
    /** @type {string} */
    document.designMode = "on";
  } else {
    /** @type {string} */
    document.body.contentEditable = "false";
    /** @type {string} */
    document.designMode = "off";
  }
})();