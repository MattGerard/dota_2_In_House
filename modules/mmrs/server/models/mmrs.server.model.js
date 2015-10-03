'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Mmr Schema
 */
  var MmrSchema = new Schema({
      steamID: String,
      initialSoloMMR: Number,
      initialPartyMMR: Number,
      created: {
      type: Date,
      default: Date.now
      },
  });

mongoose.model('Mmr', MmrSchema);