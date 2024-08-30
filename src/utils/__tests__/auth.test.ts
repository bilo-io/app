import { authProviders } from '../auth';

describe('utils/auth', () => {
  test('Should have 4 providers', () => {
    expect(authProviders.length).toBe(4);
  });
});