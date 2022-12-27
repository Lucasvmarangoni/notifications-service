import { Content } from './content';

describe('Notification content', () => {
  it('sould be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('sould not be able to create a notification content with less than 5 caracteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('sould not be able to create a notification content with more than 255 caracteres', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
