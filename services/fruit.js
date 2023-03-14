const FRUITS = require('../models/fruits');
async function getFruits() {
  return {
    FRUITS,
  };
}

module.exports = {
  getFruits,
};
