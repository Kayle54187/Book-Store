import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { BookService } from '../book/book.service';
import { Status } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(
    private readonly userService: UserService,
    private readonly bookService: BookService,
    private readonly prismaService: PrismaService,
  ) {}

  async create(userId: string, bookId: string) {

    const user = await this.userService.findOne(userId);
    const book = await this.bookService.findOne(bookId);

    const res = await this.prismaService.order.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        book: {
          connect: {
            id: bookId,
          },
        },
        status: Status.ACTIVE,
      },
    });

    return res;
  }

  async findAll(userId: string, search?: string) {
    const where = {
      user: {
        id: userId,
      }
    };

    if (search) {
      where['book']['OR'] = [
        {
          title: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          writer: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          tags: {
            contains: search,  // TODO: edit here
            mode: 'insensitive',
          },
        },
      ];
    }

    return await this.prismaService.order.findMany({
      where,
    });
  }

  async findOne(id: string) {
    const Order = await this.prismaService.order.findUnique({
      where: {
        id,
      },
    });
    if (!Order) throw new HttpException('Order not found', HttpStatus.NOT_FOUND);

    return Order;
  }

  async cancel(userId: string, id: string) {
    const order = await this.findOne(id);

    if (order.userId !== userId)
      throw new HttpException('You are not allowed to cancel this order', HttpStatus.UNAUTHORIZED);

    return await this.prismaService.order.update({
      where: {
        id,
      },
      data: {
        status: Status.CANCELLED,
      },
    });
  }
}
