"use strict";

// Module import
import { addEventOnElements } from "./utils.js";

const /** {HTMLElement} */ $sidebar = document.querySelector("[data-sidebar]");
const /** {NodeList} */ $sidebarTogglers = document.querySelectorAll(
    "[data-sidebar-toggler]"
  );
const /** {HTMLElement} */ $overlay = document.querySelector(
    "[data-sidebar-overlay]"
  );

addEventOnElements($sidebarTogglers, "click", function () {
  $sidebar.classList.toggle("active");
  $overlay.classList.toggle("active");
});
