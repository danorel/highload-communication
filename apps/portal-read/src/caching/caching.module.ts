import { Module } from "@nestjs/common";
import { CachingService } from "./caching.service";
import { RedisModule } from "./redis/redis.module";

@Module({
    imports: [RedisModule],
    providers: [CachingService],
    exports: [CachingService]
})
export class CachingModule {}