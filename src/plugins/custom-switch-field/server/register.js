'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'switch',
    plugin: 'custom-switch-field',
    type: 'boolean',
  });
};
