import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send.notification';
import { CreateNotificationsBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NoticationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return notification;
  }
}
