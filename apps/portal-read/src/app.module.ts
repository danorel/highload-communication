import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ArticleModule } from './domains/article/article.module';
import { PublisherModule } from "./domains/publisher/publisher.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: [
              '.env',
              '.env.development',
              '.env.development.local'
          ]
      }),
      ArticleModule,
      PublisherModule
  ],
  controllers: [
      AppController
  ],
  providers: [AppService],
})
export class AppModule {}
