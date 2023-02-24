import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './interfaces/book.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return this.appService.getCollections();
  }
}
