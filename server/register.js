'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  console.log(">> 🗑", " Registering plugin...");
  const cssService = strapi.plugin("qbwa").service("css");
  cssService.init();
};
