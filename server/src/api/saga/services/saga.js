'use strict';

/**
 * saga service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saga.saga');
