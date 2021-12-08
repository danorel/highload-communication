import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoService } from "../mongo/mongo.service";

/**
 * Service dealing with mongo config based operations.
 *
 * @class
 */
@Injectable()
export class ApplicationService {
    constructor(
        private configService: ConfigService,
        private mongoService: MongoService
    ) {}

    get nodeEnv(): string {
        return this.configService.get<string>('application.node_env');
    }
    get connectionString(): string {
        const nodeEnv = this.nodeEnv;

        switch (nodeEnv) {
            case 'production':
                return `mongodb://${this.mongoService.username}:${this.mongoService.password}@${this.mongoService.host}:${this.mongoService.port}/${this.mongoService.database}`;
            case 'development':
                return `mongodb://${this.mongoService.host}:${this.mongoService.port}/${this.mongoService.database}`;
            default:
                return "";
        }
    }
}