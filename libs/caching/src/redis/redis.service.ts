import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

import { CachingInterface } from '../caching.interface';

@Injectable()
export class RedisService implements CachingInterface {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cachingManager: Cache
    ) {}

    async get<ReadValue = unknown>(key: string): Promise<ReadValue> {
        return this.cachingManager.get<ReadValue>(key);
    }

    async set<WriteValue = unknown>(
        key: string,
        value: WriteValue
    ): Promise<WriteValue> {
        return this.cachingManager.set<WriteValue>(key, value, { ttl: 300 });
    }
}
