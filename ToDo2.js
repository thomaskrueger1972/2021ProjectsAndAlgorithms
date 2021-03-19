testArray = [1,2,3,4,5,6,7,8,9,10]

function reverse(arr) {
    for(let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

function rotateArr(arr, shiftBy) {
    let t = Math.abs(shiftBy)
    while(t > 0) {
        if( shiftBy > 0 ) {
            let temp = arr[arr.length - 1];

            for(let i = arr.length - 1; i > 0; i--) 
                arr[i] = arr[i - 1];
                arr[0] = temp
        }   else {
                let temp = arr[0];
                for(let i = 0; i < arr.length - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                arr[arr.length - 1] = temp;
        }

        t--
    }
    return arr
}

testTwo = [1,2,3,4,5,6,7,8,9,10]

function filterRange(arr, min, max) {
    let i = 0
    while(i < arr.length)   {
        if(arr[i] <= min || arr[i] >= max) {
            let j = i
            while(j < arr.length - 1) {
                arr[j] = arr[j + 1]
            j++
            }
            arr.pop()
        } else {
            i++
        }
    }
    return arr
}

testThree = ['Greetings', 10, 'Cat']
testFour = [42, 'World', 'Dog', 27]

function newConcat(arr1, arr2) {
    let newArr = [], arrOfArr = [arr1, arr2]
        for(let i = 0; i < arrOfArr.length; i++) {
            for(let j = 0; j < arrOfArr[i].length; j++)
            newArr.push(arrOfArr[i][j])
        }
    return newArr
}

console.log('-------- REVERSE --------')
console.log(reverse(testArray))
console.log('-------- ROTATE --------')
console.log(rotateArr(testArray, 5));
console.log('-------- FILTER RANGE --------')
console.log(filterRange(testTwo, 4, 9))
console.log('-------- CONCAT --------')
console.log(newConcat(testThree, testFour))