/**
 * 插入排序
 * @param {Array} arr
 */
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const actionValue = arr[i];
    let j = i - 1;
    while (arr[j] > actionValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = actionValue;
  }
  return arr;
}

module.exports = insertionSort;
