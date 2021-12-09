import { Body, Controller, Param, Delete, Get, Post, Put } from '@nestjs/common';
import { PublisherService } from "./publisher.service";
import { Publisher } from "./publisher.schema";
import { PublisherCreateDto } from "./dto/publisher.create.dto";
import { PublisherUpdateDto } from "./dto/publisher.update.dto";

@Controller('publisher')
export class PublisherController {
    constructor(private readonly service: PublisherService) {}

    @Post()
    async create(@Body() createDto: PublisherCreateDto): Promise<Publisher> {
        return await this.service.create(createDto);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Publisher> {
        return await this.service.findOne(id);
    }

    @Get()
    async findAll(): Promise<Publisher[]> {
        return await this.service.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDto: PublisherUpdateDto): Promise<Publisher> {
        return await this.service.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Publisher> {
        return await this.service.delete(id);
    }
}