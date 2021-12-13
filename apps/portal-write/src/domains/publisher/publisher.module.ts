import { Module } from '@nestjs/common';
import { RequestsModule, RequestsService } from '@communication/api-utils';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
    imports: [RequestsModule],
    controllers: [PublisherController],
    providers: [PublisherService, RequestsService]
})
export class PublisherModule {}
