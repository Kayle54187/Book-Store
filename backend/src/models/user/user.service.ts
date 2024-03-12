import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { compare, hash } from '../../utils/password';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto, req: any) {
    const duplicate = await this.prismaService.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (duplicate) {
      throw new HttpException(
        `User with the same email already exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await hash(createUserDto.password);

    const res = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    return res;
  }

  async findAll(search?: string) {
    const where = {};

    if (search) {
      where['OR'] = [
        {
          firstName: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          lastName: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ];
    }

    return await this.prismaService.user.findMany({
      where,
    });
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    const duplicate = await this.prismaService.user.findFirst({
      where: {
        email: updateUserDto.email,
        id: {
          not: id,
        },
      },
    });

    if (duplicate) {
      throw new HttpException(
        `User with the same email already exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  async updatePassword(
    id: string,
    changePasswordDto: ChangePasswordDto,
    req: any,
  ) {
    if (
      req.user.id === req.params.id &&
      (!changePasswordDto.oldPassword || changePasswordDto.oldPassword === '')
    )
      throw new HttpException(
        'Old password is required',
        HttpStatus.BAD_REQUEST,
      );

    if (changePasswordDto.oldPassword === changePasswordDto.password)
      throw new HttpException(
        'Old password and new password are the same',
        HttpStatus.BAD_REQUEST,
      );

    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    if (req.user.id === req.params.id) {
      const isPasswordValid = await compare(
        changePasswordDto.oldPassword,
        user.password,
      );
      if (!isPasswordValid)
        throw new HttpException('Invalid old password', HttpStatus.BAD_REQUEST);
    }

    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        password: await hash(changePasswordDto.password),
      },
    });
  }

  async updatePoints(id: string, points: number) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        points,
      },
    });
  }
}
