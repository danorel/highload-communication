import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with mongo config based operations.
 *
 * @class
 */
@Injectable()
export class MongoService {
    constructor(private configService: ConfigService) {}

    get host(): string {
        return this.configService.get<string>('mongo.host');
    }
    get port(): number {
        return this.configService.get<number>('mongo.port');
    }
    get username(): string {
        return this.configService.get<string>('mongo.username');
    }
    get password(): string {
        return this.configService.get<string>('mongo.password');
    }
    get database(): string {
        return this.configService.get<string>('mongo.database');
    }
}
