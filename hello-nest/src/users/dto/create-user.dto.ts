import { IAllUsersOutput, IUserOutput } from '../interfaces/user.interface';

export class CreateUserDto {
  login: string;
  password: string;
  email: string;
}

export class FilterParamsDto {
  pageNumber: number;
  sortBy: string;
  sortDirection: string;
  pageSize: number;
}
