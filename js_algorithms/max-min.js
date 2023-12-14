function maxMin(array) {
    let max = array[0];
    let min = array[0];

    for (let i = 2; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }

        if (array[i] < min) {
            min = array[i]
        }
    }

    return [min, max]

}

console.log(maxMin([4,7,2,6,24,1,63,0]));