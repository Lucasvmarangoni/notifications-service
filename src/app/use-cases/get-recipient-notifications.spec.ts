import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { MakeNotification } from '@test/factories/notification-factroty';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});