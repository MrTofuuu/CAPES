const db = require('../config/connection');
const { Hero, Profile, Emergency, } = require('../models');

const heroData = require('./heroData.json');
const profileData = require('./profileData.json');
const emergencyData = require('./emergencyData.json')

db.once('open', async () => {
  await Hero.deleteMany({});
  await Profile.deleteMany({});
  await Emergency.deleteMany({});


  const heroSeed = await Hero.insertMany(heroData);
  const profileSeed = await Profile.insertMany(profileData);
  const emergencySeed = await Emergency.insertMany(emergencyData)

  console.log(heroSeed);
  console.log(profileSeed);
  console.log(emergencySeed);
  process.exit(0);
});
