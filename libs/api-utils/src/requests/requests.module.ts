import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RequestsService } from './requests.service';

@Module({
    imports: [HttpModule],
    providers: [RequestsService],
    exports: [HttpModule, RequestsService]
})
export class RequestsModule {}
