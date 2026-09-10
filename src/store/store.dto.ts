import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNumber()
    longitude: number;

    @ApiProperty()
    @IsNumber()
    latitude: number;

    @ApiProperty()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsString()
    openTime: string;

    @ApiProperty()
    @IsString()
    closeTime: string;

    @ApiProperty({ required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive: boolean;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description: string;
}

export class UpdateStoreDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    @MaxLength(128)
    name?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    address?: string;

    @ApiProperty({ required: false })
    @IsNumber()
    @IsOptional()
    longitude?: number;

    @ApiProperty({ required: false })
    @IsNumber()
    @IsOptional()
    latitude?: number;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    openTime?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    closeTime?: string;

    @ApiProperty({ required: false })
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string;
}

export class StoreQueryDto {
    @ApiProperty({ required: false, default: 1 })
    @IsOptional()
    @Transform(({ value }) => Number(value))
    page?: number = 1;

    @ApiProperty({ required: false, default: 10 })
    @IsOptional()
    @Transform(({ value }) => Number(value))
    pageSize?: number = 10;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @Transform(({ value }) => Boolean(value))
    isActive?: boolean;
}

export class StoreResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    longitude: number;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    openTime: string;

    @ApiProperty()
    closeTime: string;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    description: string;

    @ApiProperty({ type: 'number', description: '毫秒时间戳' })
    createdTime: bigint;

    @ApiProperty({ type: 'number', description: '毫秒时间戳' })
    updatedTime: bigint;

    @ApiProperty({ type: 'number', description: '毫秒时间戳' })
    deletedTime: bigint;
}
