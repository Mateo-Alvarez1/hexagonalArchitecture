import { User } from "../../../repository/app/schemas";

export interface forRepoQuerying {
  getUser(email: string): Promise<User>;
  createUser(user: User, password: string): Promise<User>;
}
