"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userSchema = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;
