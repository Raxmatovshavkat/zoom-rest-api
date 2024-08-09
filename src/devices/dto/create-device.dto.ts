import { IsString, IsEnum, IsOptional, IsBoolean, IsInt, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDeviceDto {
    @ApiProperty()
    @IsString()
    device_name: string;

    @ApiProperty()
    @IsString()
    mac_address: string;

    @ApiProperty()
    @IsString()
    serial_number: string;

    @ApiProperty()
    @IsString()
    vendor: string;

    @ApiProperty()
    @IsString()
    model: string;

    @ApiProperty()
    @IsString()
    platform_os: string;

    @ApiProperty()
    @IsString()
    app_version: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    tag?: string;

    @ApiProperty()
    @IsBoolean()
    enrolled_in_zdm: boolean;

    @ApiProperty()
    @IsBoolean()
    connected_to_zdm: boolean;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    room_id?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    room_name?: string;

    @ApiProperty()
    @IsInt()
    device_type: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    skd_version?: string;

    @ApiProperty()
    @IsInt()
    device_status: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    last_online?: Date;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    user_email?: string;
}