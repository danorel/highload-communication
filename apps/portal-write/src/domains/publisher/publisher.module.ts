import { Module } from '@nestjs/common';
import { RequestsModule } from '@communication/api-utils';
import { CachingModule } from '@communication/caching';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
    imports: [RequestsModule, CachingModule],
    controllers: [PublisherController],
    providers: [PublisherService]
})
export class PublisherModule {}
