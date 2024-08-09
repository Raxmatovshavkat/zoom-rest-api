import { ApiProperty } from '@nestjs/swagger';

export class ArchiveFile {
    @ApiProperty({ description: 'URL to download the archived file' })
    downloadUrl: string;

    @ApiProperty({ description: 'File extension' })
    fileExtension: string;

    @ApiProperty({ description: 'File path' })
    filePath: string;

    @ApiProperty({ description: 'File size in bytes' })
    fileSize: number;

    @ApiProperty({ description: 'File type' })
    fileType: string;

    @ApiProperty({ description: 'Archived file ID' })
    id: string;

    @ApiProperty({ description: 'Whether the file is an individual recording' })
    individual: boolean;

    @ApiProperty({ description: 'Participant email' })
    participantEmail: string;

    @ApiProperty({ description: 'Participant join time' })
    participantJoinTime: string;

    @ApiProperty({ description: 'Participant leave time' })
    participantLeaveTime: string;

    @ApiProperty({ description: 'Recording type' })
    recordingType: string;

    @ApiProperty({ description: 'File status' })
    status: string;

    @ApiProperty({ description: 'Encryption fingerprint' })
    encryptionFingerprint: string;

    @ApiProperty({ description: 'Number of messages (if applicable)' })
    numberOfMessages: number;

    @ApiProperty({ description: 'Storage location' })
    storageLocation: string;

    @ApiProperty({ description: 'Whether the file is set to auto-delete' })
    autoDelete: boolean;

    constructor(partial: Partial<ArchiveFile>) {
        Object.assign(this, partial);
    }
}
