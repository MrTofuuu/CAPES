const { GraphQLError} = require('graphql')
const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    console.log('authMidlleware')
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log(req.body)
    console.log(req.query)
    console.log(req.headers)
    console.log('after authMiddleware')
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }
    console.log('before jwt verify')
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log(data);
      //this is related to the context.user requests in the resolvers. It does not reference the user model or data.
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ name, email, _id }) {
    const payload = { name, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
