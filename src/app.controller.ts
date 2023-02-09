import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern, Payload, Ctx} from '@nestjs/microservices';
import { IsString, IsEmail } from 'class-validator';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  sum(data: number[]): number {
    console.log(data);
    return data.reduce((a, b) => a + b, 0);
  }
}

