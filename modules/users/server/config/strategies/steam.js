'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  url = require('url'),
  SteamStrategy = require('passport-steam').Strategy,
  users = require('../../controllers/users.server.controller');

module.exports = function(config) {

    passport.use(new SteamStrategy({
      apiKey: config.steam.clientSecret,
        returnURL: 'http://localhost:3000/api/auth/steam/callback',
        realm: 'http://localhost:3000/',
     },
    function(req, profile, done) {
      // Set the provider data and include tokens
      var providerData = profile._json;

      // Create the user OAuth profile
      var providerUserProfile = {
        username: providerData.personaname,
        displayName: providerData.personaname,
        email: '',
        profileURL: providerData.profileurl,
        profileImageURL: (providerData.avatarfull) ? providerData.avatarfull : undefined,
        provider: 'steam',
        providerIdentifierField: 'steamid',
        providerData: providerData
      };

      // Save the user OAuth profile
      users.saveOAuthUserProfile(req, providerUserProfile, done);
    }
  ));

};