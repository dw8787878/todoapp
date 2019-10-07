const { gql } = require('apollo-server');

const typeDefs = gql`

  type Tasks {
    id: Int!
    task_name: String!
    is_complete: Boolean!
  }

  type Query {
    tasks : [Tasks]
  }
`;

module.exports = typeDefs;
