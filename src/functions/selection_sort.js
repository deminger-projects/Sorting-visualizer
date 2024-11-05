export default function SelectionSortWithDelay(arr, setArr, sorting_speed){

    const optimizedSelectionSort = (arr, delay) => {
      let n = arr.length;
  
      // Function to perform one step of selection sort and set timeout for the next step
      const selectionSortStep = (i) => {
        if (i < n - 1) {
          // Find the minimum element in the unsorted part
          let minIndex = i;
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
          }
  
          // If the minIndex is different from the current index, swap them
          if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
  
            // Trigger a re-render to show the new state of the array
            setArr([...arr]);  // Update the array state in React
          }
  
          // Move to the next step
          setTimeout(() => selectionSortStep(i + 1), delay);
        }
      };
  
      // Start the selection sort at the first index (0)
      selectionSortStep(0);
    };
  
    // Start sorting with a 5ms delay between each step
    optimizedSelectionSort(arr, sorting_speed);
  }