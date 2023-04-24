'use strict';

const { setUpPublic } = require('./qbwa/utils');

module.exports = ({ strapi }) => {
  // registeration phase
  setUpPublic();
};
