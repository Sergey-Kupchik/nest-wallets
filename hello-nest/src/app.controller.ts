import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import Request from 'Express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Req() request: Request): string {
    return `aldf`;
  }
}
