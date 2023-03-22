import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TestingController } from './testing/testing.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, TestingController],
  providers: [AppService, UsersService],
})
export class AppModule {}
