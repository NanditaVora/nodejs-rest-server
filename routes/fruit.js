const express = require('express');
const router = express.Router();
const fruitService = require('../services/fruit');

/* GET Fruits */
router.get('/', async function (req, res, next) {
  try {
    res.json(await fruitService.getFruits());
  } catch (err) {
    console.error(`Error while getting fruits `, err.message);
    next(err);
  }
});

/* POST Fruit */
router.post('/', async function (req, res, next) {
  try {
    res.json(await fruitService.addFruit(req.body));
  } catch (err) {
    console.error(`Error while posting fruits `, err.message);
    next(err);
  }
});
module.exports = router;
