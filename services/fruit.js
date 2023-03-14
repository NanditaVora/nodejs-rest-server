const FRUITS = require('../models/fruits');
async function getFruits() {
  return {
    FRUITS,
  };
}

async function addFruit(fruit) {
  FRUITS.push(fruit);
}

module.exports = {
  getFruits,
  addFruit,
};
