const express = require('express');
const router = express.Router();
const fruitService = require('../services/fruit');

/* GET Names */
router.get('/', async function (req, res, next) {
  try {
    res.json(await fruitService.getFruits());
  } catch (err) {
    console.error(`Error while getting fruits `, err.message);
    next(err);
  }
});

module.exports = router;
