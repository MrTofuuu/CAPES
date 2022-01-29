const { Hero, Profile, Emergency } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    emergency: async () => {
      return Emergency.findOne({ _id: emergencyId });
    },
    emergencyLevel: async (parent, { severity }) => {
      const params = severity ? { severity } : {};
      return Emergency.find(params);
    },
    emergencies: async () => {
      return Emergency.find();
    },

    hero: async () => {
      return Hero.find({});
    },
    heroes: async (parent, { severity }) => {
      const params = severity ? { severity } : {};
      return Hero.find(params);
    },
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },
  Mutation: {
    addProfile: async (parent, args) => {
      const profile = await Profile.create(args);
      const token = signToken(profile);

      return { token, profile };
    },
    addEmergency: async (parent, { severity, description, zipcode }, context) => {
      console.log(context);
      if (context.user) {
        const heroes = await Hero.find({ severity: severity });
        const emergency = new Emergency({ heroes, severity, description, zipcode });


        await Profile.findByIdAndUpdate(context.user._id, { $push: { emergencies: emergency } });

        return emergency;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email }); console.log(profile.password);
      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }
      console.log('this is inside of the resolvers.')
      const correctPw = await profile.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;
