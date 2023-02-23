import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
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
  async find(): Promise<User[]> {
    return await this.usersService.find();
  }
  //@Post()
  @MessagePattern('addRecording')
  async create(data: CreateUserDto): Promise<void> {
    await this.usersService.create(data);
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