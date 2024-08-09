import { Module } from '@nestjs/common';
import { ArchiveFilesService } from './archiving.service';
import { ArchiveFilesController } from './archiving.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArchiveFile, ArchiveFileSchema } from './entities/archiving.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: ArchiveFile.name, schema: ArchiveFileSchema }])],
  controllers: [ArchiveFilesController],
  providers: [ArchiveFilesService],
  exports:[ArchiveFilesService]
})
export class ArchivingFileModule {}
