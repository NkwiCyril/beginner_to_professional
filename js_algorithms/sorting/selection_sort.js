// what do I aim to do?
// principle: find the smallest and compare with the first element
// if smaller, we swap their positions else maintain the index


function selectionSort(array) {
  for (let i = 0; i <= array.length - 1; i++) { // n - 1

    let min = array[i];
    
    for (j = i; j <= array.length - 1; j++) { // n * n - 1 
      if (min > array[j]) {

        min = array[j];
        
        var tem = array[i];
        array[i] = array[j];
        array[j] = tem;
      }
    }
  }
  return array;
}

console.log(selectionSort([7, 2, 5, 4, 1, 6, 0, 3]));
