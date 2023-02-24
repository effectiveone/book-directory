import { Module } from '@nestjs/common';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';

@Module({
  imports: [
    NestMongooseModule.forRoot('mongodb://localhost/book-directory', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    NestMongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  exports: [NestMongooseModule],
})
export class MongooseModule {}
