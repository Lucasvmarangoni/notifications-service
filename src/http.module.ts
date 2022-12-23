import { Module } from '@nestjs/common';
import { NoticationsController } from './infra/http/controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NoticationsController],
})
export class HttpModule {}
