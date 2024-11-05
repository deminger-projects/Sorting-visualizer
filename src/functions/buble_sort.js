export default function BubbleSortWithDelay(arr, setArr, sorting_speed){

  const optimizedBubbleSort = (arr, delay) => {
    let n = arr.length;
    let swapped;

    const bubbleSortStep = (i, j) => {
      if (i < n - 1) {
        if (j < n - 1 - i) {
          // Compare adjacent elements and swap if necessary
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true
          }
          // Continue to the next comparison after a delay
          setArr([...arr]); // Trigger a re-render
          setTimeout(() => bubbleSortStep(i, j + 1), delay);
        } else {
          // Proceed to the next pass (next iteration of i)
          if (!swapped) {
             // Array is already sorted, stop sorting
            return true
          }
          swapped = false;
          setTimeout(() => bubbleSortStep(i + 1, 0), delay);
        }
      } 
    };
    swapped = false;

    bubbleSortStep(0, 0);
    
  };

  optimizedBubbleSort(arr, sorting_speed)

}