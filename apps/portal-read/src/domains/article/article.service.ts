import { lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { RequestsService } from '@communication/api-utils';
import { Article } from '@communication/schema';
import { CachingService } from '../../caching/caching.service';

@Injectable()
export class ArticleService {
    constructor(
        private requestsService: RequestsService,
        private cachingService: CachingService
    ) {}

    async findOne(id: string): Promise<Article> {
        let article = await this.cachingService.get<Article>(id);

        if (!article) {
            article = await lastValueFrom(
                this.requestsService.get<Article>(
                    `http://localhost:5003/article/${id}`
                )
            );

            await this.cachingService.set<Article>(id, article);
        }

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
