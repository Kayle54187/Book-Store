import { Status } from '@prisma/client';
import { Book } from '../../book/entities/book.entity';
import { User } from '../../user/entities/user.entity';

export class Order {
  readonly id: string;
  readonly book: Book;
  readonly user: User;
  readonly status: Status;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
