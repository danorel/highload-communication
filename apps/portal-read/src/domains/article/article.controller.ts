import { Controller, Param, Get } from '@nestjs/common';
import { Article } from "@communication/schema";
import { ArticleService } from "./article.service";

@Controller('article')
export class ArticleController {
    constructor(private readonly service: ArticleService) {}

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Article> {
        return await this.service.findOne(id);
    }

    @Get()
    async findAll(): Promise<Article[]> {
        return await this.service.findAll();
    }
}