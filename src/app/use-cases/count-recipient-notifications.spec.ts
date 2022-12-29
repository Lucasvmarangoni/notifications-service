import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { MakeNotification } from '@test/factories/notification-factroty';
import { CountRecipientNotifications } from './count-recipient-notification';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
