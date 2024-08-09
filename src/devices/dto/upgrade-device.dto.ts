import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpgradeDevicesDto {
    @ApiProperty()
    @IsString()
    upgrade_version: string;
}