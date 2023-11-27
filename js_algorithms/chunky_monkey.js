function chunkArrayInGroups(arr, size) {
    
    let array2D = []
    
    let condition = arr.length 

    for (let start = 0; start <= condition; start = start + size) {

        for (let end = start + size; end <= condition; end = end + size) {

            let newArr = arr.slice(start, end)
            
            array2D.push(newArr)
        }
    }

    return array2D;

  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));