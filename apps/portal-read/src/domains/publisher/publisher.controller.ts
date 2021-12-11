import { Controller, Param, Get } from '@nestjs/common';
import { Publisher } from "@communication/schema";
import { PublisherService } from "./publisher.service";

@Controller('publisher')
export class PublisherController {
    constructor(private readonly service: PublisherService) {}

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Publisher> {
        return await this.service.findOne(id);
    }

    @Get()
    async findAll(): Promise<Publisher[]> {
        return await this.service.findAll();
    }
}