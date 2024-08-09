'use strict';

/**
 * saga controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::saga.saga');
