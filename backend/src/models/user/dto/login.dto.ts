import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: `user email or phone number`,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `user password`,
  })
  @IsNotEmpty()
  @MinLength(8, { message: ' The min length of password is 8 ' })
  @MaxLength(20, {
    message: " The password can't accept more than 20 characters ",
  })
  password: string;
}
