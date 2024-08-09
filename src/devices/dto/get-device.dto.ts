import { IsString, IsEnum, IsOptional, IsBoolean, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetDevicesDto {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    search_text?: string;

    @ApiPropertyOptional({ enum: ['win', 'mac', 'ipad', 'iphone', 'android', 'linux'] })
    @IsEnum(['win', 'mac', 'ipad', 'iphone', 'android', 'linux'])
    @IsOptional()
    platform_os?: string;

    @ApiPropertyOptional()
    @IsBoolean()
    @IsOptional()
    is_enrolled_in_zdm?: boolean;

    @ApiPropertyOptional()
    @IsInt()
    @IsOptional()
    device_type?: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    device_vendor?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    device_model?: string;

    @ApiPropertyOptional({ enum: [0, 1, -1] })
    @IsEnum([0, 1, -1])
    @IsOptional()
    device_status?: number;

    @ApiPropertyOptional()
    @IsInt()
    @IsOptional()
    page_size?: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    next_page_token?: string;
}
