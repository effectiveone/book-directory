import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import * as request from 'supertest';
import { Book } from './interfaces/book.interface';
import { BookService } from './services/book.service';
import { BookController } from './controller/book.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let bookModel;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        BookService,
        {
          provide: getModelToken('Book'),
          useValue: {
            find: () => ({
              exec: () => [
                { id: 'book1', title: 'Book 1', author: 'Author 1' },
                { id: 'book2', title: 'Book 2', author: 'Author 2' },
                { id: 'book3', title: 'Book 3', author: 'Author 3' },
              ],
            }),
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    bookModel = moduleFixture.get(getModelToken('Book'));
  });

  describe('/books (GET)', () => {
    it('should return an array of books', () => {
      return request(app.getHttpServer())
        .get('/books')
        .expect(200)
        .expect((response) => {
          const books: Book[] = response.body;
          expect(books.length).toEqual(3);
          expect(books[0].id).toEqual('book1');
          expect(books[0].title).toEqual('Book 1');
          expect(books[0].author).toEqual('Author 1');
          // test the remaining books here
          expect(Array.isArray(books)).toBe(true); // add this line
        })
        .then((response) => {
          expect(response.body).toMatchSnapshot();
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
