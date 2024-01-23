function findAndDelete(arr, num) {
    var arrLength = arr.length;
    var lastElement = arr[arrLength - 1];
  
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] == num) {
        let temp = arr[i];
        arr[i] = lastElement;
        lastElement = temp;
  
        arr.length--;
  
        console.log(arr);
        temp = arr[i];
        arr[i] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        console.log(arr);
      }
    }
  }
  
  findAndDelete([1, 2, 3, 4, 5, 6, 7], 3);
  