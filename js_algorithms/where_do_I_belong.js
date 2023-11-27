
function getIndexToIns(arr, num) {

    arr.push(num)
    arr.sort((a,b) => a - b )
    let index = arr.indexOf(num)

    return index;
  }
  
  console.log(getIndexToIns([10,20,30,40,50], 30));