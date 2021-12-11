import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
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
}