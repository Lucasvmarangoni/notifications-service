import { Module } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send.notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NoticationsController } from '../controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticationsController],
  providers: [SendNotification],
})
export class HttpModule {}
