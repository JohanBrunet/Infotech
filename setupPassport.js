var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'app50173543.auth0.com',
    clientID:     'xqW3BC2q2q8nf6VlJlSjauumUNfaxG5X',
    clientSecret: 'sFxiFSs3PPIX8HNnSyyYFOCZ9HZeL9PSC0X_b5AobiaOD3BT2JxVGNlUxdqbKaZy',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
