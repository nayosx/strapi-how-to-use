'use strict';

/**
 * comic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comic.comic');
