'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-switch-field')
      .service('myService')
      .getWelcomeMessage();
  },
});
