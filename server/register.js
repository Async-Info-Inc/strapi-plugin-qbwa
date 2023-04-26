'use strict';

const setUpPublic = require('../qbwa/be/css').setUpPublic;

module.exports = ({ strapi }) => {
  // registeration phase
  console.log(">> QBWA Plugin", "Registering plugin...");
  setUpPublic();
};
