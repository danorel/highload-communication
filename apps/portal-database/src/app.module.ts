import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';

import mongoConfig from "./config/mongo";

import { ArticleModule } from "./domains/article/article.module";
import { PublisherModule } from "./domains/publisher/publisher.module";

const config = mongoConfig();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.development',
        '.env.development.local'
      ],
      load: [mongoConfig]
    }),
    MongooseModule.forRoot(config.url),
    ArticleModule,
    PublisherModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
