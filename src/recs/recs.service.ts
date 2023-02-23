import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { RecChunk } from './interfaces/recchunk.interface';
import { Db, ObjectID } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) { }

  async find(): Promise<any[]> {

    return await this.db.collection('recs').find().toArray();
  }

  // async findOne(id: string): Promise<User> {
  //   if (!ObjectID.isValid(id)) {
  //     throw new BadRequestException;
  //   }

  //   const response = await this.db.collection('recs').findOne({
  //     _id: new ObjectID(id),
  //   });

  //   if (!response) {
  //     throw new NotFoundException;
  //   }

  //   return null;
  // }

}