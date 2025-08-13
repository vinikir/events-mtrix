import { ApiProperty } from '@nestjs/swagger';

export class EventEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Show de Rock' })
  name: string;

  @ApiProperty({ example: 150 })
  price: number;

  @ApiProperty({ example: 500 })
  maximumAmount: number;

  @ApiProperty({ example: true })
  halfPrice: boolean;

  @ApiProperty({ example: 'https://placehold.co/600x400' })
  image: string;

  @ApiProperty({ example: '2025-11-20T21:00:00Z' })
  date: Date;

  @ApiProperty({ example: 'São Paulo' })
  local: string;

  @ApiProperty({ example: 350 })
  sold: number;
}