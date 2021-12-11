import { Injectable } from '@nestjs/common';
import { RequestsService } from "@communication/api-utils";
import { Article } from "@communication/schema";

@Injectable()
export class ArticleService {
    constructor(private requestsService: RequestsService) {}

    async findOne(id: string): Promise<Article> {
        let article: Article;

        await this.requestsService
            .get<Article>(`http://localhost:5003/article/${id}`)
            .subscribe((data) => {
                article = data;
            });

        return article;
    }

    async findAll(): Promise<Article[]> {
        let articles: Article[];

        await this.requestsService
            .get<Article[]>(`http://localhost:5003/article/`)
            .subscribe((data) => {
                articles = data;
            });

        return articles;
    }
}