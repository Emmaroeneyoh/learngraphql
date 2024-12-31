import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./merge_schema_resolver"; // Import merged schema
import { connectdb } from "./connectdb";
import { authMiddleware, context } from "./user/jwt"; // Ensure your JWT decoding logic is correct

// Connect to your database
connectdb();


// Create the ApolloServer instance
const server = new ApolloServer({
  schema,
  context,
});

// Start the ApolloServer
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
