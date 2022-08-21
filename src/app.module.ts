import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.ae5wj.mongodb.net/axbauthtemplate?retryWrites=true&w=majority`,
    ),
    TasksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
