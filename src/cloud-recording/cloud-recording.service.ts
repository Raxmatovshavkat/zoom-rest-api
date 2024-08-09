import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudRecording } from './entities/cloud-recording.entity';

@Injectable()
export class RecordingsService {
  constructor(
    @InjectModel(CloudRecording.name) private readonly recordingModel: Model<CloudRecording>,
  ) { }

  async createRecordingRegistrant(meetingId: string, registrantData: any): Promise<CloudRecording> {
    try {
      const recording = new this.recordingModel({ meetingId, registrantData });
      return await recording.save();
    } catch (error) {
      throw new BadRequestException('Error creating recording registrant');
    }
  }

  async deleteRecordingFile(meetingId: string, recordingId: string): Promise<any> {
    try {
      const result = await this.recordingModel.deleteOne({ meetingId, recordingId }).exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException('Recording file not found');
      }
      return result;
    } catch (error) {
      throw new BadRequestException('Error deleting recording file');
    }
  }

  async deleteMeetingRecordings(meetingId: string): Promise<any> {
    try {
      return await this.recordingModel.deleteMany({ meetingId }).exec();
    } catch (error) {
      throw new BadRequestException('Error deleting meeting recordings');
    }
  }

  async getMeetingRecordingSettings(meetingId: string): Promise<any> {
    try {
      const settings = await this.recordingModel.findOne({ meetingId }).select('settings').exec();
      if (!settings) {
        throw new NotFoundException('Meeting settings not found');
      }
      return settings;
    } catch (error) {
      throw new BadRequestException('Error retrieving meeting recording settings');
    }
  }

  async getMeetingRecordingAnalyticsDetails(meetingId: string): Promise<any> {
    try {
      const details = await this.recordingModel.findOne({ meetingId }).select('analyticsDetails').exec();
      if (!details) {
        throw new NotFoundException('Analytics details not found');
      }
      return details;
    } catch (error) {
      throw new BadRequestException('Error retrieving meeting recording analytics details');
    }
  }

  async getMeetingRecordingAnalyticsSummary(meetingId: string): Promise<any> {
    try {
      const summary = await this.recordingModel.findOne({ meetingId }).select('analyticsSummary').exec();
      if (!summary) {
        throw new NotFoundException('Analytics summary not found');
      }
      return summary;
    } catch (error) {
      throw new BadRequestException('Error retrieving meeting recording analytics summary');
    }
  }

  async getMeetingRecordings(meetingId: string): Promise<any> {
    try {
      const recordings = await this.recordingModel.findOne({ meetingId }).select('recordingList').exec();
      if (!recordings) {
        throw new NotFoundException('Meeting recordings not found');
      }
      return recordings;
    } catch (error) {
      throw new BadRequestException('Error retrieving meeting recordings');
    }
  }

  async getRegistrationQuestions(meetingId: string): Promise<any> {
    try {
      const questions = await this.recordingModel.findOne({ meetingId }).select('registrantsQuestions').exec();
      if (!questions) {
        throw new NotFoundException('Registration questions not found');
      }
      return questions;
    } catch (error) {
      throw new BadRequestException('Error retrieving registration questions');
    }
  }

  async listAllRecordings(): Promise<CloudRecording[]> {
    try {
      return await this.recordingModel.find().exec();
    } catch (error) {
      throw new BadRequestException('Error listing all recordings');
    }
  }

  async listRecordingRegistrants(meetingId: string): Promise<any> {
    try {
      const registrants = await this.recordingModel.findOne({ meetingId }).select('registrantData').exec();
      if (!registrants) {
        throw new NotFoundException('Recording registrants not found');
      }
      return registrants;
    } catch (error) {
      throw new BadRequestException('Error listing recording registrants');
    }
  }

  async recoverSingleRecording(meetingId: string, recordingId: string): Promise<any> {
    try {
      const result = await this.recordingModel.updateOne(
        { meetingId, recordingId },
        { $set: { status: 'recovered' } }
      ).exec();
      if (result.modifiedCount === 0) {
        throw new NotFoundException('Recording not found or already recovered');
      }
      return result;
    } catch (error) {
      throw new BadRequestException('Error recovering single recording');
    }
  }

  async recoverMeetingRecordings(meetingId: string): Promise<any> {
    try {
      return await this.recordingModel.updateMany(
        { meetingId },
        { $set: { status: 'recovered' } }
      ).exec();
    } catch (error) {
      throw new BadRequestException('Error recovering meeting recordings');
    }
  }

  async updateMeetingRecordingSettings(meetingId: string, settings: any): Promise<any> {
    try {
      const result = await this.recordingModel.updateOne(
        { meetingId },
        { $set: { settings } }
      ).exec();
      if (result.modifiedCount === 0) {
        throw new NotFoundException('Meeting settings not found or already updated');
      }
      return result;
    } catch (error) {
      throw new BadRequestException('Error updating meeting recording settings');
    }
  }

  async updateRegistrantStatus(meetingId: string, registrantId: string, status: string): Promise<any> {
    try {
      const result = await this.recordingModel.updateOne(
        { meetingId, 'registrantData._id': registrantId },
        { $set: { 'registrantData.$.status': status } }
      ).exec();
      if (result.modifiedCount === 0) {
        throw new NotFoundException('Registrant not found or already updated');
      }
      return result;
    } catch (error) {
      throw new BadRequestException('Error updating registrant status');
    }
  }

  async updateRegistrationQuestions(meetingId: string, questions: any): Promise<any> {
    try {
      const result = await this.recordingModel.updateOne(
        { meetingId },
        { $set: { registrantsQuestions: questions } }
      ).exec();
      if (result.modifiedCount === 0) {
        throw new NotFoundException('Meeting or questions not found or already updated');
      }
      return result;
    } catch (error) {
      throw new BadRequestException('Error updating registration questions');
    }
  }
}
