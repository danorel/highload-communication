import { Injectable } from '@nestjs/common';
import { RedisService } from './redis/redis.service';
import { CachingInterface } from './caching.interface';

@Injectable()
export class CachingService implements CachingInterface {
    constructor(private readonly service: RedisService) {}

    async get<ReadValue = unknown>(key: string): Promise<ReadValue> {
        return this.service.get<ReadValue>(key);
    }

    async set<WriteValue = unknown>(
        key: string,
        value: WriteValue
    ): Promise<WriteValue> {
        return this.service.set<WriteValue>(key, value);
    }
}
