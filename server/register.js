'use strict';

const setUpPublic = require('../qbwa/be/css').setUpPublic;

module.exports = ({ strapi }) => {
  // registeration phase
  console.log(">> 🗑", " Registering plugin...");
  setUpPublic();
};
