export default function InsertionSortWithDelay(arr, setArr, sorting_speed){
  
    const optimizedInsertionSort = (arr, delay) => {
      let n = arr.length;
  
      // Function to perform one step of insertion sort and set timeout for next step
      const insertionSortStep = (i, j) => {
        if (i < n) {
          if (j >= 0 && arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            
            // Update the array and continue swapping to the left
            setArr([...arr]);  // Trigger a re-render
            setTimeout(() => insertionSortStep(i, j - 1), delay);
          } else {
            // Move to the next element in the array
            setTimeout(() => insertionSortStep(i + 1, i), delay);
          }
        }
      };
  
      // Start the insertion sort at the second element (index 1)
      insertionSortStep(1, 0);
    };

    optimizedInsertionSort(arr, sorting_speed)

}




