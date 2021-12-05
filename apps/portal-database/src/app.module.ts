import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import mongoConfig from "./config/mongo";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.development',
        '.env.development.local'
      ],
      load: [mongoConfig]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
