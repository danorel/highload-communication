import {
    Body,
    Controller,
    Param,
    Get,
    Post,
    Put,
    Delete
} from '@nestjs/common';
import { ArticleCreateDto, ArticleUpdateDto } from '@communication/dto';
import { Article } from '@communication/schema';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly service: ArticleService) {}

    @Post()
    async create(@Body() createDto: ArticleCreateDto): Promise<Article> {
        return await this.service.create(createDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Article> {
        return await this.service.findOne(id);
    }

    @Get()
    async findAll(): Promise<Article[]> {
        return await this.service.findAll();
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDto: ArticleUpdateDto
    ): Promise<Article> {
        return await this.service.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Article> {
        return await this.service.delete(id);
    }
}
