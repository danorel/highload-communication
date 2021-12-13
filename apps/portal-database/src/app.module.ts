import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ArticleModule } from './domains/article/article.module';
import { PublisherModule } from './domains/publisher/publisher.module';

import { MongoModule } from './config/mongo/mongo.module';
import { ApplicationModule } from './config/application/application.module';
import { DatabaseModule } from './domains/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env', '.env.development', '.env.development.local']
        }),
        // Configuration modules
        MongoModule,
        ApplicationModule,
        // Mongoose module
        MongooseModule.forRoot('mongodb://localhost:27017/communication'),
        // Mongo schema modules
        DatabaseModule,
        ArticleModule,
        PublisherModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
