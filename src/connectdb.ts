import { DataSource } from "typeorm";
import { Post } from "./post/post";
import { User } from "./user/user";


export const AppDataSource = new DataSource({
    type: "mysql", // Replace with 'mysql' or 'sqlite' if needed
    host: "localhost",
    port: 3306, // PostgreSQL default port (change if using a different DB)
    username: "root", // PostgreSQL username
    password: "123456", // PostgreSQL password
    database: "emro", // Your database name
    synchronize: true, // Automatically sync schema (use cautiously in production)
    logging: true, // Enable query logging for debugging
    entities: [Post, User],    // Register entitie
});


export const connectdb = async () => {
    try {
      await AppDataSource.initialize();
      console.log("Database connection established.");
    } catch (error) {
      console.error("Error during Data Source initialization:", error);
    }
  };