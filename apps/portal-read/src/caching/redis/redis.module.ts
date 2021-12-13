import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';

import { RedisService } from './redis.service';
import { store } from './redis.store';

@Module({
    imports: [
        CacheModule.register({
            store: store,
            host: 'localhost',
            port: 6379
        })
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor
        },
        RedisService
    ],
    exports: [RedisService]
})
export class RedisModule {}
