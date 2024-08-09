import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArchiveFileDocument = ArchiveFile & Document;

@Schema({ timestamps: true })
export class ArchiveFile {
    @Prop({ type: String, required: true })
    meetingId: string;

    @Prop({ type: String, required: true })
    fileName: string;

    @Prop({ type: Number, required: true })
    fileSize: number;

    @Prop({ type: String, required: true })
    fileType: string;

    @Prop({ type: Boolean, default: false })
    autoDelete: boolean;

    @Prop({ type: String, required: true })
    downloadUrl: string;

    @Prop({ type: String, required: true })
    fileExtension: string;

    @Prop({ type: String, required: true })
    filePath: string;

    @Prop({ type: String, required: true })
    status: string;

    @Prop({ type: Boolean, default: false })
    individual: boolean;

    @Prop({ type: String })
    participantEmail?: string;

    @Prop({ type: String })
    participantJoinTime?: string;

    @Prop({ type: String })
    participantLeaveTime?: string;

    @Prop({ type: String })
    recordingType?: string;

    @Prop({ type: String })
    encryptionFingerprint?: string;

    @Prop({ type: Number })
    numberOfMessages?: number;

    @Prop({ type: String })
    storageLocation?: string;
}

export const ArchiveFileSchema = SchemaFactory.createForClass(ArchiveFile);
