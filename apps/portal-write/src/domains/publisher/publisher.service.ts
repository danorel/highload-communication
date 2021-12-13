import { Injectable } from '@nestjs/common';
import { RequestsService } from '@communication/api-utils';
import { CachingService } from '@communication/caching';
import { PublisherCreateDto, PublisherUpdateDto } from '@communication/dto';
import { Publisher } from '@communication/schema';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PublisherService {
    constructor(
        private readonly requestsService: RequestsService,
        private readonly cachingService: CachingService
    ) {}

    async create(createDto: PublisherCreateDto): Promise<Publisher> {
        return await lastValueFrom(
            this.requestsService.post<Publisher, PublisherCreateDto>(
                `http://localhost:5003/publisher/`,
                createDto
            )
        );
    }

    async update(
        id: string,
        updateDto: PublisherUpdateDto
    ): Promise<Publisher> {
        await this.cachingService.invalidate<Publisher>(id);

        return await lastValueFrom(
            this.requestsService.put<Publisher, PublisherUpdateDto>(
                `http://localhost:5003/publisher/${id}`,
                updateDto
            )
        );
    }

    async delete(id: string): Promise<Publisher> {
        await this.cachingService.invalidate<Publisher>(id);

        return await lastValueFrom(
            this.requestsService.delete<Publisher>(
                `http://localhost:5003/publisher/${id}`
            )
        );
    }
}
