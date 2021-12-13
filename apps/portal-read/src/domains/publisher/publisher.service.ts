import { Injectable } from '@nestjs/common';
import { RequestsService } from '@communication/api-utils';
import { CachingService } from '@communication/caching';
import { Publisher } from '@communication/schema';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PublisherService {
    constructor(
        private readonly requestsService: RequestsService,
        private readonly cachingService: CachingService
    ) {}

    async findOne(id: string): Promise<Publisher> {
        let publisher = await this.cachingService.get<Publisher>(id);

        if (!publisher) {
            publisher = await lastValueFrom(
                this.requestsService.get<Publisher>(
                    `http://localhost:5003/publisher/${id}`
                )
            );

            await this.cachingService.set<Publisher>(id, publisher);
        }

        return publisher;
    }

    async findAll(): Promise<Publisher[]> {
        let publishers: Publisher[];

        await this.requestsService
            .get<Publisher[]>(`http://localhost:5003/publisher/`)
            .forEach((data) => {
                publishers = data;
            });

        return publishers;
    }
}
