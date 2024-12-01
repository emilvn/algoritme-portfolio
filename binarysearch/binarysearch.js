let iterations = 0;
/**
 * Function to find index of element in sorted array of elements, using binary search
 * @param {T} search element to search for
 * @param {T[]} values sorted array of elements
 * @param {((a: T, b: T) => number) | undefined} comparefunc function to compare elements,
 * should return negative number if value of a < b, 0 if they are the same, and positive if value of a > b
 * @returns {number} index of element, or -1 if not found
 */
export function binarySearch(search, values, comparefunc) {
  if (!comparefunc) {
    comparefunc = (a, b) => {
      if (typeof search === "string") return a.localeCompare(b);
      if (typeof search === "number") return a - b;
      throw new Error(
        "Unsupported type, please provide your own compare function"
      );
    };
  }
  let max = values.length - 1;
  let min = 0;

  while (max >= min) {
    iterations++;
    const mid = Math.floor((max + min) / 2);
    const c = comparefunc(values[mid], search);

    if (c === 0) {
      return mid;
    }
    if (c > 0) {
      max = mid - 1;
    } else if (c < 0) {
      min = mid + 1;
    }
  }
  return -1;
}

export function getIterations() {
  return iterations;
}

export function resetIterations() {
  iterations = 0;
}
