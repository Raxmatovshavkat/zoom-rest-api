import { Controller, Param, Body, Post, Delete, Get, Patch, Put } from '@nestjs/common';
import { RecordingsService } from './cloud-recording.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Recordings')
@Controller('recordings')
export class RecordingsController {
  constructor(private readonly recordingsService: RecordingsService) { }

  @Post(':meetingId/registrants')
  @ApiOperation({ summary: 'Create a Recording Registrant' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiBody({ type: Object, description: 'Registrant Data' })
  @ApiResponse({ status: 201, description: 'Registrant Created' })
  async createRegistrant(@Param('meetingId') meetingId: string, @Body() registrantData: any) {
    return this.recordingsService.createRecordingRegistrant(meetingId, registrantData);
  }

  @Delete(':meetingId/recordings/:recordingId')
  @ApiOperation({ summary: 'Delete a Recording File' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiParam({ name: 'recordingId', type: String, description: 'Recording ID' })
  @ApiResponse({ status: 200, description: 'Recording File Deleted' })
  async deleteRecordingFile(@Param('meetingId') meetingId: string, @Param('recordingId') recordingId: string) {
    return this.recordingsService.deleteRecordingFile(meetingId, recordingId);
  }

  @Delete(':meetingId/recordings')
  @ApiOperation({ summary: 'Delete Meeting Recordings' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting Recordings Deleted' })
  async deleteMeetingRecordings(@Param('meetingId') meetingId: string) {
    return this.recordingsService.deleteMeetingRecordings(meetingId);
  }

  @Get(':meetingId/recordings/settings')
  @ApiOperation({ summary: 'Get Meeting Recording Settings' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting Recording Settings' })
  async getMeetingRecordingSettings(@Param('meetingId') meetingId: string) {
    return this.recordingsService.getMeetingRecordingSettings(meetingId);
  }

  @Get(':meetingId/recordings/analytics/details')
  @ApiOperation({ summary: 'Get Meeting Recording\'s Analytics Details' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting Recording\'s Analytics Details' })
  async getMeetingRecordingAnalyticsDetails(@Param('meetingId') meetingId: string) {
    return this.recordingsService.getMeetingRecordingAnalyticsDetails(meetingId);
  }

  @Get(':meetingId/recordings/analytics/summary')
  @ApiOperation({ summary: 'Get Meeting Recording\'s Analytics Summary' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting Recording\'s Analytics Summary' })
  async getMeetingRecordingAnalyticsSummary(@Param('meetingId') meetingId: string) {
    return this.recordingsService.getMeetingRecordingAnalyticsSummary(meetingId);
  }

  @Get(':meetingId/recordings')
  @ApiOperation({ summary: 'Get Meeting Recordings' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting Recordings' })
  async getMeetingRecordings(@Param('meetingId') meetingId: string) {
    return this.recordingsService.getMeetingRecordings(meetingId);
  }

  @Get(':meetingId/registrants/questions')
  @ApiOperation({ summary: 'Get Registration Questions' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Registration Questions' })
  async getRegistrationQuestions(@Param('meetingId') meetingId: string) {
    return this.recordingsService.getRegistrationQuestions(meetingId);
  }

  @Get()
  @ApiOperation({ summary: 'List All Recordings' })
  @ApiResponse({ status: 200, description: 'List of All Recordings' })
  async listAllRecordings() {
    return this.recordingsService.listAllRecordings();
  }

  @Get(':meetingId/registrants')
  @ApiOperation({ summary: 'List Recording Registrants' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'List of Recording Registrants' })
  async listRecordingRegistrants(@Param('meetingId') meetingId: string) {
    return this.recordingsService.listRecordingRegistrants(meetingId);
  }

  @Put(':meetingId/recordings/:recordingId/recover')
  @ApiOperation({ summary: 'Recover a Single Recording' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiParam({ name: 'recordingId', type: String, description: 'Recording ID' })
  @ApiResponse({ status: 200, description: 'Single Recording Recovered' })
  async recoverSingleRecording(@Param('meetingId') meetingId: string, @Param('recordingId') recordingId: string) {
    return this.recordingsService.recoverSingleRecording(meetingId, recordingId);
  }

  @Put(':meetingId/recordings/recover')
  @ApiOperation({ summary: 'Recover Meeting Recordings' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting Recordings Recovered' })
  async recoverMeetingRecordings(@Param('meetingId') meetingId: string) {
    return this.recordingsService.recoverMeetingRecordings(meetingId);
  }

  @Patch(':meetingId/recordings/settings')
  @ApiOperation({ summary: 'Update Meeting Recording Settings' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiBody({ type: Object, description: 'Settings Data' })
  @ApiResponse({ status: 200, description: 'Meeting Recording Settings Updated' })
  async updateMeetingRecordingSettings(@Param('meetingId') meetingId: string, @Body() settings: any) {
    return this.recordingsService.updateMeetingRecordingSettings(meetingId, settings);
  }

  @Put(':meetingId/registrants/:registrantId/status')
  @ApiOperation({ summary: 'Update Registrant\'s Status' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiParam({ name: 'registrantId', type: String, description: 'Registrant ID' })
  @ApiBody({ type: Object, description: 'Status Data' })
  @ApiResponse({ status: 200, description: 'Registrant\'s Status Updated' })
  async updateRegistrantStatus(@Param('meetingId') meetingId: string, @Param('registrantId') registrantId: string, @Body('status') status: string) {
    return this.recordingsService.updateRegistrantStatus(meetingId, registrantId, status);
  }

  @Patch(':meetingId/registrants/questions')
  @ApiOperation({ summary: 'Update Registration Questions' })
  @ApiParam({ name: 'meetingId', type: String, description: 'Meeting ID' })
  @ApiBody({ type: Object, description: 'Questions Data' })
  @ApiResponse({ status: 200, description: 'Registration Questions Updated' })
  async updateRegistrationQuestions(@Param('meetingId') meetingId: string, @Body() questions: any) {
    return this.recordingsService.updateRegistrationQuestions(meetingId, questions);
  }
}
