/**
 * Function to find index of element in sorted array of elements, using binary search
 * @param {T} search element to search for
 * @param {T[]} values sorted array of elements
 * @param {number} start start index of array
 * @param {number} end end index of array
 * @param {((a: T, b: T) => number) | undefined} comparefunc function to compare elements,
 * should return negative number if value of a < b, 0 if they are the same, and positive if value of a > b
 * @returns {number} index of element, or -1 if not found
 */
export function binarySearchRecursive(search, values, start, end, comparefunc) {
  if (start > end) return -1;
  if (!comparefunc) {
    comparefunc = (a, b) => {
      if (typeof search === "string") return a.localeCompare(b);
      if (typeof search === "number") return a - b;
      throw new Error(
        "Unsupported type, please provide your own compare function"
      );
    };
  }
  const mid = Math.floor((start + end) / 2);
  const c = comparefunc(values[mid], search);

  if (c === 0) {
    return mid;
  }

  if (c > 0) {
    return binarySearchRecursive(search, values, start, end - 1, comparefunc);
  }
  return binarySearchRecursive(search, values, mid + 1, end, comparefunc);
}
