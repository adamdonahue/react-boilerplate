var router = require('express').Router();

// Entry point for React-based SPA.
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
