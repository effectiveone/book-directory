import { Schema, Document } from 'mongoose';

export interface Book extends Document {
  id: string;
  title: string;
  author: string;
  yearPublished: number;
}

export const BookSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  yearPublished: { type: Number, required: true },
});

export default BookSchema;
