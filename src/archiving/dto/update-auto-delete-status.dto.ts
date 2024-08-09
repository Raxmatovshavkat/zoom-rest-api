import { ApiProperty } from '@nestjs/swagger';

export class UpdateAutoDeleteStatusDto {
    @ApiProperty({ description: 'New auto-delete status' })
    autoDelete: boolean;
}
