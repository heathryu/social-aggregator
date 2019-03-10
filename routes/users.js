var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {
    name: req.user.displayName,
    image_url: req.user._json.image.url
  });
});

module.exports = router;
