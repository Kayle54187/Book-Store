import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: `book title`,
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    description: `book writer`,
  })
  @IsNotEmpty()
  readonly writer: string;

  @ApiProperty({
    description: `book cover image`,
  })
  @IsNotEmpty()
  readonly coverImage: string;

  @ApiProperty({
    description: `book price`,
  })
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({
    description: `book tags`,
  })
  readonly tags: string[];
}
