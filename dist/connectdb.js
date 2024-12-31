"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql", // Replace with 'mysql' or 'sqlite' if needed
    host: "localhost",
    port: 3306, // PostgreSQL default port (change if using a different DB)
    username: "root", // PostgreSQL username
    password: "123456", // PostgreSQL password
    database: "emro", // Your database name
    synchronize: true, // Automatically sync schema (use cautiously in production)
    logging: true, // Enable query logging for debugging
    entities: ["src/**/*.ts"], // Register entities
});
