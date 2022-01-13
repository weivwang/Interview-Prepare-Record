function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function partition(arr, start, end) {
  let pivot = arr[end];
  let p = start - 1;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      p++;
      swap(arr, i, p);
    }
  }
  swap(arr, p + 1, end);
  return p + 1;
}
function quickSort(arr, start, end) {
  if (end - start <= 1) return;
  let index = partition(arr, start, end);
  if (index > start);
  quickSort(arr, start, index - 1);
  if (index < end) quickSort(arr, index + 1, end);
}
let array = [5, 4, 3, 2, 1];
quickSort(array, 0, 4);
console.log(array);
