import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './controller/book.controller';
import { BookService } from './services/book.service';
import { BookSchema } from './model/book.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/book-directory'),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: 'DatabaseConnection',
      useFactory: async (): Promise<typeof import('mongoose')> => {
        const mongoose = await import('mongoose');
        const connection = await mongoose.connect(
          'mongodb://localhost/book-directory',
        );
        return connection;
      },
    },
  ],
})
export class AppModule {}
