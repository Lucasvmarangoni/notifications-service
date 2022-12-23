import { NotificationRepository } from '../../src/app/repositories/notification-repository';
import { Notification } from '../../src/app/entitties/notification';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
