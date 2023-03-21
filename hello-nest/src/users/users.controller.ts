import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/usersDtos';

@Controller(`users`)
export class UsersController {
  constructor() {
    //    private readonly  blogsService: BlogsService // private readonly  blogsQueryRepository: BlogsQueryRepository //   private readonly  postsService: PostsService // private readonly  postsQueryRepository: PostsQueryRepo
  }

  @Get()
  getUsers(): string {
    return 'Should return all users';
  }

  @Post()
  createUser(@Body() request: CreateUserDto): string {
    return `login is ${request.login} password is ${request.password} email is ${request.email} `;
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return `delete user with id is ${id}`;
  }
}
