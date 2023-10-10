const { Hero, Profile, Emergency } = require('../models');
// previously had AuthenticationError imported directly here 
// const { AuthenticationError } = require('apollo-server-express');
const { signToken, AuthenticationError } = require('../utils/auth');

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
      console.log("inside addProfile resolver")
      const profile = await Profile.create(args);
      const token = signToken(profile);
      console.log('signed token')
      console.log(token)
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

      throw AuthenticationError;
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
        throw AuthenticationError;
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
