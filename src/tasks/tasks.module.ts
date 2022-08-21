import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './shared/task.service';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
