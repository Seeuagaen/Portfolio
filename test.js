// test.js
const assert = require('assert');

// Пример теста
describe('Array', function() {
  describe('#indexOf()', function() {
    it('должен возвращать -1, если значение не найдено', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
