import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './interfaces/book.interface';

export class BookImpl implements Book {
  id: string;
  title: string;
  author: string;
  yearPublished: number;

  constructor(
    id: string,
    title: string,
    author: string,
    yearPublished: number,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
}

@Injectable()
export class AppService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async getCollections(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }
}
