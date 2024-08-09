// src/device/device.controller.ts
import { Controller, Post, Get, Put, Delete, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';
import { DeviceService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device } from './entities/device.entity';
import { GetDevicesDto } from './dto/get-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { AssignDeviceDto } from './dto/assign-device.dto';
import { UpgradeDevicesDto } from './dto/upgrade-device.dto';


@ApiTags('devices')
@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new device' })
  @ApiBody({ type: CreateDeviceDto })
  @ApiResponse({ status: 201, description: 'Device created successfully' })
  @ApiResponse({ status: 409, description: 'Device with same MAC address or serial number already exists' })
  async create(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.deviceService.create(createDeviceDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a device by ID' })
  @ApiResponse({ status: 200, description: 'Device retrieved successfully', type: Device })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async findOne(@Param('id') id: string): Promise<Device> {
    return this.deviceService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of devices' })
  @ApiQuery({ name: 'search_text', required: false })
  @ApiQuery({ name: 'platform_os', required: false })
  @ApiQuery({ name: 'is_enrolled_in_zdm', required: false })
  @ApiQuery({ name: 'device_type', required: false })
  @ApiQuery({ name: 'device_vendor', required: false })
  @ApiQuery({ name: 'device_model', required: false })
  @ApiQuery({ name: 'device_status', required: false })
  @ApiQuery({ name: 'page_size', required: false })
  @ApiQuery({ name: 'next_page_token', required: false })
  @ApiResponse({ status: 200, description: 'List of devices retrieved successfully' })
  async findAll(@Query() query: GetDevicesDto): Promise<{ devices: Device[] }> {
    return this.deviceService.findAll(query);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a device by ID' })
  @ApiBody({ type: UpdateDeviceDto })
  @ApiResponse({ status: 200, description: 'Device updated successfully', type: Device })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    return this.deviceService.update(id, updateDeviceDto);
  }

  @Post(':id/assign')
  @ApiOperation({ summary: 'Assign a user to a device' })
  @ApiBody({ type: AssignDeviceDto })
  @ApiResponse({ status: 200, description: 'Device assigned successfully', type: Device })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async assign(@Param('id') id: string, @Body() assignDeviceDto: AssignDeviceDto): Promise<Device> {
    return this.deviceService.assign(id, assignDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a device by ID' })
  @ApiResponse({ status: 204, description: 'Device deleted successfully' })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.deviceService.remove(id);
  }

  @Delete('/mac/:vendor/:macAddress')
  @ApiOperation({ summary: 'Delete a device by MAC address and vendor' })
  @ApiResponse({ status: 204, description: 'Device deleted successfully' })
  @ApiResponse({ status: 404, description: 'Device with given MAC address and vendor not found' })
  async deleteByMacAddress(@Param('vendor') vendor: string, @Param('macAddress') macAddress: string): Promise<void> {
    await this.deviceService.deleteByMacAddress(vendor, macAddress);
  }

  @Get('groups')
  @ApiOperation({ summary: 'Get device groups' })
  @ApiResponse({ status: 200, description: 'Device groups retrieved successfully' })
  async getDeviceGroups(): Promise<any> {
    return this.deviceService.getDeviceGroups();
  }

  @Get('zdm-group/:zdmGroupId/versions')
  @ApiOperation({ summary: 'Get ZDM group versions' })
  @ApiResponse({ status: 200, description: 'ZDM group versions retrieved successfully' })
  async getZdmGroupVersions(@Param('zdmGroupId') zdmGroupId: string): Promise<any> {
    return this.deviceService.getZdmGroupVersions(zdmGroupId);
  }

  @Post('upgrade')
  @ApiOperation({ summary: 'Upgrade devices' })
  @ApiBody({ type: UpgradeDevicesDto })
  @ApiResponse({ status: 200, description: 'Devices upgraded successfully' })
  async upgradeDevices(@Body() upgradeDevicesDto: UpgradeDevicesDto): Promise<any> {
    return this.deviceService.upgradeDevices(upgradeDevicesDto);
  }
}
