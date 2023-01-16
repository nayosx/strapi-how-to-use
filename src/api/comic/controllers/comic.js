'use strict';

/**
 * comic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comic.comic');
