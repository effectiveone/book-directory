import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../model/book.model';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return await this.bookModel
      .findByIdAndUpdate(id, book, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id).exec();
  }
}
