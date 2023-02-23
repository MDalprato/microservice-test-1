import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RecChunk } from './interfaces/recchunk.interface';
import { UsersService } from './recs.service';
import { MessagePattern, Payload, Ctx } from '@nestjs/microservices';

@Controller('recs')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Get()
  // async find(): Promise<User[]> {
  //   return await this.usersService.find();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<User> {
  //   return await this.usersService.findOne(id);
  // }


  @MessagePattern('getAllRec')
  async find(): Promise<RecChunk[]> {
    return await this.usersService.find();
  }

  // @Put(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() body: UpdateUserDto
  // ): Promise<void> {
  //   await this.usersService.update(id, body);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<void> {
  //   await this.usersService.delete(id);
  // }
}