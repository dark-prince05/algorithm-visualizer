export default function bubbleSort(arr, n){
  let swapped;
  for (let i = 0; i < n - 1; i++){
    swapped = false;
    for (let j = 0; j < n - i - 1; j++){
      if (arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped == false)
      break;
  }
  console.log(arr)
}
