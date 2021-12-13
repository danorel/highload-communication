import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { publisherProvider } from './publisher.provider';
import { DatabaseModule } from '../database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PublisherController],
    providers: [PublisherService, ...publisherProvider]
})
export class PublisherModule {}
