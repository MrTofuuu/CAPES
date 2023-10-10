const db = require('../config/connection');
const { Hero, User, Emergency, } = require('../models');
const cleanDb = require('../config/cleanDB');
const heroData = require('./heroData.json');
const userData = require('./userData.json');
const emergencyData = require('./emergencyData.json')

db.once('open', async () => {
  await Hero.deleteMany({});
  await User.deleteMany({});
  await Emergency.deleteMany({});


  const heroSeed = await Hero.insertMany(heroData);
  const userSeed = await User.insertMany(userData);
  const emergencySeed = await Emergency.insertMany(emergencyData)

  console.log(heroSeed);
  console.log(userSeed);
  console.log(emergencySeed);
  process.exit(0);
});
