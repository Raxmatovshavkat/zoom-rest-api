import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AssignDeviceDto {
    @ApiProperty()
    @IsString()
    assigned_user: string;
}