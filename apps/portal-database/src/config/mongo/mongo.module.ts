import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoService } from './mongo.service';
import configuration from './mongo.configuration';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                MONGO_HOST: Joi.string()
                    .valid('localhost', 'mongo')
                    .default('localhost'),
                MONGO_PORT: Joi.number()
                    .default(27017),
                MONGO_DATABASE: Joi.string()
            })
        }),
    ],
    providers: [ConfigService, MongoService],
    exports: [ConfigService, MongoService],
})
export class MongoModule {}