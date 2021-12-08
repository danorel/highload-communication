import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class PublisherCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    surname: string;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    age: string;
}