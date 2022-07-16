
const array = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10, [11, 12], 13, 14, 15], 16], 17], 18]
const result = []


const flattenArray = function(arr) {
    console.log(arguments)
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
    if(typeof  currentValue !== 'number') {
        flattenArray(currentValue)
    }else{
        result.push(currentValue)
    }
    }
}

flattenArray(array)
console.log(result)