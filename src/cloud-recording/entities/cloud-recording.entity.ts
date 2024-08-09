import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class CloudRecording extends Document {
    @Prop({ required: true })
    meetingId: string;

    @Prop({ required: true })
    recordingId: string;

    @Prop({ type: Object, required: false })
    registrantData?: any;

    @Prop({ type: Object, required: false })
    fileData?: any;

    @Prop({ type: Object, required: false })
    settings?: any;

    @Prop({ type: Object, required: false })
    analyticsDetails?: any;

    @Prop({ type: Object, required: false })
    analyticsSummary?: any;

    @Prop({ type: Object, required: false })
    registrantsQuestions?: any;

    @Prop({ type: [Object], required: false })
    recordingList?: any[];

    @Prop({ type: String, enum: ['recovered', 'deleted', 'active'], default: 'active' })
    status?: string;
}

export const CloudRecordingSchema = SchemaFactory.createForClass(CloudRecording);
