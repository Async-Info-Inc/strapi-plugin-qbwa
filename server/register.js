'use strict';

const setUpPublic = require('./qbwa/utils').setUpPublic;

module.exports = ({ strapi }) => {
  // registeration phase
  setUpPublic();
  console.log(">> QBWA registeration phase");
};
