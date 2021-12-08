import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller()
export class ArticleController {
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findOne(@Param() params): string {
        return 'This action returns all cats';
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}