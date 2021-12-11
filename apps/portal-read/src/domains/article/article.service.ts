import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Article, ARTICLE_MODEL } from "@communication/schema";

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
}