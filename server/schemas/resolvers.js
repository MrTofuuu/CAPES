const { Hero, User, Emergency } = require('../models');
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
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log("inside addUser resolver")
      const user = await User.create(args);
      const token = signToken(user);
      console.log('signed token')
      console.log(token)
      return { token, user };
    },
    addEmergency: async (parent, { severity, description, zipcode }, context) => {
      console.log(context);
      if (context.user) {
        const heroes = await Hero.find({ severity: severity });
        const emergency = new Emergency({ heroes, severity, description, zipcode });


        await User.findByIdAndUpdate(context.user._id, { $push: { emergencies: emergency } });

        return emergency;
      }

      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }); console.log(user.password);
      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }
      console.log('this is inside of the resolvers.')
      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;
