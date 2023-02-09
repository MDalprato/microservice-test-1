import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload, Ctx } from '@nestjs/microservices';
import { IsString, IsEmail } from 'class-validator';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('getManipolatedName')
  sum(data: any): any {
    console.log(data);


    const text = "Your name is " + data.name + " and your surname is " + data.surname;
    return text;
  }
}

