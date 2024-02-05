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

let /** {HTMLElement | undefined} */ $lastActiveItem;

/**
 * Activates a navigation item by adding the 'active' class and 
deactivates the previously active item.
 */

const activeNotebook = function () {
  $lastActiveItem?.classList.remove("active");
  this.classList.add("active");
  $lastActiveItem = this;
};

/**
*
* Makes a DOM element editable by setting the 'contenteditable'
attribute to true and focusing on it.
* @param {HTMLElement} $element - The DOM element to make editable.
*/

const makeElemEditable = function ($element) {
  $element.setAttribute("contenteditable", true);
  $element.focus();
};

/**
 * Generates a unique ID based on the current timestamp.
 * @returns {string} A string representation of the current timestamp.
 */

const generateID = function () {
  return new Date().getTime().toString();
};

/**
 * Finds a notebook in the database by its ID.
 *
 * @param {Object} db - The database containing the notebooks.
 * @param {string} notebookId - The ID of the notebook to find.
 * @returns {Object | undefined} The found notebook object, or undefined if not found.
 */

const findNotebook = (db, notebookId) => {
  return db.notebooks.find((notebook) => notebook.id == notebookId);
};

export {
  addEventOnElements,
  getGreetingMsg,
  activeNotebook,
  makeElemEditable,
  generateID,
  findNotebook,
};
