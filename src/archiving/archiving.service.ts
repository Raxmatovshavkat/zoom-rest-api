import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArchiveFile, ArchiveFileDocument } from './entities/archiving.entity';

@Injectable()
export class ArchiveFilesService {
  constructor(@InjectModel(ArchiveFile.name) private readonly archiveFileModel: Model<ArchiveFileDocument>,) { }

  async findArchivedFilesByMeetingId(meetingId: string): Promise<ArchiveFile[]> {
    try {
      return await this.archiveFileModel.find({ meetingId }).exec();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve archived files for the meeting');
    }
  }

  async getStatistics(from: string, to: string): Promise<any> {
    try {
      const totalRecords = await this.archiveFileModel.countDocuments({ createdAt: { $gte: new Date(from), $lte: new Date(to) } }).exec();
      const statsByFileExtension = await this.archiveFileModel.aggregate([
        {
          $match: { createdAt: { $gte: new Date(from), $lte: new Date(to) } },
        },
        {
          $group: {
            _id: null,
            mp4FileCount: { $sum: { $cond: [{ $eq: ['$fileExtension', 'mp4'] }, 1, 0] } },
            m4aFileCount: { $sum: { $cond: [{ $eq: ['$fileExtension', 'm4a'] }, 1, 0] } },
            txtFileCount: { $sum: { $cond: [{ $eq: ['$fileExtension', 'txt'] }, 1, 0] } },
            jsonFileCount: { $sum: { $cond: [{ $eq: ['$fileExtension', 'json'] }, 1, 0] } },
            vttFileCount: { $sum: { $cond: [{ $eq: ['$fileExtension', 'vtt'] }, 1, 0] } },
          },
        },
      ]).exec();

      const statsByFileStatus = await this.archiveFileModel.aggregate([
        {
          $match: { createdAt: { $gte: new Date(from), $lte: new Date(to) } },
        },
        {
          $group: {
            _id: null,
            processingFileCount: { $sum: { $cond: [{ $eq: ['$status', 'processing'] }, 1, 0] } },
            completedFileCount: { $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] } },
            failedFileCount: { $sum: { $cond: [{ $eq: ['$status', 'failed'] }, 1, 0] } },
          },
        },
      ]).exec();

      return {
        from,
        to,
        totalRecords,
        statisticByFileExtension: statsByFileExtension[0],
        statisticByFileStatus: statsByFileStatus[0],
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve archived file statistics');
    }
  }

  async updateAutoDelete(fileId: string, autoDelete: boolean): Promise<ArchiveFile> {
    try {
      const updatedFile = await this.archiveFileModel.findByIdAndUpdate(fileId, { autoDelete }, { new: true }).exec();
      if (!updatedFile) {
        throw new NotFoundException(`Archived file with ID ${fileId} not found`);
      }
      return updatedFile;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update auto-delete status');
    }
  }

  async deleteArchivedFilesByMeetingId(meetingId: string): Promise<void> {
    try {
      const result = await this.archiveFileModel.deleteMany({ meetingId }).exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException(`No archived files found for meeting ID ${meetingId}`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete archived files for the meeting');
    }
  }

  async deleteArchivedFile(fileId: string): Promise<void> {
    try {
      const result = await this.archiveFileModel.findByIdAndDelete(fileId).exec();
      if (!result) {
        throw new NotFoundException(`Archived file with ID ${fileId} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete archived file');
    }
  }
  async listArchivedFiles(from: string, to: string): Promise<ArchiveFile[]> {
    try {
      return await this.archiveFileModel.find({ createdAt: { $gte: new Date(from), $lte: new Date(to) } }).exec();
    } catch (error) {
      throw new InternalServerErrorException('Failed to list archived files');
    }
  }
}
