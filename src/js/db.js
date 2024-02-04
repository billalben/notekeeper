"use strict";

import { generateID } from "./utils.js";

// DB Object
let /** {Object} */ noteKeeperDB = {};

/**
 * Initializes a local database. If the data exists in local storage, it is loaded;
 * otherwise, a new empty database structure is created and stored.
 */

const initDB = function () {
  const /** {JSON | undefined} */ db = localStorage.getItem("noteKeeperDB");
  if (db) {
    noteKeeperDB = JSON.parse(db);
  } else {
    noteKeeperDB.notebooks = [];
    localStorage.setItem("noteKeeperDB", JSON.stringify(noteKeeperDB));
  }
};

initDB();

/**
 * Reads and loads the localStorage data in to the global variable 'noteKeeperDB'.
 */

const readDB = function () {
  noteKeeperDB = JSON.parse(localStorage.getItem("noteKeeperDB"));
};

/**
* Writes the current state of the global variable 'noteKeeperDB' to
local storage
*/

const writeDB = function () {
  localStorage.setItem("noteKeeperDB", JSON.stringify(noteKeeperDB));
};

/**
 * Collection of functions for performing CRUD (Create, Read, Update, Delete) operations on database.
 * The database state is managed using global variables and local storage.
 * @namespace
 * @property {Object} get - Functions for retrieving data from the database.
 * @property {Object} post - Functions for adding data to the database.
 * @property {Object} update - Functions for updating data in the database.
 * @property {Object} delete - Functions for deleting data from the database.
 */

export const db = {
  post: {
    /**
     * Adds a new notebook to the database.
     * @function
     * @param {string} name - The name of the new notebook.
     * @returns {Object} The newly created notebook object.
     */
    notebook(name) {
      readDB();

      const /** {Object} */ notebookData = {
          id: generateID(),
          name: name,
          notes: [],
        };

      noteKeeperDB.notebooks.push(notebookData);

      writeDB();

      return notebookData;
    },
  },
  get: {
    /**
     * Retrieves all notebooks from the database.
     * @function
     * @returns {Array<Object>} An array of notebook objects.
     */
    notebook() {
      readDB();
      return noteKeeperDB.notebooks;
    },
  },
};
