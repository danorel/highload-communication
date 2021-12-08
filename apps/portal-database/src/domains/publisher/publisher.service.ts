import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Publisher } from "./publisher.interface";
import { PublisherCreateDto } from './dto/publisher.create.dto';
import { PUBLISHER_MODEL } from "../constants";

@Injectable()
export class PublisherService {
    constructor(
        @Inject(PUBLISHER_MODEL)
        private publisherModel: Model<Publisher>,
    ) {}

    async create(publisherCreateDto: PublisherCreateDto): Promise<Publisher> {
        const createdArticle = new this.publisherModel(publisherCreateDto);
        return createdArticle.save();
    }

    async findAll(): Promise<Publisher[]> {
        return this.publisherModel.find().exec();
    }
}