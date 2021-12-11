import { Injectable } from '@nestjs/common';
import { RequestsService } from "@communication/api-utils";
import { ArticleCreateDto, ArticleUpdateDto } from "@communication/dto";
import { Article } from "@communication/schema";

@Injectable()
export class ArticleService {
    constructor(private requestsService: RequestsService) {}

    async create(createDto: ArticleCreateDto): Promise<Article> {
        let article: Article;

        await this.requestsService
            .post<Article, ArticleCreateDto>(`http://localhost:5003/article/`, createDto)
            .subscribe((data) => {
                article = data;
            });

        return article;
    }

    async update(id: string, updateDto: ArticleUpdateDto): Promise<Article> {
        let article: Article;

        await this.requestsService
            .put<Article, ArticleUpdateDto>(`http://localhost:5003/article/${id}`, updateDto)
            .subscribe((data) => {
                article = data;
            });

        return article;
    }

    async delete(id: string): Promise<Article> {
        let article: Article;

        await this.requestsService
            .delete<Article>(`http://localhost:5003/article/${id}`)
            .subscribe((data) => {
                article = data;
            });

        return article;
    }
}