import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class PublisherBaseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    surname: string;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    age: number;
}
