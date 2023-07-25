const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },

    user: async (parent, { username }) => {
        return User.findOne({username}).populate('books')
    } 
  },
  
  Mutation: {
    createUser: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
  },
};
