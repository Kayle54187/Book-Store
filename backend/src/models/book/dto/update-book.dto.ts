import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
} from 'class-validator';

export class UpdateBookDto {
  @ApiProperty({
    description: `book title`,
  })
  @IsOptional()
  readonly title: string;

  @ApiProperty({
    description: `book writer`,
  })
  @IsOptional()
  readonly writer: string;

  @ApiProperty({
    description: `book cover image`,
  })
  @IsOptional()
  readonly coverImage: string;

  @ApiProperty({
    description: `book price`,
  })
  @IsOptional()
  readonly price: number;

  @ApiProperty({
    description: `book tags`,
  })
  readonly tags: string[];
}
