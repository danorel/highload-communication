import { Module } from '@nestjs/common';
import { RequestsModule } from '@communication/api-utils';
import { CachingModule } from '@communication/caching';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
    imports: [RequestsModule, CachingModule],
    controllers: [ArticleController],
    providers: [ArticleService]
})
export class ArticleModule {}
