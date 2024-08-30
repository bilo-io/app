import { whitelistEmails } from '../permissions';

describe('utils/permissions', () => {
  test('Bilo has access', () => {
    expect(whitelistEmails.includes('bilo.lwabona@gmail.com')).toBe(true);
  });
});