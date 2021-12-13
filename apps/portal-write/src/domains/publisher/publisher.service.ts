import { Injectable } from '@nestjs/common';
import { RequestsService } from '@communication/api-utils';
import { PublisherCreateDto, PublisherUpdateDto } from '@communication/dto';
import { Publisher } from '@communication/schema';

@Injectable()
export class PublisherService {
    constructor(private requestsService: RequestsService) {}

    async create(createDto: PublisherCreateDto): Promise<Publisher> {
        let publisher: Publisher;

        await this.requestsService
            .post<Publisher, PublisherCreateDto>(
                `http://localhost:5003/publisher/`,
                createDto
            )
            .forEach((data) => {
                publisher = data;
            });

        return publisher;
    }

    async update(
        id: string,
        updateDto: PublisherUpdateDto
    ): Promise<Publisher> {
        let publisher: Publisher;

        await this.requestsService
            .put<Publisher, PublisherUpdateDto>(
                `http://localhost:5003/publisher/${id}`,
                updateDto
            )
            .subscribe((data) => {
                publisher = data;
            });

        return publisher;
    }

    async delete(id: string): Promise<Publisher> {
        let publisher: Publisher;

        await this.requestsService
            .delete<Publisher>(`http://localhost:5003/publisher/${id}`)
            .forEach((data) => {
                publisher = data;
            });

        return publisher;
    }
}
