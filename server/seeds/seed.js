const db = require('../config/connection');
const { Hero, Profile } = require('../models');

const heroData = require('./heroData.json');
const profileData = require('./profileData.json');

db.once('open', async () => {
  await Hero.deleteMany({});
  await Profile.deleteMany({});

  const heroSeed = await Hero.insertMany(heroData);
  const profileSeed = await Profile.insertMany(profileData);

  console.log(heroSeed);
  console.log(profileSeed);
  process.exit(0);
});
