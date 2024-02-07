import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from '../models/user/dto/login.dto';
import { compare } from '../utils/password';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.prismaService.user.findFirst({
      where: { email: email },
    });

    if (!user)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const { id } = user;
    const accessToken = this.generateAccessToken(email, id, id);

    return {
      user,
      accessToken,
    };
  }

  private generateAccessToken(email: string, id: string, sub: string) {
    const payload = {
      email,
      id,
      sub,
    };

    // Will be expired in 1 day
    return this.jwtService.sign(payload, { expiresIn: '1d' });
  }
}
