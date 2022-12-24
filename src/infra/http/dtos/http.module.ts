import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send.notification';
import { DatabaseModule } from 'src/infra/database/database.module';
import { NoticationsController } from '../controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticationsController],
  providers: [SendNotification],
})
export class HttpModule {}
