/**
 * 插入排序
 * @param {Array} arr
 */
const insertionSort = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    let j = i - 1;
    while (j > 0 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = arr[i];
  }
}

module.export = insertionSort;
