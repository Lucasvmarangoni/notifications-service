import { Notification } from '../entitties/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
