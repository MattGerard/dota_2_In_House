'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  path = require('path'),
  mongoose = require('mongoose'),
  Mmr = mongoose.model('Mmr'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


/**
 * Show the current article
 */
exports.read = function(req, res) {
  res.json(req.mmr);
};

/**
 * List of Mmrs
 */
exports.list = function(req, res) {
  Mmr.find().sort('-created').exec(function(err, mmrs) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(mmrs);
    }
  });
};

/**
 * Article middleware
 */
exports.mmrByID = function(req, res, next, id) {
  Mmr.findById(id).exec(function(err, mmr) {
    if (err) return next(err);
    if (!mmr) return next(new Error('Failed to load mmr ' + id));
    req.mmr = mmr;
    next();
  });
};