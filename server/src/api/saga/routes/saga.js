'use strict';

/**
 * saga router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::saga.saga');
