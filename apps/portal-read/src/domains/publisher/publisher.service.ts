import { Injectable } from '@nestjs/common';
import { RequestsService } from "@communication/api-utils";
import { Publisher } from "@communication/schema";

@Injectable()
export class PublisherService {
    constructor(private requestsService: RequestsService) {}

    async findOne(id: string): Promise<Publisher> {
        let publisher: Publisher;

        await this.requestsService
            .get<Publisher>(`http://localhost:5003/publisher/${id}`)
            .subscribe((data) => {
                publisher = data;
            });

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