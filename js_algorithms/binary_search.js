function binarySearch(array, element) {
  let middleIndex = Math.floor(array.length / 2); // index of the middle element of the array

  let sortedArray = array.sort((a, b) => a - b); // sort the array using the sort() method
  let middleElement = sortedArray[middleIndex]; // get the element in the middle of the sorted array

  console.log(sortedArray); 
  
  if (element == middleElement) { // if the middle element equals the element being searched
    return "element found in middle";
  } else if (element < middleElement) { // if the element less than the middle element 
    for (let left = 0; left < middleIndex - 1; left++) {
      if (sortedArray[left] == element) { // search in the subarray of elements to the left side of middle element
        return "element found on left side.";
      }
    }
  } else if (element > middleElement) { // if the element greater than the middle element 
    for (let right = middleIndex + 1; right < array.length; right++) {
      if (sortedArray[right] == element) { // search in the subarray of elements to the left side of middle element
        return "element found on the right side.";
      }
    }
  } else return "Element not found!!"
}

console.log(binarySearch([3, 4, 6, 7, 9], 6));
 