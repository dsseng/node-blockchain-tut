import hashUtils from '../src/hash-utils';

describe('Hash utils', () => {
  it('should hash data correctly using sha256', () => {
    expect(hashUtils.sha256('hello')).toEqual('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
  });
});
