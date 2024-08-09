import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device, DeviceDocument } from './entities/device.entity';
import { CreateDeviceDto } from './dto/create-device.dto';
import { GetDevicesDto } from './dto/get-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { AssignDeviceDto } from './dto/assign-device.dto';
import { UpgradeDevicesDto } from './dto/upgrade-device.dto';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device.name) private deviceModel: Model<DeviceDocument>) { }

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const existingDevice = await this.deviceModel.findOne({
      $or: [
        { mac_address: createDeviceDto.mac_address },
        { serial_number: createDeviceDto.serial_number }
      ]
    }).exec();

    if (existingDevice) {
      throw new ConflictException('Device with the same MAC address or serial number already exists');
    }

    const newDevice = new this.deviceModel(createDeviceDto);
    return newDevice.save();
  }

  async findOne(deviceId: string): Promise<Device> {
    const device = await this.deviceModel.findById(deviceId).exec();
    if (!device) {
      throw new NotFoundException(`Device with ID ${deviceId} not found`);
    }
    return device;
  }

  async findAll(query: GetDevicesDto): Promise<{ devices: Device[] }> {
    const filters: any = {};

    if (query.search_text) {
      filters.device_name = { $regex: query.search_text, $options: 'i' };
    }

    if (query.platform_os) {
      filters.platform_os = query.platform_os;
    }

    if (query.is_enrolled_in_zdm !== undefined) {
      filters.enrolled_in_zdm = query.is_enrolled_in_zdm; // Directly assign the boolean value
    }

    if (query.device_type !== undefined) {
      filters.device_type = query.device_type;
    }

    if (query.device_vendor) {
      filters.device_vendor = query.device_vendor;
    }

    if (query.device_model) {
      filters.device_model = query.device_model;
    }

    if (query.device_status !== undefined) {
      filters.device_status = query.device_status;
    }

    const devices = await this.deviceModel.find(filters)
      .limit(query.page_size || 30)
      .exec();

    return { devices };
  }
  async update(deviceId: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    const updatedDevice = await this.deviceModel.findByIdAndUpdate(deviceId, updateDeviceDto, { new: true }).exec();
    if (!updatedDevice) {
      throw new NotFoundException(`Device with ID ${deviceId} not found`);
    }
    return updatedDevice;
  }

  async assign(deviceId: string, assignDeviceDto: AssignDeviceDto): Promise<Device> {
    const updatedDevice = await this.deviceModel.findByIdAndUpdate(deviceId, { assigned_user: assignDeviceDto.assigned_user }, { new: true }).exec();
    if (!updatedDevice) {
      throw new NotFoundException(`Device with ID ${deviceId} not found`);
    }
    return updatedDevice;
  }

  async remove(deviceId: string): Promise<void> {
    const result = await this.deviceModel.findByIdAndDelete(deviceId).exec();
    if (!result) {
      throw new NotFoundException(`Device with ID ${deviceId} not found`);
    }
  }

  async deleteByMacAddress(vendor: string, macAddress: string): Promise<void> {
    const result = await this.deviceModel.deleteOne({ mac_address: macAddress, vendor }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Device with MAC address ${macAddress} not found`);
    }
  }

  async getDeviceGroups(): Promise<any> {
    // Implement logic to get device groups
    return {};
  }

  async getZdmGroupVersions(zdmGroupId: string): Promise<any> {
    // Implement logic to get ZDM group versions
    return {};
  }

  async upgradeDevices(upgradeDevicesDto: UpgradeDevicesDto): Promise<any> {
    // Implement logic to upgrade devices
    return {};
  }
}
