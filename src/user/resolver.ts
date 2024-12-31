import { IResolvers } from "@graphql-tools/utils";

import { AppDataSource } from "../connectdb";
import { create_user_token } from "./jwt";
import { CreateUserInput } from "./schema";
import { User } from "./user";
import { createUserValidation } from "./validation";

export const userResolver: IResolvers = {
  Query: {
    async getUsers() {
      const userRepository = AppDataSource.getRepository(User);
      return userRepository.find({ relations: ["posts"] });
    },
    async getUser(_: any, { id }: { id: string }) {
      const userRepository = AppDataSource.getRepository(User);
      return userRepository.findOne({
        where: { id: +id },
        relations: ["posts"],
      });
    }
  },
  Mutation: {
    async createUser(_: any, { input }: { input: CreateUserInput }) {
      const { error } = createUserValidation.validate(input);
      if (error) throw new Error(error.details[0].message);

      const userRepository = AppDataSource.getRepository(User);
      const user = userRepository.create(input);
      return userRepository.save(user);
    },
    loginUser: async (_: any, { email }: { email: string }) => {
      // Find the user in the database using TypeORM
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        throw new Error("User not found");
      }

      // Generate a JWT token
      const token = create_user_token(user.id);

      // Return the token and user details
      return {
        token,
        user,
      };
    },
  },
};
