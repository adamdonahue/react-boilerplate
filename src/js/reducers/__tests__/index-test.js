jest.dontMock('../index');

describe('noop', function() {
  it('returns state unchanged', function() {
    var noop = require('../index').noop;
    var state = {};
    expect(noop(state)).toBe(state);
  });
});
