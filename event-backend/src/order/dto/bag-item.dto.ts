import { IsInt, IsUUID, IsNumber, IsNotEmpty } from 'class-validator';

export class BagItemDto {
  @IsInt()
  id: number;

  @IsUUID()
  uuid: string;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsInt()
  qantitySolded: number;

  @IsInt()
  qantityHalfSolded: number;

  @IsNumber()
  totalPrice: number;
}

