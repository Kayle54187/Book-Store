import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBookDto: CreateBookDto, req: any) {
    const res = await this.prismaService.book.create({
      data: createBookDto,
    });

    return res;
  }

  async findAll(search?: string) {
    const where = {};

    if (search) {
      where['OR'] = [
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
            has: search,
          },
        },
      ];
    }

    return await this.prismaService.book.findMany({
      where,
    });
  }

  async findOne(id: string) {
    const Book = await this.prismaService.book.findUnique({
      where: {
        id,
      },
    });
    if (!Book) throw new HttpException('Book not found', HttpStatus.NOT_FOUND);

    return Book;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const Book = await this.findOne(id);

    return await this.prismaService.book.update({
      where: {
        id,
      },
      data: {
        ...updateBookDto,
      },
    });
  }
}
