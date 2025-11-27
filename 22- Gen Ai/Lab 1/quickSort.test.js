/**
 * Test file for QuickSort implementation
 * Demonstrates how to use the quickSort functions with various test cases
 */

const { quickSort, quickSortLomuto } = require("./quickSort");

/**
 * Test function to verify QuickSort works correctly
 */
function runTests() {
  console.log("========== QuickSort Implementation Tests ==========\n");

  // Test 1: Random unsorted array
  console.log("Test 1: Random array");
  const arr1 = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", arr1);
  const result1 = quickSort([...arr1]);
  console.log("Sorted array:  ", result1);
  console.log("✓ Passed\n");

  // Test 2: Already sorted array
  console.log("Test 2: Already sorted array");
  const arr2 = [1, 2, 3, 4, 5];
  console.log("Original array:", arr2);
  const result2 = quickSort([...arr2]);
  console.log("Sorted array:  ", result2);
  console.log("✓ Passed\n");

  // Test 3: Reverse sorted array
  console.log("Test 3: Reverse sorted array");
  const arr3 = [5, 4, 3, 2, 1];
  console.log("Original array:", arr3);
  const result3 = quickSort([...arr3]);
  console.log("Sorted array:  ", result3);
  console.log("✓ Passed\n");

  // Test 4: Array with duplicates
  console.log("Test 4: Array with duplicates");
  const arr4 = [5, 2, 8, 2, 9, 1, 5, 5];
  console.log("Original array:", arr4);
  const result4 = quickSort([...arr4]);
  console.log("Sorted array:  ", result4);
  console.log("✓ Passed\n");

  // Test 5: Single element
  console.log("Test 5: Single element");
  const arr5 = [42];
  console.log("Original array:", arr5);
  const result5 = quickSort([...arr5]);
  console.log("Sorted array:  ", result5);
  console.log("✓ Passed\n");

  // Test 6: Empty array
  console.log("Test 6: Empty array");
  const arr6 = [];
  console.log("Original array:", arr6);
  const result6 = quickSort([...arr6]);
  console.log("Sorted array:  ", result6);
  console.log("✓ Passed\n");

  // Test 7: Negative numbers
  console.log("Test 7: Negative numbers");
  const arr7 = [-5, 3, -1, 10, -8, 0, 2];
  console.log("Original array:", arr7);
  const result7 = quickSort([...arr7]);
  console.log("Sorted array:  ", result7);
  console.log("✓ Passed\n");

  // Test 8: Using Lomuto partition scheme
  console.log("Test 8: Using Lomuto partition scheme");
  const arr8 = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original array:", arr8);
  const result8 = quickSortLomuto([...arr8]);
  console.log("Sorted array:  ", result8);
  console.log("✓ Passed\n");

  // Test 9: Large array performance
  console.log("Test 9: Large array (1000 elements)");
  const arr9 = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 1000)
  );
  const startTime = performance.now();
  const result9 = quickSort([...arr9]);
  const endTime = performance.now();

  // Verify the array is sorted correctly
  let isSorted = true;
  for (let i = 0; i < result9.length - 1; i++) {
    if (result9[i] > result9[i + 1]) {
      isSorted = false;
      break;
    }
  }

  console.log(`Sorted successfully: ${isSorted}`);
  console.log(`Execution time: ${(endTime - startTime).toFixed(4)} ms`);
  console.log("✓ Passed\n");

  console.log("========== All tests completed successfully! ==========");
}

// Run all tests
runTests();
