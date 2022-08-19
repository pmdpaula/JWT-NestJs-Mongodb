import { TaskService } from './shared/task.service';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
