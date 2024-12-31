import jwt from "jsonwebtoken";
import { Request, Response } from "express";
const { AuthenticationError } = require('apollo-server');

const age = Math.floor(Date.now() / 1000) + 10 * 365 * 24 * 60 * 60;

export const create_user_token = (user) => {
    return jwt.sign({ user }, "123456", {
      expiresIn: age,
    });
};

interface AuthContext {
    req: Request;
    res: Response;
    user?: { userId: string; email: string };
  }
  

  export const authMiddleware = ({ req }: { req: Request }) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
  
    if (!token) {
      return { user: null }; // No token, return null context
    }
  
    try {
      // Assuming userId is a number in the decoded token
      const decodedToken = jwt.verify(token, "123456") as { userId: number };
      return { user: { userId: decodedToken.userId } }; // Add userId as number to context
    } catch (error) {
      console.error("Invalid token:", error);
      return { user: null }; // Invalid token, return null context
    }
};
  
// Define the type for context
export const context = ({ req }) => {
    const token = req.headers.authorization || '';
    if (!token) throw new AuthenticationError('Authentication token missing');
    
    try {
      const decoded = jwt.verify(token, 'secretKey');
      return { userId: decoded.userId };
    } catch (error) {
      throw new AuthenticationError('Invalid or expired token');
    }
  };


