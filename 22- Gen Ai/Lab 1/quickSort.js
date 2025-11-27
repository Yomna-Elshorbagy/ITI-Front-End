/**
 * QuickSort Implementation in JavaScript
 *
 * QuickSort is a divide-and-conquer sorting algorithm that:
 * 1. Selects a pivot element from the array
 * 2. Partitions the array so that elements less than the pivot are on the left
 *    and elements greater than the pivot are on the right
 * 3. Recursively applies the same process to the left and right sub-arrays
 *
 * Time Complexity: O(n log n) average case, O(n²) worst case
 * Space Complexity: O(log n) due to recursion stack
 */

/**
 * Main QuickSort function
 * @param {Array} arr - The array to be sorted
 * @param {number} low - The starting index (default: 0)
 * @param {number} high - The ending index (default: arr.length - 1)
 * @returns {Array} - The sorted array
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (low < high) {
    // Partition the array and get the pivot index
    // After partitioning, the pivot is in its correct sorted position
    const partitionIndex = partition(arr, low, high);

    // Recursively sort the left sub-array (elements less than pivot)
    quickSort(arr, low, partitionIndex - 1);

    // Recursively sort the right sub-array (elements greater than pivot)
    quickSort(arr, partitionIndex + 1, high);
  }

  // Return the sorted array
  return arr;
}

/**
 * Partition function
 * Selects the last element as the pivot and rearranges the array
 * so that all elements smaller than the pivot come before it,
 * and all elements greater than the pivot come after it.
 *
 * @param {Array} arr - The array to partition
 * @param {number} low - The starting index
 * @param {number} high - The ending index
 * @returns {number} - The final position of the pivot
 */
function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];

  // Initialize pointer for the smaller element
  // This pointer tracks the boundary between smaller and larger elements
  let i = low - 1;

  // Traverse through all elements
  // Compare each element with the pivot
  for (let j = low; j < high; j++) {
    // If the current element is smaller than or equal to the pivot
    if (arr[j] <= pivot) {
      // Move the boundary one position to the right
      i++;

      // Swap the current element with the element at boundary
      // This ensures smaller elements are on the left side
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Place the pivot in its correct position
  // Swap the pivot with the element at position i + 1
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // Return the final position of the pivot
  return i + 1;
}

/**
 * Alternative QuickSort using Lomuto partition scheme
 * This version is simpler to understand but slightly less efficient
 */
function quickSortLomuto(arr, low = 0, high = arr.length - 1) {
  // Base case: stop when partition size is 1 or less
  if (low < high) {
    // Partition and get pivot index
    const pivotIndex = partitionLomuto(arr, low, high);

    // Recursively sort left partition
    quickSortLomuto(arr, low, pivotIndex - 1);

    // Recursively sort right partition
    quickSortLomuto(arr, pivotIndex + 1, high);
  }

  return arr;
}

/**
 * Lomuto partition scheme
 * Uses the first element as pivot instead of the last
 *
 * @param {Array} arr - The array to partition
 * @param {number} low - The starting index
 * @param {number} high - The ending index
 * @returns {number} - The final position of the pivot
 */
function partitionLomuto(arr, low, high) {
  // Select the first element as pivot
  const pivot = arr[low];

  // Initialize index for rearrangement
  let i = low + 1;

  // Traverse the array starting from low + 1
  for (let j = low + 1; j <= high; j++) {
    // If current element is smaller than pivot
    if (arr[j] < pivot) {
      // Swap with element at position i
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // Move boundary right
      i++;
    }
  }

  // Place pivot in its correct position
  [arr[low], arr[i - 1]] = [arr[i - 1], arr[low]];

  // Return pivot's final position
  return i - 1;
}

// Export functions for use in other modules
module.exports = { quickSort, partition, quickSortLomuto, partitionLomuto };
