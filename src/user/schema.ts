import { gql } from "graphql-tag";

export const userSchema = gql`
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

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    loginUser(email: String!): AuthPayload
  }
`;
// userInput.ts - TypeScript input type for creating a user

export interface CreateUserInput {
  name: string;
  email: string;
}
