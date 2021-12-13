import { Module } from '@nestjs/common';
import { RequestsModule, RequestsService } from '@communication/api-utils';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
    imports: [RequestsModule],
    controllers: [ArticleController],
    providers: [ArticleService, RequestsService]
})
export class ArticleModule {}
