import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: `user first name`,
  })
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty({
    description: `user last name`,
  })
  @IsOptional()
  readonly lastName?: string;

  @ApiProperty({
    description: `user email`,
  })
  @IsOptional()
  @IsEmail()
  readonly email: string;
}
