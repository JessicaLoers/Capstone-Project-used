import { hasValidArtistValue } from './form-validation';

describe('validation artist value', () => {
  it('has a value', () => {
    expect(hasValidArtistValue('The Winstons')).toBe(true);
  });
});
