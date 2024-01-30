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

/**
 * Generates a greeting message based on the current hour of the day
 * @param {number} currentHour - The current hour (0 - 23) to determine the appropriate greeting
 * @returns {string} A greeting message with a salutation corresponding to the time of day
 */

const getGreetingMsg = (currentHour) => {
  const /** string */ greeting =
      currentHour < 5
        ? "Night"
        : currentHour < 12
        ? "Morning"
        : currentHour < 15
        ? "Noon"
        : currentHour < 17
        ? "Afternoon"
        : currentHour < 20
        ? "Evening"
        : "Night";

  return `Good ${greeting}`;
};

export { addEventOnElements, getGreetingMsg };
