import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { articleProvider } from './article.provider';
import { DatabaseModule } from "../database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController],
    providers: [
        ArticleService,
        ...articleProvider,
    ],
})
export class ArticleModule {}