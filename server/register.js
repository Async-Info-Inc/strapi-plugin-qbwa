'use strict';

const { setUpPublic } = require("../admin/src/qbwa/utils");

module.exports = ({ strapi }) => {
  // registeration phase
  setUpPublic();
};
