import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RecChunk } from './interfaces/recchunk.interface';
import { UsersService } from './recs.service';
import { MessagePattern, Payload, Ctx } from '@nestjs/microservices';

@Controller('recs')
export class UsersController {
  constructor(private usersService: UsersService) { }


  @MessagePattern('getAllRec')
  async find(): Promise<RecChunk[]> {
    return await this.usersService.find();
  }

  @MessagePattern('getRecForChannel')
  async findRecForChannel(chId: string): Promise<RecChunk[]> {
    return await this.usersService.findRecForChannel(parseInt(chId));
  }


}