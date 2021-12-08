import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { articleProvider } from './article.provider';

@Module({
    controllers: [ArticleController],
    providers: [
        ArticleService,
        ...articleProvider,
    ],
})
export class ArticleModule {}