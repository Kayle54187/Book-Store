import { Order } from '../../order/entities/order.entity';

export class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly points: number;
  readonly orders: Order[];
}
