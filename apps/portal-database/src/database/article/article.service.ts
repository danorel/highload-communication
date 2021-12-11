import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { ArticleCreateDto, ArticleUpdateDto } from "@communication/dto";
import { Article } from './article.schema';
import { ARTICLE_MODEL } from "../database.constants";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(ARTICLE_MODEL)
        private model: Model<Article>,
    ) {}

    async findOne(id: string): Promise<Article> {
        return this.model.findById(id).exec();
    }

    async findAll(): Promise<Article[]> {
        return this.model.find().exec();
    }

    async create(createDto: ArticleCreateDto): Promise<Article> {
        const date = new Date();
        return new this.model({
            ...createDto,
            createdAt: date,
            completedAt: date,
        }).save();
    }

    async update(id: string, updateDto: ArticleUpdateDto): Promise<Article> {
        return this.model.findByIdAndUpdate(id, {
            ...updateDto,
            completedAt: new Date()
        }).exec();
    }

    async delete(id: string): Promise<Article> {
        return this.model.findByIdAndDelete(id).exec();
    }
}