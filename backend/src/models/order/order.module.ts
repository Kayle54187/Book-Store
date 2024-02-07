import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { UserService } from '../user/user.service';
import { BookService } from '../book/book.service';

@Module({
  controllers: [OrderController],
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 10000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [
    OrderService,
    PrismaService,
    JwtService,
    ConfigService,
    UserService,
    BookService,
  ],
})
export class OrderModule {}
