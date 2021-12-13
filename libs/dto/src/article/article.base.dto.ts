import { IsNotEmpty, IsString } from 'class-validator';

export class ArticleBaseDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
