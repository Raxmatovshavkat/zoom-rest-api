import { ApiProperty } from '@nestjs/swagger';
import { ArchiveFile } from './archive-file.dto';

export class ListArchivedFilesDto {
    @ApiProperty({ description: 'Start date for the listing' })
    from: string;

    @ApiProperty({ description: 'List of meetings with archived files' })
    meetings: ArchiveFile[];

    @ApiProperty({ description: 'Next page token for pagination' })
    nextPageToken: string;

    @ApiProperty({ description: 'Total number of records' })
    totalRecords: number;
}
