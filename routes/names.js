const express = require('express');
const router = express.Router();
const nameService = require('../services/names');

/* GET Names */
router.get('/', async function (req, res, next) {
  try {
    console.log('inside namesRouter');
    res.json(await nameService.getNames());
  } catch (err) {
    console.error(`Error while getting names `, err.message);
    next(err);
  }
});

module.exports = router;
