import { Module } from '@nestjs/common';
import { RequestsModule, RequestsService } from "@communication/api-utils";
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { CachingModule } from '../../caching/caching.module';

@Module({
    imports: [RequestsModule, CachingModule],
    controllers: [PublisherController],
    providers: [PublisherService, RequestsService]
})
export class PublisherModule {}