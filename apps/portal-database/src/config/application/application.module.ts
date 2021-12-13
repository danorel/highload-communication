import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApplicationService } from './application.service';
import { MongoModule } from '../mongo/mongo.module';
import configuration from './application.configuration';
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
                NODE_ENV: Joi.string()
                    .valid('development', 'test', 'production')
                    .default('development')
            })
        }),
        MongoModule
    ],
    providers: [ConfigService, ApplicationService],
    exports: [ConfigService, ApplicationService]
})
export class ApplicationModule {}
