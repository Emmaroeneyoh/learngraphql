import { gql } from "graphql-tag";

export const postSchema = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    user: User!
  }

  input CreatePostInput {
    title: String!
    content: String!
    userId: ID!
  }

  type Query {
    getPost(id: ID!): Post
    getPosts: [Post!]!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
  }
`;
