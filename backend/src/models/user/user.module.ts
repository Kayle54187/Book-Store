import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [UserController],
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 10000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [
    UserService,
    PrismaService,
    JwtService,
    ConfigService,
  ],
})
export class UserModule {}
