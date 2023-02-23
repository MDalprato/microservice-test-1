import { Module } from '@nestjs/common';
import { UsersController } from './recs.controller';
import { UsersService } from './recs.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}