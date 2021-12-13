import { Injectable } from '@nestjs/common';
import { RequestsService } from '@communication/api-utils';
import { CachingService } from '@communication/caching';
import { ArticleCreateDto, ArticleUpdateDto } from '@communication/dto';
import { Article } from '@communication/schema';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ArticleService {
    constructor(
        private readonly requestsService: RequestsService,
        private readonly cachingService: CachingService
    ) {}

    async create(createDto: ArticleCreateDto): Promise<Article> {
        return await lastValueFrom(
            this.requestsService.post<Article, ArticleCreateDto>(
                `http://localhost:5003/article/`,
                createDto
            )
        );
    }

    async update(id: string, updateDto: ArticleUpdateDto): Promise<Article> {
        await this.cachingService.invalidate<Article>(id);

        return await lastValueFrom(
            this.requestsService.put<Article, ArticleUpdateDto>(
                `http://localhost:5003/article/${id}`,
                updateDto
            )
        );
    }

    async delete(id: string): Promise<Article> {
        await this.cachingService.invalidate<Article>(id);

        return await lastValueFrom(
            this.requestsService.delete<Article>(
                `http://localhost:5003/article/${id}`
            )
        );
    }
}
