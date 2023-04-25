'use strict';

const setUpPublic = require('./qbwa/utils').setUpPublic;

module.exports = ({ strapi }) => {
  // registeration phase
  console.log(">> QBWA Plugin", "Registering plugin...");
  setUpPublic();
};
