"use strict";

/**
 * Attaches an event listener to a collection of DOM elements
 * @param {NodeList} $elements - An array of DOM elements to attach the event listener to.
 * @param {string} eventType - The type of event to listen for (e.g., 'click', 'mouseover')
 * @param {Function} callback - The function to be executed when the event occur
 */

const addEventOnElements = function ($elements, eventType, callback) {
  for (const item of $elements) {
    item.addEventListener(eventType, callback);
  }
};

export { addEventOnElements };
