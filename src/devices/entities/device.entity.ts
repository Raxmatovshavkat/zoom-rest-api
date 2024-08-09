import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ timestamps: true })
export class Device {
    @Prop({ required: true })
    device_name: string;

    @Prop({ required: true, unique: true })
    mac_address: string;

    @Prop({ required: true, unique: true })
    serial_number: string;

    @Prop({ required: true })
    vendor: string;

    @Prop({ required: true })
    model: string;

    @Prop({ enum: ['win', 'mac', 'ipad', 'iphone', 'android', 'linux'], required: true })
    platform_os: string;

    @Prop({ required: true })
    device_type: number;

    @Prop({ required: true })
    device_status: number;

    @Prop({ default: false })
    enrolled_in_zdm?: boolean;

    @Prop({ default: null })
    assigned_user?: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
