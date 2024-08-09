import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Device, DeviceSchema } from './entities/device.entity';
import { DeviceService } from './devices.service';
import { DeviceController } from './devices.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }])],
  providers: [DeviceService],
  controllers: [DeviceController],
  exports: [DeviceService],
})
export class DeviceModule { }
