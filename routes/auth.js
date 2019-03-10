var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/google').get(
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  })
);

router
  .route('/google/callback')
  .get(passport.authenticate('google', { failureRedirect: '/error' }), function(
    req,
    res
  ) {
    res.redirect('/users');
  });

module.exports = router;
