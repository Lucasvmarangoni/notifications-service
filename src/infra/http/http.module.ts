import { Module } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send.notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NoticationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notification';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
