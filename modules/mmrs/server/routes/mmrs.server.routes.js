'use strict';

/**
 * Module dependencies.
 */
var mmrsPolicy = require('../policies/mmrs.server.policy'),
  mmrs = require('../controllers/mmrs.server.controller');

module.exports = function(app) {
  // Articles collection routes
  app.route('/api/mmrs').all(mmrsPolicy.isAllowed)
    .get(mmrs.list);

  // Finish by binding the article middleware
  app.param('mmrId', mmrs.mmrByID);
};
