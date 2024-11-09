/**
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
export function insertionSortShift(arr) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    if (cur >= arr[i - 1]) {
      continue;
    }
    let j = i;
    while (arr[j - 1] > cur && j > 0) {
      arr[j] = arr[--j];
    }
    arr[j] = cur;
  }

  return arr;
}
