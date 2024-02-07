import { Order } from '../../order/entities/order.entity';

export class Book {
  readonly id: string;
  readonly title: string;
  readonly writer: string;
  readonly coverImage: string;
  readonly price: number;
  readonly tags: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly orders: Order[];
}
