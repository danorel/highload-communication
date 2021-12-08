import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Article } from "./article.interface";
import { ArticleCreateDto } from './dto/article.create.dto';
import { ARTICLE_MODEL } from "../constants";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(ARTICLE_MODEL)
        private articleModel: Model<Article>,
    ) {}

    async create(articleCreateDto: ArticleCreateDto): Promise<Article> {
        const createdArticle = new this.articleModel(articleCreateDto);
        return createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        return this.articleModel.find().exec();
    }
}