const db = require('../config/connection');
const { Hero } = require('../models');

const heroData = require('./heroData.json');

db.once('open', async () => {
  await Hero.deleteMany({});

  const heroSeed = await Hero.insertMany(heroData);

  console.log(heroSeed);
  process.exit(0);
});
