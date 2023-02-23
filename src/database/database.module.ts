import { Module } from '@nestjs/common';
import { MongoClient, Db, Logger } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          Logger.setLevel('debug');

          const client = await MongoClient.connect('mongodb://127.0.0.1');

          const db = client.db('rec_test');

          //await db.collection('recs').createIndex({ cameraId: 1 }, { unique: true, sparse: true });
          await db.collection('recs');

          return db;
        } catch (e) {
          throw e;
        }
      }
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
