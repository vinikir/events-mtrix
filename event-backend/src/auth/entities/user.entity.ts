import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'b923fa2d-c6ba-47ce-abcd-785b82a7e415' })
    uuid: string;

    @ApiProperty({ example: 'Admin' })
    name: string;

    @ApiProperty({ example: 'admin@mtrix.com' })
    email: string;

    @ApiProperty({ example: '2025-08-13T18:11:56.643Z' })
    createdAt: string;

    @ApiProperty({ example: '2025-08-13T18:11:56.643Z' })
    updatedAt: string;
}
