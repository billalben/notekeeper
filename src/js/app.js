"use strict";

// Module import
import { addEventOnElements, getGreetingMsg } from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";

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

// Initialize tooltip behavior for all DOM elements with 'data-tooltip' attribute
const /** {NodeList} */ $tooltipElements =
    document.querySelectorAll("[data-tooltip]");
$tooltipElements.forEach(($elem) => Tooltip($elem));

// Show greeting message on homepage
const /** {HTMLElement} */ $greetElement =
    document.querySelector("[data-greeting]");
const currentHour = new Date().getHours();

$greetElement.textContent = getGreetingMsg(currentHour);

// Show current date on homepage
const /** {HTMLElement} */ $currentDateElement = document.querySelector(
    "[data-current-date]"
  );

$currentDateElement.textContent = new Date().toDateString().replace(" ", ", ");
