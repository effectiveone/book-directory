import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() book: Book): Promise<Book> {
    return this.bookService.update(id, book);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.bookService.delete(id);
  }
}
