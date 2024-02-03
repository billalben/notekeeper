"use strict";

import { Tooltip } from "./Tooltip.js";

/**
* Creates a navigation item representing a notebook. This item
displays the notebook's name, allows editing
* and deletion of the notebook, and handles click events to display
its associated notes.
*
* @param {string} id - The unique identifier of the notebook.
* @param {string} name - The name of the notebook.
* @returns {HTMLElement} - An HTML element representing the navigation item for the notebook.
*/

export const NavItem = function (id, name) {
  const /** {HTMLDivElement} */ $navItem = document.createElement("div");
  $navItem.classList.add("nav-item");
  $navItem.setAttribute("data-notebook", id);

  $navItem.innerHTML = `
    <span class="text text-label-large" data-notebook-field>${name}</span>
    <button
      class="icon-btn small"
      data-tooltip="Edit notebook"
      aria-label="Edit notebook"
      data-edit-btn
    >
      <span class="material-symbols-rounded" aria-hidden="true">edit</span>
      <div class="state-layer"></div>
    </button>
    <button
      class="icon-btn small"
      data-tooltip="Delete notebook"
      aria-label="Delete notebook"
      data-delete-btn
    >
      <span class="material-symbols-rounded" aria-hidden="true">delete</span>
      <div class="state-layer"></div>
    </button>
    <div class="state-layer"></div>
  `;

  // Show tooltip on edit and delete button
  const /** {NodeList>} */ $tooltipElements =
      $navItem.querySelectorAll("[data-tooltip]");
  $tooltipElements.forEach(($element) => Tooltip($element));

  return $navItem;
};
