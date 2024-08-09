import { Controller, Delete, Get, Param, Patch, Query, Body, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';
import { UpdateAutoDeleteStatusDto } from './dto/update-auto-delete-status.dto';
import { ArchiveFile } from './dto/archive-file.dto';
import { ArchivedFileStatisticsDto } from './dto/archived-file-statistic.dto';
import { ArchiveFilesService } from './archiving.service';

@ApiTags('archive-files')
@Controller('past_meetings')
export class ArchiveFilesController {
  constructor(private readonly archiveFilesService: ArchiveFilesService) { }

  @Delete(':meetingUUID/archive_files')
  @ApiOperation({ summary: 'Delete all archived files for a specific meeting' })
  @ApiParam({ name: 'meetingUUID', type: String, description: 'The universally unique identifier of the meeting' })
  @ApiResponse({ status: 204, description: 'Archived files deleted successfully' })
  @ApiResponse({ status: 404, description: 'No archived files found for the given meeting ID' })
  @ApiResponse({ status: 500, description: 'Failed to delete archived files' })
  async deleteArchivedFiles(@Param('meetingUUID') meetingUUID: string): Promise<void> {
    try {
      await this.archiveFilesService.deleteArchivedFilesByMeetingId(meetingUUID);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete archived files');
    }
  }

  @Delete('archive_files/:fileId')
  @ApiOperation({ summary: 'Delete an individual archived file' })
  @ApiParam({ name: 'fileId', type: String, description: 'The ID of the archived file' })
  @ApiResponse({ status: 204, description: 'Archived file deleted successfully' })
  @ApiResponse({ status: 404, description: 'Archived file not found' })
  @ApiResponse({ status: 500, description: 'Failed to delete archived file' })
  async deleteArchivedFile(@Param('fileId') fileId: string): Promise<void> {
    try {
      await this.archiveFilesService.deleteArchivedFile(fileId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete archived file');
    }
  }

  @Get(':meetingUUID/archive_files')
@ApiOperation({ summary: 'Get all archived files for a specific meeting' })
@ApiParam({ name: 'meetingUUID', type: String, description: 'The universally unique identifier of the meeting' })
@ApiResponse({ status: 200, description: 'List of archived files for the meeting', type: [ArchiveFile] })
@ApiResponse({ status: 404, description: 'No archived files found for the given meeting ID' })
@ApiResponse({ status: 500, description: 'Failed to retrieve archived files' })
async getArchivedFiles(@Param('meetingUUID') meetingUUID: string): Promise<ArchiveFile[]> {
  try {
    const archivedFiles = await this.archiveFilesService.findArchivedFilesByMeetingId(meetingUUID);
    return archivedFiles.map(file => new ArchiveFile(file)); // Ensure the constructor maps the fields correctly
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new InternalServerErrorException('Failed to retrieve archived files');
  }
}


  @Get('archive_file_statistics')
  @ApiOperation({ summary: 'Get statistics of archived files' })
  @ApiQuery({ name: 'from', type: String, description: 'Start date for the statistics' })
  @ApiQuery({ name: 'to', type: String, description: 'End date for the statistics' })
  @ApiResponse({ status: 200, description: 'Archived file statistics', type: ArchivedFileStatisticsDto })
  @ApiResponse({ status: 500, description: 'Failed to retrieve archived file statistics' })
  async getArchivedFileStatistics(@Query('from') from: string, @Query('to') to: string): Promise<ArchivedFileStatisticsDto> {
    try {
      return await this.archiveFilesService.getStatistics(from, to);
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve archived file statistics');
    }
  }

  @Patch('archive_files/:fileId/auto_delete')
  @ApiOperation({ summary: 'Update auto-delete status of an archived file' })
  @ApiParam({ name: 'fileId', type: String, description: 'The ID of the archived file' })
  @ApiBody({ type: UpdateAutoDeleteStatusDto })
  @ApiResponse({ status: 200, description: 'Archived file auto-delete status updated', type: ArchiveFile })
  @ApiResponse({ status: 404, description: 'Archived file not found' })
  @ApiResponse({ status: 500, description: 'Failed to update auto-delete status' })
  async updateAutoDeleteStatus(@Param('fileId') fileId: string, @Body() updateAutoDeleteDto: UpdateAutoDeleteStatusDto): Promise<any> {
    try {
      return await this.archiveFilesService.updateAutoDelete(fileId, updateAutoDeleteDto.autoDelete); // Pass the correct property
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to update auto-delete status');
    }
  }

  @Get('archive_files')
  @ApiOperation({ summary: 'List archived files within a date range' })
  @ApiQuery({ name: 'from', type: String, description: 'Start date for the listing' })
  @ApiQuery({ name: 'to', type: String, description: 'End date for the listing' })
  @ApiResponse({ status: 200, description: 'List of archived files', type: [ArchiveFile] })
  @ApiResponse({ status: 500, description: 'Failed to list archived files' })
  async listArchivedFiles(@Query('from') from: string, @Query('to') to: string): Promise<any> {
    try {
      return await this.archiveFilesService.listArchivedFiles(from, to);
    } catch (error) {
      throw new InternalServerErrorException('Failed to list archived files');
    }
  }
}
