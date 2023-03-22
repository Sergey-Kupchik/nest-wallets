import { Controller, Delete, HttpCode, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller(`testing`)
export class TestingController {
  constructor() {
    //    private readonly  blogsService: BlogsService // private readonly  blogsQueryRepository: BlogsQueryRepository //   private readonly  postsService: PostsService // private readonly  postsQueryRepository: PostsQueryRepo
  }

  @Delete('all-data')
  @HttpCode(204)
  async deleteAll() {
    // const deleted = await this.userService.deleteUserById(id);
    return;
  }
}
