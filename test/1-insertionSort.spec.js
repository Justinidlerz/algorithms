const insertionSort = require('../1-insertionSort');
const should = require('should');

describe('Insertion sort', function() {
  describe('#Sort the length of the array is 10', function() {
    it('Should correct sort', function() {
      const arr = [9, 2, 5, 6, 10, 7, 1, 4, 3, 8];
      const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      return insertionSort(arr).should.be.eql(sorted);
    })
  });
});
