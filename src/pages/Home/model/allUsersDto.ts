import type { IUser } from './user';

export interface IAllUsersDTO {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
