import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { PublisherCreateDto, PublisherUpdateDto } from "@communication/dto";
import { Publisher, PUBLISHER_MODEL } from "@communication/schema";

@Injectable()
export class PublisherService {
    constructor(
        @Inject(PUBLISHER_MODEL)
        private model: Model<Publisher>,
    ) {}

    async findOne(id: string): Promise<Publisher> {
        return this.model.findById(id).exec();
    }

    async findAll(): Promise<Publisher[]> {
        return this.model.find().exec();
    }

    async create(createDto: PublisherCreateDto): Promise<Publisher> {
        const date = new Date();
        return new this.model({
            ...createDto,
            createdAt: date,
            completedAt: date
        }).save();
    }

    async update(id: string, updateDto: PublisherUpdateDto): Promise<Publisher> {
        return this.model.findByIdAndUpdate(id, {
            ...updateDto,
            completedAt: new Date()
        }).exec();
    }

    async delete(id: string): Promise<Publisher> {
        return this.model.findByIdAndDelete(id).exec();
    }
}