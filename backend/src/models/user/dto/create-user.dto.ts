import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: `user first name`,
  })
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({
    description: `user last name`,
  })
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({
    description: `user email`,
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: `new password`,
  })
  @IsNotEmpty()
  @MinLength(8, { message: ' The min length of password is 8 ' })
  @MaxLength(20, {
    message: " The password can't accept more than 20 characters ",
  })
  readonly password: string;
}
