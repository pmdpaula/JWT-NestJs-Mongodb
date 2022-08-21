import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './shared/user.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
