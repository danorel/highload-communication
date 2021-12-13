import { Controller, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PublisherCreateDto, PublisherUpdateDto } from '@communication/dto';
import { Publisher } from '@communication/schema';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
    constructor(private readonly service: PublisherService) {}

    @Post()
    async create(@Body() createDto: PublisherCreateDto): Promise<Publisher> {
        return await this.service.create(createDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDto: PublisherUpdateDto
    ): Promise<Publisher> {
        return await this.service.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Publisher> {
        return await this.service.delete(id);
    }
}
