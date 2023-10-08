'use strict';

/**
 * cup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cup.cup');
