// src/archive-files/dto/archived-file-statistics.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ArchivedFileStatisticsDto {
    @ApiProperty({ description: 'Start date for the statistics' })
    from: string;

    @ApiProperty({ description: 'End date for the statistics' })
    to: string;

    @ApiProperty({ description: 'Total number of records' })
    totalRecords: number;

    @ApiProperty({ description: 'Statistics by file extension' })
    statisticByFileExtension: {
        [key: string]: number;
    };

    @ApiProperty({ description: 'Statistics by file status' })
    statisticByFileStatus: {
        [key: string]: number;
    };
}
