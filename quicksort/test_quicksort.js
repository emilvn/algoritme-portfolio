import { quickSort } from "./quicksort.js";

let list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

console.log("List before sort:", list);
console.log("List returned from sort:", quickSort(list));
console.log("List after sort:(should also be sorted):", list);