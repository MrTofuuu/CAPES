const { Hero, Emergency } = require('../models');

const resolvers = {
  Query: {
    hero: async () => {
      return Hero.find({});
    },
    emergency: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Emergency.find(params);
    },
  },
  Mutation: {
    createEmergency: async (parent, args) => {
      const emergency = await emergency.create(args);
      return emergency;
    },
  },
};

module.exports = resolvers;
