import { IsArray, ValidateNested, IsObject, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { BagItemDto } from './bag-item.dto';

export class UserDto {
    @IsInt()
    id: number;
}

export class CheckoutDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BagItemDto)
    bag: BagItemDto[];

    @IsObject()
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto;
}