import { makeExecutableSchema } from "@graphql-tools/schema";
import { postSchema } from "./post/schema";
import { authMiddleware } from "./user/jwt";
import { userResolver } from "./user/resolver";
import { userSchema } from "./user/schema";

// Merging schemas and resolvers
const schema = makeExecutableSchema({
  typeDefs: [userSchema, postSchema], // Both user and post schemas
  resolvers: [userResolver],
  
});

export default schema;
