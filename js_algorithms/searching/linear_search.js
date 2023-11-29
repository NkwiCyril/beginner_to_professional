function linearSearch(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return `${element} found!!`
        }        
    }
    return 'Element not found!'
}

for (let i = 0; i < 10; i++) {
    console.log(linearSearch([2,4,6,4,7,8,9,3,6], i));    
}